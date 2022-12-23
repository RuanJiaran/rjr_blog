# webpack4 + vue2 从零开始搭建项目

## 1. 创建项目文件夹

创建项目文件夹 `kol_web_webpack4`

## 2. 创建 package.json

在项目文件夹下运行 `npm init` ，一路回车键创建 package.json 文件

## 3. 安装 vue2 及 webpack4 常用包

```cmd
npm install vue@2 vue-router@3 babel-polyfill@6 lodash@4
npm install -D vue-loader@15
npm install -D webpack@4 webpack-cli@4 webpack-dev-server@4 webpack-merge@4 webpack-bundle-analyzer@4
npm install -D style-loader@2 css-loader@5 less@4 less-loader@7 url-loader@4 file-loader@6
npm install -D babel-loader@7 babel-core@6 babel-preset-env@1 babel-plugin-lodash@3
npm install -D postcss-loader@4 autoprefixer@7
npm install -D cross-env@7 prettier@2
npm install -D clean-webpack-plugin@4 html-webpack-plugin@4 mini-css-extract-plugin@1 optimize-css-assets-webpack-plugin@5 speed-measure-webpack-plugin@1 uglifyjs-webpack-plugin@2
```

## 4. 修改 package.json

增加 _scripts_ 和 _browserslist_

```json
{
  "scripts": {
    "start": "cross-env NODE_ENV=development webpack-dev-server --progress --config webpack/webpack.dev.js",
    "start:smp": "cross-env SMP=true npm run start",
    "build": "cross-env NODE_ENV=production SMP=true webpack --config webpack/webpack.prod.js",
    "analyz": "cross-env analyz=true npm run build"
  },
  "browserslist": ["> 1%", "last 2 versions", "ie >= 8"]
}
```

## 5. 创建项目基本目录和文件

#### 5.1 创建 `webpack/utils.js` 文件

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';
const isAnalyz = process.env.analyz === 'true';
const isSmp = process.env.SMP === 'true';

const getStyleLoaders = (preProcessor) => {
  return [
    isProd && {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: '../',
      },
    },
    isDev && 'style-loader',
    'css-loader',
    'postcss-loader',
    preProcessor,
  ].filter(Boolean);
};

module.exports = {
  getStyleLoaders,
  isProd,
  isDev,
  isAnalyz,
  isSmp,
};
```

#### 5.2 创建 `webpack/webpack.common.js` 文件

```js
const path = require('path');
const { getStyleLoaders } = require('./utils.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: ['babel-polyfill', path.resolve(__dirname, '../src/main.js')],
  output: {
    filename: 'js/[name].js',
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      // vue$: 'vue/dist/vue.esm.js', //初始化vue使用的是compiler模式时一定要指定,否则报提示
      '@': path.resolve(__dirname, '../src'), //给src目录起个别名@ ，引用src目录的时候，可用@替代
    },
  },
  stats: {
    children: false,
    modules: false,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: getStyleLoaders(),
      },
      {
        test: /\.less$/,
        use: getStyleLoaders({
          loader: 'less-loader',
        }),
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[contenthash:10].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 当文件大小小于limit byte时会把图片转换为base64编码的dataurl，否则返回普通的图片
              limit: 8192,
              name: 'images/[name].[contenthash:10].[ext]',
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
    }),
    new VueLoaderPlugin(),
  ],
};
```

#### 5.3 创建 `webpack/webpack.dev.js` 文件

```js
const merge = require('webpack-merge');
const { isSmp } = require('./utils.js');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

const smp = new SpeedMeasurePlugin();

const config = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    // host: 'localhost',
    // port: 8000,
    open: false,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5000/',
      },
    },
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});

