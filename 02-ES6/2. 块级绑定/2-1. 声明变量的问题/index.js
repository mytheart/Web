// 1. 允许重复的变量声明：导致数据被覆盖

// var a = 1;

// function print(){
//     console.log(a)
// }

// //假设这里有一千行代码

// var a = 2;

// print();

// 2. 变量提升：怪异的数据访问

// if (Math.random() < 0.5) {
//     var a = "abc";
//     console.log(a);
// }
// else {
//     console.log(a);
// }

// console.log(a);

// 2. 变量提升：闭包问题
// var div = document.getElementById("divButtons")

// for (var i = 1; i <= 10; i++) {
//     var btn = document.createElement("button");
//     btn.innerHTML = "按钮" + i;
//     div.appendChild(btn);
//     btn.onclick = function () {
//         console.log(i); //输出11
//     }
// }

// // 循环结束后，i：11

// 3. 全局变量挂载到全局对象：全局对象成员污染问题

var abc = "123";
console.log(window.abc);

// var console = "abc";

// console.log(console)

// var name = "abc";

