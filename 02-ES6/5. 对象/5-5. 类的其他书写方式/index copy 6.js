class Test {

    constructor() {
        this.a = 123;
    }

    print = () => {
        console.log(this.a)
    }
}

const t1 = new Test();
const t2 = new Test();
console.log(t1.print === t2.print)



