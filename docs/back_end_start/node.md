## 《nodejs 10实战》

### http模块

#### 创建http服务器和客户端
> 创建简单的nodejs服务器端
@[code{1-9} js{}](./node/index01.js)

> http.createServer()方法返回的是http模块封装的一个基于事件的http服务器。
> 同样，http.request是其封装的一个http客户端工具，可以用来向http服务器发起请求。
> 上面的req和res分别是http.IncomingMessage和http.ServerResponse的实例。
::: tip http.Server的事件主要有： 
- request：最常用的事件，当客户端请求到来时，该事件被触发，提供req和res两个参数，表示请求和响应信息。
- connection：当TCP连接建立时，该事件被触发，提供一个socket参数，是net.Socket的实例。
- close：当服务器关闭时，触发事件（注意不是在用户断开连接时）。
:::

> http.createServer其实就是添加了一个request事件监听
@[code{1-11} js{}](./node/index02.js)

[http.incomingMessage](http://nodejs.cn/api/http/class_http_incomingmessage.html)
是HTTP请求的信息，提供3个事件
- data
- end
- close

http.IncomingMessage提供的属性主要有：
- method：HTTP请求的方法，如GET。
- headers：HTTP请求头。
- url：请求路径。
- httpVersion：HTTP协议的版本

> 融合上述知识
@[code{1-25} js{}](./node/index03.js)

http.ServerResponse是返回给客户端的信息，其常用的方法为：
- res.writeHead(statusCode,[headers])：向请求的客户端发送响应头。
- res.write(data,[encoding])：向请求发送内容。
- res.end([data],[encoding])：结束请求。