var love1 = "秋葵";
var love2 = "香菜";

var text = `邓哥喜欢${love1}
邓哥也喜欢${love2}
表达式可以是任何有意义的数据${1 + 3 * 2 / 0.5}
表达式是可以嵌套的：${`表达式中的模板字符串${love1 + love2}`}
\n\n
奥布瓦的发顺丰
在模板字符串中使用\${JS表达式}可以进行插值
`;

console.log(text);