# Node.js
## Node常见内置模块
### http 模块
```js
const http = require('http');
http.createServer((req, res) => { // 开启一个服务
  console.log('请求来了'); // 如果你打开 http://localhost:8888，控制台就会打印此消息
  res.write('hello'); // 返回给页面的值，也就是页面会显示 hello
  res.end(); // 必须有结束的标识，否则页面会一直处于加载状态
}).listen(8888); // 端口号
```
### fs 文件系统
```js
const fs = require('fs');

// 写入文件：fs.writeFile(path, fileData, cb);
fs.writeFile('./text.txt', 'hello xr!', err => {
  if (err) {
    console.log('写入失败', err);
  } else {
    console.log('写入成功');
  }
});

// 读取文件：fs.readFile(path, cb);
fs.readFile('./text.txt', (err, fileData) => {
  if (err) {
    console.log('读取失败', err);
  } else {
    console.log('读取成功', fileData.toString()); // fileData 是二进制文件，非媒体文件可以用 toString 转换一下
  }
});

```
需要注意的是 readFile 里面的 fileData 是原始的二进制文件（就是计算机才看的懂的文件格式），对于非媒体类型（如纯文本）的文件可以用 toString() 转换一下，媒体类型的文件以后则会以流的方式进行读取，要是强行用 toString() 转换的话会丢失掉原始信息，所以不能乱转.另外，和 fs.readFile（异步） 和 fs.writeFile（异步）相对应的还有 fs.readFileSync（同步）和 fs.writeFileSync（同步），fs 的大多方法也都有同步异步两个版本，具体取决于业务选择，一般都用异步，不知道用啥的话也用异步。
### path 路径
```js
const path = require('path');

let str = '/root/a/b/index.html';
console.log(path.dirname(str)); // 路径
// /root/a/b
console.log(path.extname(str)); // 后缀名
// .html
console.log(path.basename(str)); // 文件名
// index.html

// path.resolve() 路径解析，简单来说就是拼凑路径，最终返回一个绝对路径
let pathOne = path.resolve('rooot/a/b', '../c', 'd', '..', 'e');

// 一般用来打印绝对路径，就像下面这样，其中 __dirname 指的就是当前目录
let pathTwo = path.resolve(__dirname, 'build'); // 这个用法很常见，你应该在 webpack 中有见过

console.log(pathOne, pathTwo, __dirname);
// pathOne  =>  /Users/lgq/Desktop/node/rooot/a/c/e
// pathTwo  =>  /Users/lgq/Desktop/node/build
// __dirname  =>  /Users/lgq/Desktop/node

```
### url 模块
```js
const url = require('url');

let site = 'http://www.baidu.com/a/b/index.html?a=1&b=2';
let { pathname, query } = url.parse(site, true); // url.parse() 解析网址，true 的意思是把参数解析成对象

console.log(pathname, query);
// /a/b/index.html  { a: '1', b: '2' }

```
### queryString 查询字符串
```js
const querystring = require('querystring');

let query = 'a=1&b=2&c=3'; // 形如这样的字符串就能被解析
let obj = querystring.parse(query);
console.log(obj, obj.a); // { a: '1', b: '2', c: '3' }   '1'

query = 'a=1&b=2&c=3&a=3'; // 如果参数重复，其所对应的值会变成数组
obj = querystring.parse(query);
console.log(obj); // { a: [ '1', '3' ], b: '2', c: '3' }

// 相反的我们可以用 querystring.stringify() 把对象拼接成字符串
query = querystring.stringify(obj);
console.log(query); // a=1&a=3&b=2&c=3

```
### assert 断言
```js
// assert.js
const assert = require('assert');

// assert(条件，错误消息)，条件这部分会返回一个布尔值
assert(2 < 1, '断言失败');

```
上图是断言失败的例子，如果断言正确的话，则不会有任何提示，程序会继续默默往下执行。所以断言的作用就是先判断条件是否正确（有点像 if），如果条件返回值为 false 则阻止程序运行，并抛出一个错误，如果返回值为 true 则继续执行，一般用于函数中间和参数判断。
另外，这里再介绍两种 equal 用法（assert 里面有好多种 equal，这里举例其中的两种）：

```js
// assert.js
const assert = require('assert');

const obj1 = { a: { b: 1 } };
const obj2 = { a: { b: 1 } };
const obj3 = { a: { b: '1' } };

// assert.deepEqual(变量，预期值，错误信息)   变量 == 预期值
// assert.deepStrictEqual(变量，预期值，错误信息)  变量 === 预期值
// 同样也是错误的时候抛出信息，正确的时候继续默默执行
assert.deepEqual(obj1, obj2, '不等哦'); // true
assert.deepEqual(obj1, obj3, '不等哦'); // true
assert.deepStrictEqual(obj1, obj2, '不等哦'); // true
assert.deepStrictEqual(obj1, obj3, '不等哦'); // false，这个会抛出错误信息
```
### stream 流
stream 又叫做流，可以把它当做是前面说过的 fs.readFile 和 fs.writeFile 的升级版。
我们要知道 readFile 和 writeFile 的工作流程 是先把整个文件读取到内存中，然后再一次写入，这种方式对于稍大的文件就不适用了，因为这样容易导致内存不足，所以更好的方式是什么呢？就是边读边写啦，业界常说成管道流，就像水流经过水管一样，进水多少，出水就多少，这个水管就是占用的资源（内存），就那么大，这我们样就能合理利用内存分配啦，而不是一口气吃成个胖子，有吃撑的风险（就是内存爆了）。

```js
const fs = require('fs');

// 读取流：fs.createReadStream();
// 写入流：fs.createWriteStream();
let rs = fs.createReadStream('a.txt'); // 要读取的文件
let ws = fs.createWriteStream('a2.txt'); // 输出的文件

rs.pipe(ws); // 用 pipe 将 rs 和 ws 衔接起来，将读取流的数据传到输出流（就是这么简单的一句话就能搞定）

rs.on('error', err => {
  console.log(err);
});
ws.on('finish', () => {
  console.log('成功');
})

```
流式操作，就是一直读取，它是个连续的过程，如果一边快一边慢，或者一边出错没衔接上也没关系，它会自动处理，不用我们自己去调整其中的误差，是个优秀的模块没错了👍。另外，我们没有直接使用 stream 模块，是因为 fs 模块引用了它并对其做了封装，所以用 fs 即可

### zlib 压缩
```js
const fs = require('fs');
const zlib = require('zlib');

let rs = fs.createReadStream('tree.jpg');
let gz = zlib.createGzip();
let ws = fs.createWriteStream('tree.jpg.gz');

rs.pipe(gz).pipe(ws);  // 原始文件 => 压缩 => 写入

rs.on('error', err => {
  console.log(err);
});
ws.on('finish', () => {
  console.log('成功');
})

```

### 其它模块
![Node内置模块](https://img-blog.csdnimg.cn/20200606222238960.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mjc1NTY3Nw==,size_16,color_FFFFFF,t_70)