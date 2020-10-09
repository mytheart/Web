const text = "𠮷"; //占用了两个码元（32位）

console.log("字符串长度：", text.length);
console.log("使用正则测试：", /^.$/u.test(text));
console.log("得到第一个码元：", text.charCodeAt(0));
console.log("得到第二个码元：", text.charCodeAt(1));

//𠮷：\ud842\udfb7
console.log("得到第一个码点：", text.codePointAt(0));
console.log("得到第二个码点：", text.codePointAt(1));

/**
 * 判断字符串char，是32位，还是16位
 * @param {*} char 
 */
function is32bit(char, i) {
    //如果码点大于了16位二进制的最大值，则其是32位的
    return char.codePointAt(i) > 0xffff;
}

/**
 * 得到一个字符串码点的真实长度
 * @param {*} str 
 */
function getLengthOfCodePoint(str) {
    var len = 0;
    for (let i = 0; i < str.length; i++) {
        //i在索引码元
        if (is32bit(str, i)) {
            //当前字符串，在i这个位置，占用了两个码元
            i++;
        }
        len++;
    }
    return len;
}

console.log("𠮷是否是32位的：", is32bit("𠮷", 0))
console.log("ab𠮷ab的码点长度：", getLengthOfCodePoint("ab𠮷ab"))