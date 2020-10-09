const user = {
    name: "kevin",
    age: 11,
    sex: "男",
    address: {
        province: "四川",
        city: "成都"
    }
}

//解构出name，然后，剩余的所有属性，放到一个新的对象中，变量名为obj
// name: kevin
// obj : {age:11, sex:"男", address:{...}}

const { name, ...obj } = user;

console.log(name, obj)