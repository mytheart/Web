const numbers = [324, 7, 23, 5, 3243];

// 得到数组前两项，分别放到变量a和b中，然后剩余的所有数据放到数组nums

// const [a, b, ...nums] = numbers;

const a = numbers[0], b = numbers[1], nums = numbers.slice(2);

console.log(a, b, nums);