#### 安装eslint

```
npm install eslint --save-dev
```

#### 配置.eslintrc文件

在项目根目录下创建.eslintrc文件

```json
{
    "extends": "eslint:recommended",
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    }
}
```