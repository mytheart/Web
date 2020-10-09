// const a = 1;
// a = 1;
// console.log(a)


// const div = document.getElementById("game");
// //一般来说，div变量是不会更改的


// const a = {
//     name: "kevin",
//     age: 123
// };
// a.name = "abc";
// console.log(a)

// const PI = 3.14;
// const MOON_EARTH_DISTANCE = 3245563424; //月地距离

var obj = {
    name:"kevin",
    age:1
}

for (const prop in obj) {
    console.log(prop)
}