module.exports = isSmp ? smp.wrap(config) : config;
```

#### 5.4 创建 `webpack/webpack.prod.js` 文件

```js
const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');
const { isAnalyz, isSmp } = require('./utils.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

const smp = new SpeedMeasurePlugin();

const config = merge(common, {
  output: {
    filename: 'js/[name].[contenthash:10].js',
    path: path.resolve(__dirname, '../dist'),
  },
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 500000, //这里引入的包大小小于设置的最小值，那么这里的引入模块就不会进行代码分割。
      maxSize: 1000000, //如果引入的包大小已经超过了设置的最大值，那么webpack会尝试对该包再进行分割
      minChunks: 1, //触发代码分割的引入次数，如果为2 那么一个资源最少被引用两次才可以被拆分出来
      maxAsyncRequests: 10,
      maxInitialRequests: 5,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        iview: {
          test: /[\\/]node_modules[\\/]iview/,
          // minSize: 100000,
          // maxSize: 200000,
          name: 'vendors~main~iview',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    isAnalyz &&
      new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerHost: 'localhost',
        analyzerPort: 8888,
      }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:10].css',
      chunkFilename: 'css/[name].[contenthash:10].chunk.css',
    }),
    new OptimizeCSSAssetsPlugin({
      cssProcessor: require('cssnano'),
    }),
    // new UglifyJsPlugin({
    //   sourceMap: true
    // }),
    new CompressionPlugin({
      test: /iview(.*?).js$/,
    }),
  ].filter(Boolean),
});

module.exports = isSmp ? smp.wrap(config) : config;
```

#### 5.5 创建 `.gitignore` 文件

```
.DS_Store
node_modules/
/dist/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
# Editor directories and files
.idea
.vscode
*.suo
*.ntvs*
*.njsproj
*.sln
```

#### 5.6 创建 `.prettierrc.js` 文件

```js
module.exports = {
  printWidth: 100,
  tabWidth: 2, // 指定2个空格缩进
  useTabs: false,
  semi: false, // 是否在句尾打印分号
  singleQuote: true, //  是否使用单引号
  quoteProps: 'as-needed', // 仅在需要时在对象属性周围添加引号
  jsxSingleQuote: false, //  jsx是否使用单引号
  trailingComma: 'none', // 没有尾随逗号
  bracketSpacing: true, // 对象 {} 是否留空格 例如： true { foo: bar }  false {foo: bar}
  jsxBracketSameLine: false, // 将多行 JSX 元素的 /> 单独放一行
  bracketSameLine: false, // 将多行 HTML, JSX, Vue, Angular 元素的 /> 单独放一行
  arrowParens: 'always', // 在箭头函数参数周围包含括号
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'css',
  vueIndentScriptAndStyle: false,
  endOfLine: 'lf',
};
```

#### 5.7 创建 `.prettierignore` 文件

```
.DS_Store
node_modules
coverage
.vscode
.husky
```

#### 5.8 创建 `.postcssrc.js` 文件

```js
// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: {
    autoprefixer: {},
  },
};
```

#### 5.9 创建 `.babelrc` 文件

```json
{
  "presets": ["env"],
  "plugins": ["lodash"]
}
```

#### 5.10 创建 `index.html` 文件

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
    />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta name="description" content="网红,kol,出海网红,kol直聘," />
    <meta name="Keywords" content="网红,kol,出海网红,kol直聘," />
    <title>KOL直聘网</title>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```

#### 5.11 创建 `README.md` 文件

````markdown
安装项目依赖

```bash
npm install
```

启动项目

```bash
npm run start
```

打包构建项目

```bash
npm run build
```
````

#### 5.12 创建 `src/main.js` 文件

```js
import { join } from 'lodash';

function component() {
  var element = document.createElement('div');

  element.innerHTML = join(['webpack', 'vue2', '实践'], '-');

  return element;
}

document.body.appendChild(component());

if (module.hot) {
  module.hot.accept();
}
```

## 6. 启动项目

![image-20221127185741883](/img/image-20221127185741883.png)

![image-20221127185812538](/img/image-20221127185812538.png)

## 7. 开始写 vue 代码

#### 7.1 创建 `src/App.vue` 文件

```vue
<template>
  <div>app</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    console.log('app');
  },
};
</script>
```

#### 7.2 修改 `src/main.js` 文件

```js
import Vue from 'vue';
import App from './App';

new Vue({
  el: '#app',
  render: (h) => h(App),
});
```

#### 7.3 查看效果

![image-20221127201255560](/img/image-20221127201255560.png)

#### 7.4 目录结构总览

![image-20221127202453077](/img/image-20221127202453077.png)

## 8. 整合 vue-router 路由

#### 8.1 创建 `src/router/index.js` 路由文件

```js
import Vue from 'vue';
import VueRouter from 'vue-router';
import index from '@/pages/index';
import aboutUs from '@/pages/aboutUs';

const routes = [
  { path: '/', redirect: '/index' },
  { path: '/index', name: 'index', component: index },
  { path: '/aboutUs', name: 'aboutUs', component: aboutUs },
];

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'hash',
  routes,
});
```

