## webpack
## script标签之间的隐式依赖
<strong>project</strong>  
``` diff
    build_learn
    |- package.json
+   |- index.html
+   |- /src
+       |- index.js
```
<strong>index.html</strong>
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>test your webpack</title>
    <script src="https://unpkg.com/lodash@4.16.6"></script>
</head>
<body>
    <script src="./src/index.js"></script>
</body>
</html>
```
<strong>src/index.js</strong>
``` js
function component(){
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello','webpack'],'');
    return element
}

document.body.appendChild(component())
```
<strong>package.json</strong>
``` json
{
  "name": "build_learn",
  "version": "1.0.0",
  "description": "a package for learning build",
  "private":true,
  "author": "ajn404",
  "license": "MIT",
  "scripts": {
    "start": "webpack  --config webpack.config.js"
  },
  "dependencies": {
    "webpack": "^5.58.1",
    "webpack-cli": "^4.9.0"
  }
}
```
## 创建bundle
project
``` diff
  |- package.json
+ |- /dist
+   |- index.html
- |- index.html
  |- /src
    |- index.js
```
执行 `npx webpack` 
``` shell
npx webpack       
asset main.js 69.5 KiB [emitted] [minimized] (name: main) 1 related asset
runtime modules 1010 bytes 5 modules
cacheable modules 532 KiB
  ./src/index.js 225 bytes [built] [code generated]
  ./node_modules/lodash/lodash.js 531 KiB [built] [code generated]

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value.
Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
```

## [关于模块方法](https://www.webpackjs.com/api/module-methods/)

## 使用配置文件webpack.config.js
``` js
const path = require('path');

module.exports = {
    entry:'./src/index.js',
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist')
    }
}
//我们可以通过配置方式指定loader规则，插件，解析选项
```
 执行`npx webpack  --config webpack.config.js`
# [接下来是管理资源章节](https://www.webpackjs.com/guides/asset-management/)
## 加载css
``` shell
npm install --save-dev style-loader css-loader
```
webpack.config.js
``` js
const path = require('path');

module.exports = {
    entry:'./src/index.js',
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}
```
style.css
``` css
.hello{
    color: red;
}
```
src/index.js
~~~ js
import _ from 'lodash'
import './style.css'

function component(){
    var element = document.createElement('div');
    
    element.innerHTML = _.join(['Hello','webpack'],'');
    element.classList.add('hello');

    return element
}

document.body.appendChild(component())
~~~

 执行`npx webpack  --config webpack.config.js`
 浏览器打开index.html发现头部多了一个style:golf:

``` html
<style>.hello{
    color: red;
}</style>
```
<strong>之后的webpack配置学习，遇到什么，就在下面总结什么</strong>
