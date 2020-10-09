/**
 * 对所有数字求和
 * @param  {...any} args 
 */
function sum(...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}

/**
 * 获取一个指定长度的随机数组成的数组
 * @param {*} length 
 */
function getRandomNumbers(length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.random());
    }
    return arr;
}

const numbers = getRandomNumbers(10);
//将数组的每一项展开，依次作为参数传递，而不是把整个数组作为一个参数传递
// sum(numbers)

console.log(sum(...numbers))//相当于传递了10个参数
console.log(sum(1, 3, ...numbers, 3, 5))