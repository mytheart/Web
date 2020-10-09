const user = {
    name: "kevin",
    age: 11,
    sex: "男",
    address: {
        province: "四川",
        city: "成都"
    }
}
//解构出user中的name、province
//定义两个变量name、province
//再解构
const { name, address: { province } } = user;

console.log(name, address, province)