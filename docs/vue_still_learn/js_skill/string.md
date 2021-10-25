## 判断字符串是否全为空
``` js
str.match(/^[ ]*$/)
```
## 判断对象是否为空
```js
//使用Object.keys()或者Object.getOwnPropertyNames()
const obj = {};
const arr = Object.keys(obj)
console.log(arr.length>0)
//使用JSON.stringfy()
console.log(JSON.stringify(obj)!=='{}');
```
::: tip 注意
Object.keys(), 它返回一个数组，这个数组由对象中可枚举的自有属性的名称组成。
Object.getOwnPropertyNames() 返回一个数组,该数组对元素是obj自身拥有的枚举或不可枚举属性名称字符串。
:::
