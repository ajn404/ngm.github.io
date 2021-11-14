<template>
<div>
    <h2>
    换一个仓库写gsap去了
    </h2>
    <span>但是打开控制台，兄弟你还是可以看到PIXI的痕迹，但2dcanvas库确实没有c3和3D好玩</span>
</div>
</template>

<script>
    import * as PIXI from 'pixi.js'
    export default {
        name: "pixi-demo",
        mounted() {
            //pixi的hello
            let type="WebGL"
            if(!PIXI.utils.isWebGLSupported()){
                type='canvas'
            }
            PIXI.utils.sayHello(type)
        }
    }
</script>

<style scoped>

</style>
