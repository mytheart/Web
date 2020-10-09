function A() {

}

Object.defineProperty(A, Symbol.hasInstance, {
    value: function (obj) {
        return false;
    }
})

const obj = new A();

console.log(obj instanceof A);
// console.log(A[Symbol.hasInstance](obj));