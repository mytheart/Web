const user = {
    name: "姬成",
    age: 100,
    sayHello(){
        console.log(this.name, this.age)
    }
}

user.sayHello();