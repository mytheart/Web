//创建一个符号

const syb1 = Symbol();
const syb2 = Symbol("abc");

console.log(syb1, syb2);

console.log(typeof syb1 === "symbol", typeof syb2 === "symbol")