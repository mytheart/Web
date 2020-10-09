const gameWidth = gameDom.clientWidth;

class Pipe extends Rectangle {
    constructor(height, top, speed, dom) {
        super(52, height, gameWidth, top, speed, 0, dom);
    }

    onMove() {
        if (this.left < -this.width) {
            //移除dom
            this.dom.remove();
        }
    }
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

class PipePare {
    constructor(speed) {
        this.spaceHeight = 150; //空隙位置的高度
        this.minHeight = 80; //水管最小高度
        this.maxHeight = landTop - this.minHeight - this.spaceHeight;
        const upHeight = getRandom(this.minHeight, this.maxHeight);

        const upDom = document.createElement("div");
        upDom.className = "pipe up";

        this.upPipe = new Pipe(upHeight, 0, speed, upDom); //上水管
        const downHeight = landTop - upHeight - this.spaceHeight;
        const downTop = landTop - downHeight;

        const downDom = document.createElement("div");
        downDom.className = "pipe down";
        this.downPipe = new Pipe(downHeight, downTop, speed, downDom)//下水管

        gameDom.appendChild(upDom)
        gameDom.appendChild(downDom)
    }

    /**
     * 该柱子对是否已经移出了视野
     */
    get useLess() {
        return this.upPipe.left < -this.upPipe.width;
    }

    move(duration) {
        this.upPipe.move(duration);
        this.downPipe.move(duration);
    }
}

/**
 * 用于不断的产生柱子对
 */
class PipePareProducer {
    constructor(speed) {
        this.speed = speed;
        this.pairs = [];
        this.timer = null;
        this.tick = 1500;
    }

    startProduce() {
        if (this.timer) {
            return;
        }
        this.timer = setInterval(() => {
            this.pairs.push(new PipePare(this.speed));
            //移除掉用不到的柱子
            for (let i = 0; i < this.pairs.length; i++) {
                var pair = this.pairs[i];
                if (pair.useLess) {
                    //没用的柱子对
                    this.pairs.splice(i, 1);
                    i--;
                }
            }
        }, this.tick)
    }

    stopProduce() {
        clearInterval(this.timer);
        this.timer = null;
    }
}