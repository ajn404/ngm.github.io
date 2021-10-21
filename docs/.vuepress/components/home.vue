<template>
    <div class="box">
        <span class="element element1"></span>
    </div>
</template>
<script>
    import * as Typed from 'typed.js'
    export default {
        mounted() {
            let typedString=['四体不勤，五谷不分，文不能作词，武不能防身','喜欢养狗，不爱洗头,不事劳作，一无所获']
            let homeTypedFont = new Typed('.element1', {
                strings:typedString,
                typeSpeed: 70, //打字速度
                backSpeed: 60,//回退速度
            });
        }
    }

</script>
<style scoped>
    .box{
        min-width: 100vw;
        min-height: 100vh;
        font-size: 60px;
        font-weight: bold;
    }
</style>
