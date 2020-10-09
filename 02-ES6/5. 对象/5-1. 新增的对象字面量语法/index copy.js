function createUser(loginId, loginPwd, nickName) {
    const sayHello = function () {
        console.log("loginId", this.loginId, "nickname", this.nickName)
    }
    return {
        loginId,
        loginPwd,
        nickName,
        sayHello,
        id: Math.random()
    }
}
const u = createUser("abc", "123", "aaa");
u.sayHello();