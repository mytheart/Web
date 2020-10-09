
const obj = {
    a: 1,
    b: 2,
    [Symbol.for("c")]: 3
}

console.log(obj[Symbol.for("c")]);