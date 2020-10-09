const text = "Hello World!!!";

const reg = /W\w+/y;
reg.lastIndex = 3;
console.log("reg.lastIndex:", reg.lastIndex)
console.log(reg.test(text))