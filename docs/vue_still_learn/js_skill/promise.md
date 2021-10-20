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

## 4.实现 then

关于 then

```js
const p1 = new Promise((resolve, resize) => {
  resolve("成功");
}).then(
  (res) => console.log(res),
  (error) => console.log(error)
);

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("失败");
  });
}).then(
  (res) => console.log(res),
  (error) => console.log(error)
);

// 链式调用
const p3 = new Promise((resolve, reject) => {
  resolve(100);
})
  .then(
    (res) => 2 * res,
    (err) => console.log(err)
  )
  .then(
    (res) => console.log(res),
    (err) => console.log(err)
  );
```

::: tip 实现
实现then：then,定时器情况，链式调用和微任务
:::

1. ##### then

   ```js
   
   ```

2. ##### 