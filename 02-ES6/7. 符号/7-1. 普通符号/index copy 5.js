//创建一个符号

const syb1 = Symbol("这是用于对象的一个属性");

const obj = {
    a: 1,
    b: 2,
    [syb1]: 3  //符号属性
}

console.log(obj);