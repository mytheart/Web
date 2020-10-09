// 辅助函数,把传进来的对象拼接成url的字符串
function toData(obj) {
    if (obj === null) {
        return obj;
    }
    let arr = [];
    for (let i in obj) {
        let str = i + "=" + obj[i];
        arr.push(str);
    }
    return arr.join("&");
}
// 封装Ajax
function ajax(obj) {
    //指定提交方式的默认值
    obj.type = obj.type || "get";
    //设置是否异步，默认为true(异步)
    obj.async = obj.async || true;
    //设置数据的默认值
    obj.data = obj.data || null;
    // 根据不同的浏览器创建XHR对象
    let xhr = null;
    if (window.XMLHttpRequest) {
        // 非IE浏览器
        xhr = new XMLHttpRequest();
    } else {
        // IE浏览器
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    // 区分get和post,发送HTTP请求
    if (obj.type === "post") {
        xhr.open(obj.type, obj.url, obj.async);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        let data = toData(obj.data);
        xhr.send(data);
    } else {
        let url = obj.url + "?" + toData(obj.data);
        xhr.open(obj.type, url, obj.async);
        xhr.send();
    }
    // 接收返回过来的数据
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                if (obj.success) {
                    // resolve
                    obj.success(JSON.parse(xhr.responseText));
                }
            } else {
                if (obj.error) {
                    // reject
                    obj.error(xhr.status);
                }
            }
        }
    }
}