const obj1 = {
    name: "成哥",
    age: 18,
    love: "邓嫂",
    address: {
        country: "中国",
        province: "黑龙江",
        city: "哈尔滨"
    }
}

// 浅克隆到obj2

const obj2 = {
    ...obj1,
    name: "邓哥"
};

console.log(obj2)

console.log(obj1.address === obj2.address)