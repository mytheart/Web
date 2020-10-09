# Proxy 代理

代理：提供了修改底层实现的方式

```js

//代理一个目标对象
//target：目标对象
//handler：是一个普通对象，其中可以重写底层实现
//返回一个代理对象
new Proxy(target, handler)
```
