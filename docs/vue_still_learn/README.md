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

# 手写 promise

## 1 实现 resolve 和 reject

```js
class MyPromise {
  constructor(executor) {
    this.initValue();
    // 初始化this
    this.initBind();
    executor(this.resolve, this.reject);
  }

  initBind() {
    this.resolve = this.resolve.bind(this);
    this.reject = this.resolve.bind(this);
  }

  initValue() {
    this.PromiseResult = null;
    this.PromiseState = "pending";
  }

  resolve(value) {
    this.PromiseState = "fullfilled";
    this.PromiseState = value;
  }

  reject(reason) {
    this.PromiseState = "rejected";
    this.PromiseResult = reason;
  }
}
```

## 2 状态不可变

**一旦状态从 pending 变成了 fulfilled 或者 rejected，那么此 Promise 实例的状态就锁死了**

```js
class MyPromise {
  constructor(executor) {
    this.initValue();
    // 初始化this
    this.initBind();
    executor(this.resolve, this.reject);
  }

  initBind() {
    this.resolve = this.resolve.bind(this);
    this.reject = this.resolve.bind(this);
  }

  initValue() {
    this.PromiseResult = null;
    this.PromiseState = "pending";
  }

  resolve(value) {
    if (this.PromiseState !== "pending") return;
    this.PromiseState = "fullfilled";
    this.PromiseState = value;
  }

  reject(reason) {
    if (this.PromiseState !== "pending") return;
    this.PromiseState = "rejected";
    this.PromiseResult = reason;
  }
}

const text1 = new MyPromise((resolve, reject) => {
  resolve("成功");
  reject("失败");
});

console.log(text1);
```

## 3.实现 throw

```js
class MyPromise {
  constructor(executor) {
    this.initVaule();
    this.initBind();
    try {
      executor(this.resolve, this.reject);
    } catch (e) {
      this.reject(e);
    }
  }

  initVaule() {
    this.PromiseResult = null;
    this.PromiseState = "pending";
  }

  initBind() {
    this.resolve = this.resolve.bind(this);
    this.reject = this.reject.bind(this);
  }

  resolve(value) {
    if (this.PromiseState !== "pending") return;
    this.PromiseState = "fulfilled";
    this.PromiseResult = value;
  }

  reject(value) {
    if (this.PromiseState !== "pending") return;
    this.PromiseState = "rejected";
    this.PromiseResult = value;
  }
}
const text3 = new MyPromise((resolve, reject) => {
  throw "失败";
});
console.log(text3);
```
