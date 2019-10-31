# 扩展类型-枚举

## 枚举

定义：枚举是扩展类型中的一种，枚举通常用于约束某个变量的取值范围。  

字面量和联合类型配合使用，也可以达到相同的目的。  

### 扩展类型：类型别名、枚举、接口、类  

### 字面量类型的问题
1. 在类型约束位置，会产生重复代码；
```javascript
let gender: "男" | "女";
gender = "男";
gender = "女";

function user (g: "男" | "女) {};
```
可以使用类型别名解决问题  
```javascript
type Gender = "男" | "女" ; // 将 “男” | “女” 抽离成类型别名，避免代码重复
let gender: Gender;
gender = "男";
gender = "女";

function user (g: Gender) {};
```

2. 逻辑含义和真实的值产生了混淆，会导致当修改真实值的时候，产生大量的修改。（无法用类型别名解决）；
3. 字面量类型不会进入到编译结果；

枚举可以完美的解决以上的问题。

### 如何定义一个枚举
```javascript
enum 枚举名{
  枚举字段1 = 值1，
  枚举字段2 = 值2，
  ...
}

enum Gender{
  male = "男", // male是逻辑名称，“男”是真实的值，也可能是先生，帅哥
  female = "女", // female是逻辑名称，“女”是真实的值，也可能是女士、美女
}

let gender: Gender;
gender = Gender.male; // 赋值时赋的是逻辑名称
gender = Gender.female;

```

### 枚举会参与编译，会在编译结果中出现，在编译结果中表现为对象
```javascript
var Gender;
(function (Gender) {
    Gender["male"] = "\u7537";
    Gender["female"] = "\u5973";
})(Gender || (Gender = {}));
let gender;
gender = Gender.male;
gender = Gender.female;
```

### 枚举的规则
1. 枚举的字段值可能是字符串或数字
2. 数字枚举的值会自动递增
3. 被数字枚举约束的变量，可以直接赋值为数字

### 企业开发经验
1. 尽量不要在一个枚举中既出现字符串字段，又出现数字字段
2. 使用枚举时，尽量使用枚举字段的名称，而不使用真实的值


## demo：使用枚举优化扑克牌

```javascript
 
// 枚举改写扑克牌
type Deck = Card[];
type Card = {
  color: Color,
  mark: Mark,
}
  
enum Color {
  heart = "♥",
  spade = "♠",
  club = "♣",
  diamond = "♦",
}
enum Mark {
  A = "A",
  two = "2",
  three = "3",
  four = "4",
  five = "5",
  six = "6",
  seven = "7",
  eight = "8",
  nine = "9",
  ten = "10",
  eleven = "J",
  twelve = "Q",
  thirteen = "K",
}

function createDeck (): Deck {
  const deck : Deck = [];

  const marks = Object.values(Mark);
  const colors = Object.values(Color);

  for (const m of marks) {
      for (const c of colors ) {
        deck.push({
          color: c,
          mark: m
        })
      }
  }

  return deck;
}

function printDeck(deck: Deck) {
  let result = '\r';
  deck.forEach((card, i) => {
    let str = card.color + card.mark;
    result += str + '\t';
    if ((i+1)%6 === 0) {
      result += '\n';
    }
  })
  console.log(result);
}

const deck = createDeck();
printDeck(deck);

打印出来的结果
```
![结果](https://img-blog.csdnimg.cn/2019103120213373.png)

## 扩展知识-枚举的位运算

