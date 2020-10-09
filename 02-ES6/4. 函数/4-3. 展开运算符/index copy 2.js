const arr1 = [3, 67, 8, 5];

//克隆arr1数组到arr2

const arr2 = [0, ...arr1, 1];

console.log(arr2, arr1 === arr2)