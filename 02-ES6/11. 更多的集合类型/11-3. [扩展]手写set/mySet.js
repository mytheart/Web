class MySet {
    constructor(iterator = []) {
        //验证是否是可迭代的对象
        if (typeof iterator[Symbol.iterator] !== "function") {
            throw new TypeError(`你提供的${iterator}不是一个可迭代的对象`)
        }
        this._datas = [];
        for (const item of iterator) {
            this.add(item);
        }
    }

    get size() {
        return this._datas.length;
    }

    add(data) {
        if (!this.has(data)) {
            this._datas.push(data);
        }
    }

    has(data) {
        for (const item of this._datas) {
            if (this.isEqual(data, item)) {
                return true;
            }
        }
        return false;
    }

    delete(data) {
        for (let i = 0; i < this._datas.length; i++) {
            const element = this._datas[i];
            if (this.isEqual(element, data)) {
                //删除
                this._datas.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    clear() {
        this._datas.length = 0;
    }

    *[Symbol.iterator]() {
        for (const item of this._datas) {
            yield item;
        }
    }

    forEach(callback) {
        for (const item of this._datas) {
            callback(item, item, this);
        }
    }

    /**
     * 判断两个数据是否相等
     * @param {*} data1 
     * @param {*} data2 
     */
    isEqual(data1, data2) {
        if (data1 === 0 && data2 === 0) {
            return true;
        }
        return Object.is(data1, data2);
    }
}