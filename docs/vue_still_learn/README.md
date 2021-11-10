---
sidebarDepth : 4
---

## 目录

[[toc]]

## 概括

每天学一点,和 vue 无关，和 vue 有关

## node-sass

```shell
cnpm i
```

不然会报错

## vue 过滤器

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

## 主动触发 element 表单的检查

```js
this.$refs.ruleForm.validateField("content");
```

## 使用vuepress内置组件codegroup
<CodeGroup>
  <CodeGroupItem title="YARN">

```bash:no-line-numbers
yarn
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM" active>

```bash:no-line-numbers
npm install
```
  </CodeGroupItem>
</CodeGroup>

::: tip 在vue中实现p5有点恶心心
1.使用toDataURL把canvas转换成base64图片地址
2.或者用refs把canvas "appendChild"到vue组件中
3.组件中导入p5,其中p5的方法都要加'p5.'，否则会报错
:::

<ClientOnly>
<vue-still-learn></vue-still-learn>
</ClientOnly>
vue的组件代码如下

```
mounted() {
            this.$nextTick(()=>{
                let judgeCanvasExist = document.getElementById("defaultCanvas0")
                if(judgeCanvasExist===null) {
                    new P5(this.main);
                }
            })
        },
methods: {
            main(_p5) {
                let p5 = _p5;
                let bubbles = [];
                const window_width = window.innerWidth;
                const window_height = window.innerHeight;
                p5.setup = () => {
                    p5.createCanvas(window_width / 4, window_height / 4);
                    for (let i = 0; i < 100; i++) {
                        let x = p5.random(p5.width);
                        let y = p5.random(p5.height);
                        let r = p5.random(20, 60);
                        let b = new Bubble(x, y, r);
                        bubbles.push(b);
                    };
                    let myCanvas=document.getElementById("defaultCanvas0");
                    let container = this.$refs.box;
                    container.appendChild(myCanvas)
                    // let dataUrl = myCanvas.toDataURL();
                    //base64
                    // this.canvasUrl = dataUrl;
                    // console.log(typeof myCanvas)
                    // console.log(myCanvas.parentNode)
                    // debugger
                    // myCanvas.parentNode.removeNode(myCanvas)
                }
                p5.mouseMoved = () => {
                    for (let i = bubbles.length - 1; i >= 0; i--) {
                        if (bubbles[i].contains(p5.mouseX, p5.mouseY)) {
                            bubbles.splice(i, 1);
                        }
                    }
                }
                p5.draw = () => {
                    p5.background(0);
                    for (let i = 0; i < bubbles.length; i++) {
                        if (bubbles[i].contains(p5.mouseX, p5.mouseY)) {
                            bubbles[i].changeColor(255);
                        } else {
                            bubbles[i].changeColor(0);
                        }
                        bubbles[i].move();
                        bubbles[i].show();
                    }
                }

                class Bubble {
                    constructor(x, y, r) {
                        this.x = x;
                        this.y = y;
                        this.r = r;
                        this.brightness = 0;
                    }
    
                    changeColor(bright) {
                        this.brightness = bright;
                    }
    
                    contains(px, py) {
                        let d = p5.dist(px, py, this.x, this.y);
                        if (d < this.r) {
                            return true;
                        } else {
                            return false;
                        }
                    }
    
                    move() {
                        this.x = this.x + p5.random(-2, 2);
                        this.y = this.y + p5.random(-2, 2);
                    }
    
                    show() {
                        p5.stroke(255);
                        p5.strokeWeight(4);
                        p5.fill(this.brightness, 125);
                        p5.ellipse(this.x, this.y, this.r * 2);
                    }
                }
    
            }
        }

```

### 快速复制网页的cookie

```js
copy(document.cookie)
//粘贴并应用
"复制的内容".split(';').map(c=>document.cookie=c)
```

