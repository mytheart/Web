// console.log("a")

// setTimeout(() => {
//     console.log("b")
// }, 0);

// console.log("c");

// a   c    b

console.log("a")

setTimeout(() => {
    console.log("b")
}, 0);

for (let i = 0; i < 1000; i++) {
    console.log("c")
}

// a
// 1000个c
// b
