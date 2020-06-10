# Node核心

## 1.1-Node概述
> 参考NodeJS.xmind

## 1.2-全局对象

```js
# Buffer 缓冲器

1. 类型化数组
2. 继承自 UInt8Array
3. 计算机中存储的基本单位：字节
4. 使用时、输出时可能需要用十六进制表示


# process 进程

process.exit(); // 强制退出当前Node进程，可传入退出码，0表示成功退出，默认为0
process.cwd(); // 返回当前Node进程的工作目录
process.argv; // 获取命令中的所有参赛
process.platform; // 获取当前的操作系统
process.kill(10428); // 根据进程ID杀死进程（应用每次启动时的进程ID都不相同）
process.env; // 获取环境变量对象
```
## 1.3-Node的模块化细节
> 参考NodeJS.xmind
## 1.4-Node中的ES模块（扩展）
> 参考NodeJS.xmind
## 1.5-基本内容模块

### os 操作系统
```js
const os = require("os");

console.log('EOL', os.EOL); 
// 操作系统特定的行末标志(分隔符)。在 POSIX 上是 \n。在 Windows 上是 \r\n。

console.log('arch', os.arch()) 
// 返回为其编译 Node.js 二进制文件的操作系统的 CPU 架构。 可能的值有：'arm'、 'arm64'、 'ia32'、 'mips'、 'mipsel'、 'ppc'、 'ppc64'、 's390'、 's390x'、 'x32' 和 'x64'。

console.log('cpus', os.cpus()); 
// 返回一个对象数组，其中包含有关每个逻辑 CPU 内核的信息。

console.log('freemem', os.freemem()); 
// 以整数的形式返回空闲的系统内存量（以字节为单位）

console.log('homedir', os.homedir()); 
// 返回当前用户的主目录的字符串路径。

console.log('hostname', os.hostname()); 
// 以字符串的形式返回操作系统的主机名。

console.log('tmpdir', os.tmpdir()); 
// 以字符串的形式返回操作系统的默认临时文件目录。
```

### path 路径
```js
const path = require("path");

path.basename('/目录1/目录2/文件.html')
// 返回: '文件.html'

path.sep
// 提供平台特定的路径片段分隔符。Windows 上是 \\，POSIX 上是 /。

path.delimiter
// 提供平台特定的路径定界符。Windows上是;，POSIX上是:

path.dirname('/目录1/目录2/目录3')
// 返回: '/目录1/目录2'

path.extname('index.html')
// 返回: '.html'

path.join('/目录1', '目录2', '目录3/目录4', '目录5', '..')
// 返回: '/目录1/目录2/目录3/目录4'
// 将所有给定的 path 片段连接到一起（使用平台特定的分隔符作为定界符），然后规范化生成的路径。

path.normalize('/foo/bar//baz/asdf/quux/..')
// 返回: '/foo/bar/baz/asdf'
// 规范化给定的 path，解析 '..' 和 '.' 片段。

path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb')
// 返回: '../../impl/bbb'
// 根据当前工作目录返回 from 到 to 的相对路径

path.resolve('/目录1/目录2', './目录3');
// 返回: '/目录1/目录2/目录3'
path.resolve('目录1', '目录2/目录3/', '../目录4/文件.gif');
// 如果当前工作目录是 /目录A/目录B，
// 则返回 '/目录A/目录B/目录1/目录2/目录4/文件.gif'
```
### url
```js
const URL = require('url');

 URL.format({
  protocol: 'https',
  hostname: 'example.com',
  pathname: '/some/path',
  query: {
    page: 1,
    format: 'json'
  }
});
// => 'https://example.com/some/path?page=1&format=json'

URL.parse("https://nodejs.org:80/a/b/c?t=3&u=5#abc");
// {
//   protocol: 'https:',
//   slashes: true,
//   auth: null,
//   host: 'nodejs.org:80',
//   port: '80',
//   hostname: 'nodejs.org',
//   hash: '#abc',
//   search: '?t=3&u=5',
//   query: 't=3&u=5',
//   pathname: '/a/b/c',
//   path: '/a/b/c?t=3&u=5',
//   href: 'https://nodejs.org:80/a/b/c?t=3&u=5#abc'
// }
```

### util
```js


```

