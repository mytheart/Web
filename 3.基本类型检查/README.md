# 基本类型检查

## 类型约束和编译结果对比

编译结果中没有类型约束信息；

### 如何进行类型约束

1. ts 是一个可选的静态类型系统；
2. ts 在很多场景中可以完成类型推导；
3. any 表示任意类型，ts 不进行类型约束；
4. 如何区分数字字符串和数字，关键看怎么读？如果按照数字的方式朗读，则为数字，否则为字符串

## 基本类型检查

1. number
2. string
3. boolean
4. array
5. object
6. null 和 undefined 是所有其它类型的子类型，它们可以复制给其它类型；  
   "strictNullChecks": true, 可以获得更严格的空类型检查，null 和 undefined 只能赋值给自身

## 其它常用类型

1. 联合类型:多种类型任选其一 ;  
  - 配合类型保护进行判断；  
  - 类型保护：当对某个变量进行类型判断之后，在判断的语句块中便可以确定它的确切类型，typeof 可以出发类型保护；  

```javascript
let name: string | undefined = undefined;
if (typeof name === "string") {
    name.toUpperCase();
};
```

2. void 类型:通常用于约束函数的返回值，表示该函数没有任何返回;
3. never 类型：通常用于约束函数的返回值，表示该函数永远不会结束;  

```javascript
function demo () {
    throw new Error("错误");
    console.log("永远不会执行");
};
function demo1 () {
    while(true){
        cconsole.log('never')
    }
};
```

4. 字面量类型: 使用一个值进行约束  
```javascript
let arr: []; // arr永远只能取值为一个空数组
let gender: '男' | '女';
let user: {
    name: string
    age: number
} // 一个对象，必须要name和age
```
5. 元祖类型（Tuple）：一个固定类型的数组，并且数组中每一项的类型确定
```javascript
let arr: [string, number];  
arr = ['zy', 21];
```

6. any类型:可以绕过类型检查，any类型可以赋值给任意类型
```javascript
let name: any = 'zhangyin';
let age: number = any; 
```

## 类型别名
类型别名：对已经类型定义名称；

```javascript  
type Gender = 'man' | 'womam';
type User = {
  name: string
  age: number
  gender: Gender
}
let person: User;
person = {
  name: 'zhangyin',
  gender: 'man',
  age: 21,
}; 
function getUsers (g: Gender): User[] {
  return[];
}
```

## 函数的相关约束
1. 函数重载：在函数实现之前，对函数调用的多种方式进行声明
```javascript
function combine (a: number, b: number): number;
function combine (a: string, b: string): string;
function combine (a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a * b;
  }
  else if (typeof a === 'string' && typeof b === 'string') {
    return a + b;
  }
  throw new Error('a和b必须是相同的类型');
}
const result = combine(3, 4);
```
2. 可选参数和默认值：可以在某些参数后加上问号，表示该参数可以不用传递
```javascript
function sum (a: number, b: number, c?: number = 0) {
  if (c) {
   return a + b + c;
  } else {
    return a + b;
  }
};
```

## demo:创建并打印扑克牌
1. 目标：创建一副扑克牌（不包括大小王），打印该扑克牌；
