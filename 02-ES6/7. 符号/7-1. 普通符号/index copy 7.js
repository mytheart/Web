const syb = Symbol();

const obj = {
    [syb]: 1,
    a: 2,
    b: 3
}

for (const prop in obj) {
    console.log(prop)
}

console.log(Object.keys(obj))
console.log(Object.getOwnPropertyNames(obj))
//得到的是一个符号属性的数组
const sybs = Object.getOwnPropertySymbols(obj);
console.log(sybs, sybs[0] === syb)