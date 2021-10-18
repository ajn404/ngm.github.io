# 目录

[[toc]]

# 概括

每天学一点,和 vue 无关，和 vue 有关

# node-sass

```shell
cnpm i
```

不然会报错

# vue 过滤器

```js
  filters: {
    ellipsis(value) {
      if (!value) return ''
      if (value.length > 8) {
        return value.slice(0, 8) + '...'
      }
      return value
    }
  }
```

**在 3.x 中，过滤器已移除，且不再支持。取而代之的是，我们建议用方法调用或计算属性来替换它们。**

# 主动触发 element 表单的检查

```js
this.$refs.ruleForm.validateField("content");
```

# Promise

```js
function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, "done");
  });
}

timeout(1000).then((value) => {
  console.log(value);
});
```

1s 输出 done:smile:

```js
let p1 = new Promise((resolve, reject) => {
  resolve("成功");
  reject("失败");
});
console.log("p1", p1);

let p2 = new Promise((resolve, reject) => {
  reject("失败");

  resolve("成功");
});
console.log("p2", p2);

let p3 = new Promise((resolve, reject) => {
  // reject("失败");
  // resolve("成功");
  throw "报错";
});
console.log("p3", p3);
```

结果
![img](/ngm.github.io/images/img_vue_still_learn.png)

