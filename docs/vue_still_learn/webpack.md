# webpack
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

```