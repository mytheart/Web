class Test {
    static a = 1;
    b = 2;
    c = 3;

    constructor() {
        this.d = this.b + this.c;
    }
}

const t = new Test();
console.log(t)


