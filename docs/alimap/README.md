---
pageClass: css-transition-and-animation-box
---
[[toc]]

# 浏览器

## 浏览器内核

1. google和Opera拥抱的blink

2. 苹果的webkit，webkit的鼻祖其实是Safari，而现在chrome的内核已经是blink了

3. 微软的edgehtml，早期微软的IE采用的trident

4. 火狐的servo，早期火狐采用的gecko

5. 浏览器内核只负责渲染，GUI及网络连接等跨平台工作则是浏览器实现的

## 渲染引擎工作原理

1. 解析HTML构建的Dom树

2. 构建渲染树

3. 对渲染树进行布局

4. 绘制渲染树

## 浏览器访问网站的全过程

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
