const birdDom = document.querySelector(".bird");
const birdStyles = getComputedStyle(birdDom);
const birdWidth = parseFloat(birdStyles.width);
const birdHeight = parseFloat(birdStyles.height);
const birdTop = parseFloat(birdStyles.top);
const birdLeft = parseFloat(birdStyles.left);
const gameDom = document.querySelector(".game");
const gameHeight = gameDom.clientHeight;

class Bird extends Rectangle {
    constructor() {
        super(birdWidth, birdHeight, birdLeft, birdTop, 0, 0, birdDom);
        this.g = 1500; //向下的加速度，单位：像素/秒²
        //最大的y坐标
        this.maxY = gameHeight - landHeight - this.height;
        this.swingStatus = 1; //小鸟的翅膀状态
        this.timer = null; //翅膀煽动的计时器
        this.render();
    }

    //开始煽动翅膀
    startSwing() {
        if (this.timer) {
            return;
        }
        this.timer = setInterval(() => {
            this.swingStatus++;
            if (this.swingStatus === 4) {
                this.swingStatus = 1;
            }
            this.render();
        }, 200)
    }

    render() {
        super.render(); //重用父类渲染逻辑
        this.dom.className = `bird swing${this.swingStatus}`;
    }

    //停止煽动翅膀
    stopSwing() {
        clearInterval(this.timer);
        this.timer = null;
    }

    move(duration) {
        super.move(duration); //调用父类方法
        //根据加速度改变速度
        this.ySpeed += this.g * duration;
    }

    onMove() {
        //控制坐标范围
        if (this.top < 0) {
            this.top = 0;
        }
        else if (this.top > this.maxY) {
            this.top = this.maxY;
        }
    }

    //向上跳，直接给一个向上的速度
    jump() {
        this.ySpeed = -450;
    }
}