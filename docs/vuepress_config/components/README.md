# 组件实例

my-demo.vue,我这样命名组件的文件名，感觉像是犯法哈

```vue
<template>
    <div>
        <p>
            {{data.time}}
            {{data.name}}
            {{data.thing}}
        </p>
    </div>
</template>
<script>
    export default {
        name: "my-demo",
        data(){
            return{
                data:{
                    time:'2021',
                    name:'n-graymoon',
                    thing:'graduate',
                }
            }
        }
    }
</script>
<style scoped>
</style>
```

运行为

<ClientOnly>
<my-demo></my-demo>
</ClientOnly>

markdown内适用语法

`<ClientOnly><my-demo></my-demo></ClientOnly>`

这个ClientOnly字面意义看起来像“旨在客户端”，嗯:question:

##注意，在vuepress2.x，使用组件需要安装插件,这里是官方文档，

:arrow_down:

[register-components](https://v2.vuepress.vuejs.org/zh/reference/plugin/register-components.html#%E5%AE%89%E8%A3%85)

# 安装了插件，部署的时候遇到点问题，这就令人头疼了

