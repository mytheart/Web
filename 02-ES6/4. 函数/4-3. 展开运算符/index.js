const obj1 = {
    name: "成哥",
    age: 18,
    loves: ["邓嫂", "成嫂1", "成嫂2"],
    address: {
        country: "中国",
        province: "黑龙江",
        city: "哈尔滨"
    }
}

// 浅克隆到obj2
const obj2 = {
    ...obj1,
    name: "邓哥",
    address: {
        ...obj1.address
    },
    loves: [...obj1.loves, "成嫂3"]
};

console.log(obj2)

console.log(obj1.loves === obj2.loves)