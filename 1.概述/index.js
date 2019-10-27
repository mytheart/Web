function getUserName() {
    if (Math.random() < 0.5) {
        return 'zhang yin'
    };

    return 404;
}

let myname = getUsername();
mynema = myname.split(' ').filter(el => el).map(el => el[0].touppercase + el.subStr(1)).join(' ');

// // 例子：
// // let width = 500;
// // width = '500px'; // 埋雷,为以后的出错埋下隐患
// // document.getElementById('xxx').style.width + 'px';