#### 8.2 修改 `src/main.js` 文件

```js
import Vue from 'vue';
import App from './App';
import router from './router';

new Vue({
  el: '#app',
  router,
  render: (h) => h(App),
});
```

#### 8.3 修改 `src/App.vue` 文件

```vue
<template>
  <div id="app">
    <router-link to="/">index</router-link>
    <router-link to="/aboutUs">about-us</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    console.log('app');
  },
};
</script>
```

#### 8.4 创建 `src/pages/index/index.vue` 文件

```vue
<template>
  <div>index</div>
</template>

<script>
export default {};
</script>
```

#### 8.5 创建 `src/pages/index/aboutUs.vue` 文件

```vue
<template>
  <div>about-us</div>
</template>

<script>
export default {};
</script>
```

#### 8.6 效果

![image-20221127210459630](/img/image-20221127210459630.png)

![image-20221127210516461](/img/image-20221127210516461.png)

## 9. 路由懒加载

#### 9.1 安装 babel-plugin-syntax-dynamic-import 依赖

```
npm install -D babel-plugin-syntax-dynamic-import
```

#### 9.2 修改 `src/router/index.js` 路由文件

[文档](https://router.vuejs.org/zh/guide/advanced/lazy-loading.html)

```js{3-4,8-11}
import Vue from 'vue';
import VueRouter from 'vue-router';
// import index from '@/pages/index';
// import aboutUs from '@/pages/aboutUs';

const routes = [
  { path: '/', redirect: '/index' },
  // { path: '/index', name: 'index', component: index },
  // { path: '/aboutUs', name: 'aboutUs', component: aboutUs },
  { path: '/index', name: 'index', component: () => import('@/pages/index') },
  { path: '/aboutUs', name: 'aboutUs', component: () => import('@/pages/aboutUs') },
];

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'hash',
  routes,
});
```

## 10. 图片压缩

首先，`url-loader` 和 `image-webpack-loader` 都依赖于 `file-loader`，`file-loader` 简言之就是一个资源加载模块，去找文件资源的loader，然后也可以给静态资源生成哈希值，即唯一标识身份证。一般不用配置。我们主要是通过`url-loader`和`image-webpack-loader`做相关对应项配置

#### 10.1 安装依赖

```
npm install -D file-loader@6 url-loader@4 image-webpack-loader@6
```

#### 10.2 修改 `webpack/webpack.common.js` 

```js
module: {
    rules: [
        {
            test: /\.(png|jpe?g|gif|svg)$/i,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        // 当文件大小小于limit byte时会把图片转换为base64编码的dataurl，否则返回普通的图片
                        limit: 8192,
                        name: 'images/[name].[contenthash:10].[ext]',
                        esModule: false
                    }
                },
                {
                    loader: 'image-webpack-loader', // 压缩图片
                    options: {
                        mozjpeg: {
                            //jpeg压缩
                            progressive: true,
                            quality: 65
                        },
                        gifsicle: {
                            //gif压缩
                            interlaced: true
                        },
                        optipng: {
                            //png压缩
                            enabled: true
                        },
                        pngquant: {
                            //png压缩
                            quality: [0.65, 0.9],
                            speed: 4
                        },
                        webp: {
                            quality: 60
                        }
                    }
                }
            ]
        }
    ]
}
```

## 11. 配置 CDN 文件加载

#### 11.1 修改 `webpack/webpack.common.js` 文件

在配置 `externals` 配置不需要打包的第三方依赖包，key 是引入的报名，value 是全局变量。例如 `import Vue from 'vue'` 对应的就是 `vue:'Vue'`

```js{2-5}
module.exports = {
    externals: {
        iview: 'iview',
        vue: 'Vue'
    }
}
```

#### 11.2 修改 `index.html` 

在入口文件 index.html 加入 vue 和 iview 对应的 cdn 文件

```html{12-16,22-23}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
    />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta name="description" content="网红,kol,出海网红,kol直聘," />
    <meta name="Keywords" content="网红,kol,出海网红,kol直聘," />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.jsdelivr.net/npm/iview@3.5.4/dist/styles/iview.css"
    />

    <title>KOL直聘网</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/iview@3.5.4/dist/iview.min.js"></script>
  </body>
</html>
```


