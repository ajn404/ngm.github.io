### 目录
[[toc]]
### 概括
每天学一点,和vue无关，和vue有关
### node-sass
``` shell
cnpm i
```
不然会报错
### vue过滤器
``` js
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
### 主动触发element表单的检查
``` js
this.$refs.ruleForm.validateField('content')
```
### Promise
``` js
     function timeout(ms) {
        return new Promise((resolve, reject) => {
          setTimeout(resolve, ms, "done");
        });
      }

      timeout(1000).then((value) => {
        console.log(value);
      });
```
1s输出done:smile:
``` js
 let p1 = new Promise(
        (resolve,reject)=>{
            resolve("成功");
            reject("失败");
        }
    );
    console.log('p1',p1);

    let p2 = new Promise(
        (resolve,reject)=>{
            reject("失败")

            resolve("成功");
        }
    );
    console.log('p2',p2);

    let p3 = new Promise(
        (resolve,reject)=>{
            // reject("失败");
            // resolve("成功");
            throw("报错")
        }
    );
    console.log('p3',p3);
```
结果
![img](/ngm.github.io/images/img_vue_still_learn.png)
# 手写promise 
## 实现resolve和reject
```js 
  class MyPromise {
        constructor(executor) {
          this.initValue();
          // 初始化this
          this.initValue();
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
## 状态不可变

**一旦状态从pending变成了fulfilled或者rejected，那么此Promise实例的状态就锁死了**

```js
  class MyPromise {
        constructor(executor) {
          this.initValue();
          // 初始化this
          this.initValue();
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
            if(this.PromiseState !== 'pending') return
          this.PromiseState = "fullfilled";
          this.PromiseState = value;
        }

        reject(reason) {
			if(this.PromiseState !== 'pending') return
          this.PromiseState = "rejected";
          this.PromiseResult = reason;
        }
      }
```

