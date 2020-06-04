# 模块化

关于模块化的相关配置：

|      配置名称       |              含义              |
| :-----------------: | :----------------------------: |
|       module        | 设置编译结果中使用的模块化标准 |
|  moduleResolution   |       设置解析模块的模式       |
| noImplicitUseStrict |  编译结果中不包含"use strict"  |
|   removeComments    |        编译结果移除注释        |
|    noEmitOnError    |      错误时不生成编译结果      |
|   esModuleInterop   |  启用es模块化交互非es模块导出  |

# TS中如何书写模块化语句

**最佳实践：TS中，导入和导出模块，统一使用ES6的模块化标准**

----------
# 不使用ES6模块化标准（不推荐）
```js

# 编译结果中的模块化

可以在tsconfig.json文件配置

TS中的模块化在编译结果中：

- 如果编译结果的模块化标准是ES6： 没有区别
- 如果编译结果的模块化标准是commonjs：导出的声明会变成exports的属性，默认的导出会变成exports的default属性；

# 如何在TS中书写commonjs模块化代码

导出：export = xxx

导入：import xxx = require("xxx")

# 模块解析

模块解析：应该从什么位置寻找模块

TS中，有两种模块解析策略

- classic：经典
- node：node解析策略（唯一的变化，是将js替换为ts）
  - 相对路径```require("./xxx")```
  - 非相对模块```require("xxx")```

  ```