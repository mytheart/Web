# 概述

## js开发中存在的问题
1. 使用了不存在的变量、函数或成员；
2. 把一个不确定的类型当做一个确定的类型处理；
3. 在使用null或undefined的成员。（TypeError: Cannot- read property 'name' of undefined，在统计的前端开发排名前10的错误中，这个错误排第一)；

### js和ts代码对比
1. 看下面简单的一段程序，将姓名的首字母大写后反转返回；  
下面的程序中有几处错误，如果在js中，我们只有在代码运行时才能发现错误；  
```javascript
function getUserName() {
    if (Math.random() < 0.5) {
        return 'zhang yin'
    };

    return 404;
}

let myname = getUsername();
mynema = myname.split(' ').map(el => el[0].touppercase + el.subStr(1)).join(' ');
```
2. 现在什么都不用做，只把js后缀换成ts,错误立刻就显示出来了，ts不会等到执行时才报错。

![ts代码](http://m.qpic.cn/psb?/V10aWvPE1AvW77/o6a..JRLEJ1rk9y*PgWZp7w1E1asXN6TYxeMUoFxHa8!/b/dLYAAAAAAAAA&bo=vgV.AQAAAAARF.Q!&rf=viewer_4)

- 点击快速修复

![ts代码](http://m.qpic.cn/psb?/V10aWvPE1AvW77/qF34aLRoxjOOlgzvace4G4M6th5fGi8HUhIo0HjWtMw!/b/dLYAAAAAAAAA&bo=LAaqAQAAAAARF6E!&rf=viewer_4)

- 还有错误，提示myname可能是string或者number,number上没有split方法。加判断

![ts代码](http://m.qpic.cn/psb?/V10aWvPE1AvW77/7EiHU6iOxuBzU16jNjZJMNHloSjBFZLO4wOvmVk2XWE!/b/dL4AAAAAAAAA&bo=kgfiAQAAAAADN2Q!&rf=viewer_4)

- 还有错误，一直点快速修复

![ts代码](http://m.qpic.cn/psb?/V10aWvPE1AvW77/6kd7rsP3V*sL2ESwkAu0cA3f..mkv08gROEEDACl52s!/b/dLgAAAAAAAAA&bo=QAi.AQAAAAADN.U!&rf=viewer_4)

![ts代码](http://m.qpic.cn/psb?/V10aWvPE1AvW77/OXC.jan50hS1PWM*AxUApBd21Pr1kJIhEAFBIPSI534!/b/dL8AAAAAAAAA&bo=5AXQAQAAAAARFxA!&rf=viewer_4)

- 完美，错误全部修复

![ts代码](http://m.qpic.cn/psb?/V10aWvPE1AvW77/KuaIzAXwrkWgm0tUWJmn0WAFZu8PKeHT1l9tk1Qbf0U!/b/dD4BAAAAAAAA&bo=UAb2AQAAAAARF4E!&rf=viewer_4)


## js的原罪
1. js语言本身的特点，决定了该语言无法适应大型的复杂的项目；
2. 弱类型：某个变量，可以随时更换类型；
3. 解释性：错误发生的时间，是在运行时；

**前端开发中,大部分时间都是在排错;**

## TypeScript （ts = js + 类型系统）

1. TypeScript是js的超集，是一个可选的、静态的类型系统；  
2. 超集：包含的关系，整数是正整数的超集；
3. 类型系统：对代码中所用的标识符（变量、函数、参数、返回值）进行类型检查；
4. 可选的,学习曲线相对平滑；
5. ts不参与任何运行时的类型检查；
6. ts在编写时报错，js在执行时报错；

## ts的常识
1. 2012年微软发布；
2. Anders Hejlsberg 负责开发ts项目；
3. 开源的，拥抱ES标准;


## 额外的惊喜
1. 有了类型检查，无形中增强了面向对象的开发；
2. js中也有类和对象，js支持面向对象开发，没有类型检查，很多面向对象的场景实现起来会有诸多问题；
3. 使用ts后，可以编写出完善的面向对象代码；
