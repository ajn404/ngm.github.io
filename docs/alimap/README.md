---
pageClass: css-transition-and-animation-box
---
## 目录

[[toc]]

## [前端知识图谱](https://f2e.tech/)

### 浏览器

#### 浏览器内核

1. google和Opera拥抱的blink

2. 苹果的webkit，webkit的鼻祖其实是Safari，而现在chrome的内核已经是blink了

3. 微软的edgehtml，早期微软的IE采用的trident

4. 火狐的servo，早期火狐采用的gecko

5. 浏览器内核只负责渲染，GUI及网络连接等跨平台工作则是浏览器实现的

#### 渲染引擎工作原理

1. 解析HTML构建的Dom树

2. 构建渲染树

3. 对渲染树进行布局

4. 绘制渲染树

#### 浏览器访问网站的全过程

1. 输入网址
2. 浏览器根据网址构建http请求报文
3. 浏览器发起DNS解析请求,将域名转换成IP地址
4. 浏览器发送请求报文给服务器
5. 服务器接收报文并解析
6. 服务器处理用户请求，将结果封装成http响应报文
7. 服务器发送响应报文给浏览器
8. 浏览器接收响应报文并解析
9. 浏览器解析HTML页面并展示，在解析HTML页面时遇到新的资源需要再次发起请求
10. 最终展示页面

### APP
#### 小程序
- [微信小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/)
- [taro](https://github.com/NervJS/taro)
- [mpvue](https://github.com/mpvue/mpvue)
- [megalo](https://github.com/kaola-fed/megalo)
- [uni-app](https://github.com/dcloudio/uni-app)

### webview
[WebView | Android Developers](https://developer.android.com/reference/android/webkit/WebView)
::: tip WebView
A View that displays web pages. This class is the basis upon which you can roll your own web browser or simply display some online content within your Activity. It uses the WebKit rendering engine to display web pages and includes methods to navigate forward and backward through a history, zoom in and out, perform text searches and more. 
:::
#### native
```java
public class WebView
extends AbsoluteLayout implements ViewTreeObserver.OnGlobalFocusChangeListener
ViewGroup.OnHieranchyChageListener
```
### uni-app
```js
<template>
    <view>
        <web-view :webview-styles="webviewStyles" src="https://uniapp.dcloud.io/static/web-view.html"></web-view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                webviewStyles: {
                    progress: {
                        color: '#FF3333'
                    }
                }
            }
        }
    }
</script>
```

#### Hybrid App
::: tip Hybrid App
Hybrid App的本质，其实是在原生的 App 中，使用 WebView 作为容器直接承载 Web页面。因此，最核心的点就是 Native端 与 H5端 之间的双向通讯层，其实这里也可以理解为我们需要一套跨语言通讯方案，来完成 Native(Java/Objective-c/...) 与 JavaScript 的通讯。这个方案就是我们所说的 JSBridge，而实现的关键便是作为容器的 WebView，一切的原理都是基于 WebView 的机制。
:::

#### ionic
::: details 点击查看
```text
快跑别用
``` 
:::
