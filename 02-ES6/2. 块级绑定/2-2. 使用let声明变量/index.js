// let a = 123;

// console.log(window.a)


// let a = 123;

// let a = 456; // 检查到，当前作用域（全局作用域）已声明了变量a


// let a = 123;

// function test(){
//     let a = 456;
//     console.log(a)
// }

// test();


// let a = 123; //全局作用域定义a

// {
//     let a = 456; //块级作用域定义a
//     console.log(a); //使用的是块级作用域中的a
// }

// console.log(a)

// if (Math.random() < 0.5) {
//     let a = 123; //定义在当前块级作用域
//     console.log(a) //当前块级作用域中的a
// }
// else {
//     //这是另外一个块级作用域，该作用域中找不到a
//     console.log(a)
// }

// console.log(a);



// console.log(a)
// let a = 123;


let div = document.getElementById("divButtons");

for (let i = 1; i <= 10; i++) {
    let button = document.createElement("button")
    button.innerHTML = "按钮" + i;
    button.onclick = function () {
        console.log(i) //使用的是当前作用域中的i
    }
    div.appendChild(button)
}