const obj = {
    count: 0,
    start: function () {
        setInterval(() => {
            this.count++;
            console.log(this.count);
        }, 1000)
    },
    regEvent: function () {
        window.onclick = () => {
            console.log(this.count);
        }
    },
    print: function () {
        console.log(this)
        console.log(this.count)
    }
}

// obj.start();
// obj.regEvent();
obj.print();