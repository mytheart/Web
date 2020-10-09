// const hero = (function () {
//     const getRandom = Symbol();

//     return {
//         attack: 30,
//         hp: 300,
//         defence: 10,
//         gongji() { //攻击
//             //伤害：攻击力*随机数（0.8~1.1)
//             const dmg = this.attack * this[getRandom](0.8, 1.1);
//             console.log(dmg);
//         },
//         [getRandom](min, max) { //根据最小值和最大值产生一个随机数
//             return Math.random() * (max - min) + min;
//         }
//     }
// })()

// console.log(hero);

const Hero = (() => {
    const getRandom = Symbol();

    return class {
        constructor(attack, hp, defence) {
            this.attack = attack;
            this.hp = hp;
            this.defence = defence;
        }

        gongji() {
            //伤害：攻击力*随机数（0.8~1.1)
            const dmg = this.attack * this[getRandom](0.8, 1.1);
            console.log(dmg);
        }

        [getRandom](min, max) { //根据最小值和最大值产生一个随机数
            return Math.random() * (max - min) + min;
        }
    }
})();

const h = new Hero(3, 6, 3);
console.log(h);