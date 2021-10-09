### 目录
[[toc]]

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

### 主动出发element表单的检查

``` js
this.$refs.ruleForm.validateField('content')
```