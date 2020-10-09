// const hero = {
//     attack: 30,
//     hp: 300,
//     defence: 10,
//     gongji() { //攻击
//         //伤害：攻击力*随机数（0.8~1.1)
//         const dmg = this.attack * this.getRandom(0.8, 1.1);
//         console.log(dmg);
//     },
//     getRandom(min, max) { //根据最小值和最大值产生一个随机数
//         return Math.random() * (max - min) + min;
//     }
// }

class Hero {
    constructor(attack, hp, defence) {
        this.attack = attack;
        this.hp = hp;
        this.defence = defence;
    }

    gongji() {
        //伤害：攻击力*随机数（0.8~1.1)
        const dmg = this.attack * this.getRandom(0.8, 1.1);
        console.log(dmg);
    }

    getRandom(min, max) { //根据最小值和最大值产生一个随机数
        return Math.random() * (max - min) + min;
    }
}