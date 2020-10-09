const SymbolFor = (() => {
    const global = {};//用于记录有哪些共享符号
    return function (name) {
        console.log(global)
        if (!global[name]) {
            global[name] = Symbol(name);
        }
        console.log(global);
        return global[name];
    }
})();

const syb1 = SymbolFor("abc");

const syb2 = SymbolFor("abc");

console.log(syb1 === syb2);