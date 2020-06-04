// 枚举改写扑克牌
type Deck = Card[];
type Card = {
  color: Color;
  mark: Mark;
};

enum Color {
  heart = "♥",
  spade = "♠",
  club = "♣",
  diamond = "♦"
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
  thirteen = "K"
}

function createDeck(): Deck {
  const deck: Deck = [];

  const marks = Object.values(Mark);
  const colors = Object.values(Color);

  for (const m of marks) {
    for (const c of colors) {
      deck.push({
        color: c,
        mark: m
      });
    }
  }

  return deck;
}

function printDeck(deck: Deck) {
  let result = "\r";
  deck.forEach((card, i) => {
    let str = card.color + card.mark;
    result += str + "\t";
    if ((i + 1) % 6 === 0) {
      result += "\n";
    }
  });

  console.log(result);
}

const deck = createDeck();
printDeck(deck);

// 枚举的位运算
enum Permission {
  Read = 1, // 0001
  Write = 2, // 0010
  Create = 4, // 0100
  Delete = 8 // 1000
}

// 1.如何组合权限
// 位运算： 两个数字换算成二进制后进行的运算
// 或运算：

let p: Permission = Permission.Read | Permission.Write;

// 2.如何判断是否拥有某个权限
// 或运算
function hasPermission(target: Permission, per: Permission): boolean {
  return (target & per) === per;
}
// 例：判断p是否有可读的权限
hasPermission(p, Permission.Read);


// 3.如何删除某个权限
// 异或运算:相同取零，不同取一；
p = p ^ Permission.Write;

