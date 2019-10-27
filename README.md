# TypeScript  

TypeScript学习笔记及相关demo  

## 目录

1. 概述
    1.1 js语言的问题
    1.2 ts语言的特点
2. 在node环境中搭建开发环境
    2.1 安装TypeScript
    2.2 TypeScript的配置文件
    2.3 使用第三方库简化流程 
3. 基本类型检查
    3.1 类型约束和编译结果对比
    3.2 基本类型
    3.3 其它类型
    3.4 类型别名
    3.5 函数的相关约束
    3.6 demo：创建并打印扑克牌
4. 扩展类型.枚举
    4.1 字面量类型的问题
    4.2 枚举的使用
    4.3 demo：使用枚举优化扑克牌程序
    4.4 扩展：枚举的位运算 
5. 模块化
    5.1 在ts中使用使用模块化
    5.2 编译结果中的模块化
    5.3 解决默认导入的错误
    5.4 如何在ts中书写commonjs模块化代码
    5.5 模块解析
    5.6 demo：使用模块化优化扑克牌程序
6. 接口类型和类型兼容性
    6.1 接口的概念
    6.2 接口的使用
    6.3 readonly修饰符
    6.4 类型兼容性
    6.5 demo： 用接口改造扑克牌程序
7. TS中的类
   7.1 概述
   7.2 新增的类语法
   7.3 访问器
   7.4 demo：增加洗牌和发牌功能
8. 泛型
    8.1 在函数中使用泛型
    8.2 在类、接口、类型别名中使用泛型
    8.3 泛型约束
    8.4 多泛型
    8.5 demo： 自定义字典类
9. Demo.使用React+TS开发三字棋游戏
    9.1 效果展示和工程搭建
    9.2 在react中使用ts
    9.3 制作棋子组件
    9.4 制作棋盘组件
    9.5 制作Game组件.项目完结
    9.6 总结
10. 深入理解类和接口
    10.1 面向对象概述
    10.2 类的继承
    10.3 抽象类
    10.4 静态成员
    10.5 再谈接口
    10.6 索引器
    10.7 this指向约束
11. Demo.使用webpack+ts开发俄罗斯方块
    11.1 概述
    11.2 工程搭建
    11.3 小方块类
    11.4 小方块的展示类
    11.5 开发方块组合类
    11.6 开发俄罗斯方块生产者模块
    11.7 开发俄罗斯方块规则类
    11.8 实现俄罗斯方块的旋转功能
    11.9 实习游戏类
    11.10 触底处理
    11.11 消除处理
    11.12 游戏结束盘点和积分功能
    11.13 完成游戏界面
    11.14 项目总结
12. 装饰器
    12.1 概述
    12.2 类装饰器
    12.3 成员装饰器
    12.4 demo
    12.5 reflect.metadata库
    12.6 class.validator和class.transformer库
    12.7 装饰器补充
13. 类型演算
    13.1 三个关键字
    13.2 预定义的类型演算
14. 声明文件
    14.1 概述
    14.2 编写声明文件
    14.3 发布
15. 项目实战
    15.1 概述
    15.2 服务器开发环境搭建
    15.3 使用tslint进行代码风格检查
    15.4 开发Movie实体类
    15.5 处理plainobject的转换
    15.6 定义数据库模型
    15.7 增删改查功能
    15.8 按条件查询电影
    15.9 完成api接口
    15.10 完成图片上传接口
    15.11 搭建客户端工程并完成ajax请求
    15.12 创建reducer和action
    15.13 创建仓库
    15.14 用thunk处理副作用
    15.15 添加路由功能
    15.16 制作布局
    15.17 制作电影表格组件（1）
    15.18 制作电影表格组件（2）
    15.19 制作电影表格组件（3）
    15.20 制作图片上传组件
    15.21 制作电影表单组件
    15.22 制作修改电影页面
    15.23 项目打包


## 说明
    1. 不同在章节对应的不同的分支，分支上有相关笔记及对应的demo；
    2. 仓库创建日期20191027，本仓库将持续更新；
    3. 参考：[TypsSctipt官网文档](https://www.tslang.cn/docs/home.html)