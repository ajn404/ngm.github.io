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

