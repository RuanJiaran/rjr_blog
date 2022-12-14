# 自动生成模型文件

因为数据库配置采用的是 `sequelize` ， 那我们可以采用 `sequelize-typescript-generator`  来根据数据表自动生成模型文件。

[ sequelize-typescript-generator 文档](https://github.com/spinlud/sequelize-typescript-generator)

## 安装扩展包

**安装数据库包**

这里我们选用 mysql 数据库

```cmd
npm install -S mysql2
```

**安装 sequelize-typescript-generator 生成器包** 

```cmd
npm install -S sequelize-typescript-generator
```

**安装 npx**

```cmd
npm install -g npx
```

## 参数说明

```cmd
Usage: npx stg -D <dialect> -d [database] -u [username] -x [password] -h [host] -p
[port] -o [out-dir] -s [schema] -a [associations-file]-t [tables] -T
[skip-tables] -i [indices] -C [case] -S [storage] -L [lint-file] -l [ssl] -r
[protocol] -c [clean]

Options:
  --help                      Show help                                [boolean]
  --version                   Show version number                      [boolean]
  -h, --host                  数据库连接地址                              [string]
  -p, --port                  数据库端口号:
                              - MySQL/MariaDB: 3306
                              - Postgres: 5432
                              - MSSQL: 1433                             [number]
  -d, --database              数据库名称                                  [string]
  -s, --schema                Schema name (Postgres only). Default:
                              - public                                  [string]
  -D, --dialect               数据库类型, 默认值:
                              - postgres
                              - mysql
                              - mariadb
                              - sqlite
                              - mssql                        [string] [required]
  -u, --username              数据用户名                                  [string]
  -x, --password              数据库密码                                  [string]
  -t, --tables                要处理的表，用逗号分隔名称。不指定生成所有数据表模型 [string]
  -T, --skip-tables           要跳过的表，用逗号分隔名称                     [string]
  -i, --indices               在生成的模型中包含索引注释                     [boolean]
  -o, --out-dir               模型文件输出目录, 默认值:
                              - output-models                           [string]
  -c, --clean                 运行前清理输出目录                           [boolean]
  -m, --timestamps            为表添加默认时间戳                           [boolean]
  -C, --case                  转换表和字段名称
                              有以下情况之一:
                              - underscore    下划线命名
                              - camel         驼峰命名
                              - upper         大写命名
                              - lower         小写命名
                              - pascal
                              - const
                              可以指定不同的模型和列的案例，使用以下格式:
                              <model case>:<column case>
                                                                        [string]
  -S, --storage               SQLite storage. Default:
                              - memory                                  [string]
  -L, --lint-file             ES Lint file path                         [string]
  -l, --ssl                   Enable SSL                               [boolean]
  -r, --protocol              Protocol used: Default:
                              - tcp                                     [string]
  -a, --associations-file     关联文件路径，表和表之间有关联关系时写在 csv 文件内 [string]
  -g, --logs                  Enable Sequelize logs                    [boolean]
  -n, --dialect-options       Dialect native options passed as json string.
                                                                        [string]
  -f, --dialect-options-file  Dialect native options passed as json file path.
                                                                        [string]
  -R, --no-strict             Disable strict typescript class declaration.
                                                                       [boolean]    
  -V, --no-views              Disable view generation. Available for: MySQL and MariaDB.
                                                                       [boolean]                             
```

## 编写模型关联文件

在项目根目录下编写 `associations.csv` 文件，将表与表之间的关联关系写在文件内。

::: danger

不要双击 associations.csv 直接打开文件编写表的关联关系，这样在写 1:1 关系的时候，文件会把 1:1 转成 1:01:00 这种时间格式，这样在生成模型时就会出错。我们应该直接在 VScode 创建 associations.csv 文件，然后打开文件编写关联关系。

:::

**一对一**

```cmd
1:1, left_table_key, right_table_key, left_table, right_table
```

**一对多**

```
1:N, left_table_key, right_table_key, left_table, right_table
```

**多对多**

```
N:N, left_table_key, right_table_key, left_table, right_table, join_table
```

**associations.csv 文件示例**

![image-20220814211612734](/img/image-20220814211612734.png)



## CLI 命令方式生成

下面所有命令均在项目根目录下运行，

**1. 生成单个模型文件**

在 src/models 目录下生成数据表 `kol_user` 的模型文件，模型文件名以驼峰名称，列的字段名以下划线命名

```cmd
npx stg -D mysql -h localhost -p 3306 -d kol -u root -x root --indices --case camel:underscore --out-dir src/models --clean -t kol_user
```

**2. 生成带有关联关系的模型文件**

在 src/models 目录下生成数据表 `kol_user` `kol_category` `kol_user_category`  的模型文件，模型文件名以驼峰名称，列的字段名以下划线命名，并指定项目根目录下的模型关联关系文件 `associations.csv`。

```cmd
npx stg -D mysql -h localhost -p 3306 -d kol -u root -x root --indices --case camel:underscore --out-dir src/models --clean -t kol_user,kol_category,kol_user_category -a associations.csv
```

**3. 生成所有模型文件**

```cmd
npx stg -D mysql -h localhost -p 3306 -d kol -u root -x root --indices --case camel:underscore --out-dir src/models --clean -a associations.csv
```



## 运行文件方式生成

上面 cli 方式每次生成都需要重新编写，而且容易写错。对于这点，我们可以将自动生成模型文件的命令写在文件内，然后只需要执行生成模型的文件就行，这样就只需要写一次就可以了，并且不会出错。

在项目根目录下编写 `auto-create-models.ts` 文件，然后只需在项目根目录下执行命令 `ts-node auto-create-models.ts` 就可以了

```ts
import {
  IConfig,
  ModelBuilder,
  DialectMySQL,
} from 'sequelize-typescript-generator';

(async () => {
  const config: IConfig = {
    connection: {
      dialect: 'mysql',
      database: 'kol',
      username: 'root',
      password: 'root',
    },
    metadata: {
      indices: true, //在生成的模型中包含索引注释
      associationsFile: './associations.csv',
      case: {
        model: 'CAMEL',
        column: 'UNDERSCORE',
      },
    },
    output: {
      clean: true,
      outDir: 'src/models',
    },
    strict: true,
  };

  const dialect = new DialectMySQL();

  const builder = new ModelBuilder(config, dialect);

  try {
    await builder.build();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
```

::: danger

ts-node 命令没安装需要先运行 npm install -g ts-node 命令安装

:::