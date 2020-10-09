//面向对象中，将 下面对一个对象的所有成员的定义，统称为类

//构造函数  构造器
function Animal(type, name, age, sex) {
    this.type = type;
    this.name = name;
    this.age = age;
    this.sex = sex;
}

//定义实例方法（原型方法）
Animal.prototype.print = function () {
    console.log(`【种类】：${this.type}`);
    console.log(`【名字】：${this.name}`);
    console.log(`【年龄】：${this.age}`);
    console.log(`【性别】：${this.sex}`);
}

const a = new Animal("狗", "旺财", 3, "男");
a.print();

for (const prop in a) {
    console.log(prop)
}