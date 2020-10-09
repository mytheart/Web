function test(a, b = 1) {
    console.log("arugments", arguments[0], arguments[1]);
    console.log("a:", a, "b:", b);
    a = 3;
    console.log("arugments", arguments[0], arguments[1]);
    console.log("a:", a, "b:", b);
}

test(1, 2);