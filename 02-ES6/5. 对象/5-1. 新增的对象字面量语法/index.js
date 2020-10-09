const prop1 = "name2";
const prop2 = "age2";
const prop3 = "sayHello2";

const user = {
    [prop1]: "姬成",
    [prop2]: 100,
    [prop3](){
        console.log(this[prop1], this[prop2])
    }
}

user[prop3]();

console.log(user)