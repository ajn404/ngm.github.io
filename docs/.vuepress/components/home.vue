<template>
    <div class="box">
        <span class="element"></span>
    </div>
</template>
<script>
    import * as Typed from 'typed.js'
    export default {
        mounted() {
            this.initType()
        },
        methods:{
            initType(){
                let typedString=['四体不勤，五谷不分，文不能作词，武不能防身','喜欢养狗，不爱洗头,不事劳作，一无所获']
                let homeTypedFont = new Typed('.element', {
                    strings:typedString,
                    typeSpeed: 70, //打字速度
                    backSpeed: 90,//回退速度
                });
                return homeTypedFont
            }
        }
    }

</script>
<style scoped>
    .box{
        width: 100%;
        min-height: 100vh;
        font-size: 2em;
        font-weight: bold;
        text-align: center;
    }
</style>
