const numbers = ["a", "b", "c", "d"];


const [n1, , , n4, n5 = 123] = numbers;

console.log(n1, n4, n5)