<template>
<div>
    pixi中的helloWorld,进控制台看看
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
