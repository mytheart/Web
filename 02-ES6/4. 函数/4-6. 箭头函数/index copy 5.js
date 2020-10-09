const func = () => {
    console.log(this)
}

const obj = {
    method: function(){
        const func = () => {
            console.log(this)
            console.log(arguments)
        }
        func()
    }
}
obj.method(234);