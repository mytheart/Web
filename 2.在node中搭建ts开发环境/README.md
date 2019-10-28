# 在node中搭建ts开发环境

## 安装TypeScript
> npm i typescript -g 

### 将ts编译成js
> tsc index.ts

### 默认情况下，TS会做出下面几种假设：
1. 假设当前的执行环境是浏览器环境（Dom）；
2. 如果代码中没有使用模块化语句（import、export），便认为该代是时全局执行；
3. 编译的目标代码是ES3；

### 
1. 使用tsc命令行的时候，加上选项参数；
2. 使用ts配置文件，更改编译选项；

## TypeScript的配置文件
 ### 生成tsconfig.json
 > tsc --init

 ### 使用了配置文件后，使用tsc进行编译时，不能跟上文件名，如果跟上文件名，会忽略配置文件

 ### @types/node
  > npm i -D @types/node

 @types/node是一个ts官方的类型库，其中包含了很多对js代码的类型描述；  
 
 例：  
 JQuery：用js写的，没有类型检查；  
 安装@types/jquery，为jquery库添加类型定义；


## 使用第三方库简化流程 

### ts-node:将ts代码在内存中完成编译，同时完成运行
> cnpm i ts-node -g
> ts-node /src/index.ts
###  nodemon:用于检测文件的变化
> cnpm i nodemon -g
> nodemon --exec ts-node sec/index.ts

### 写成script脚本：
> "dev": "nodemon --watch src -e ts --exec ts-node src/index.ts" // 只监控src下的ts文件