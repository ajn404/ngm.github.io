<template>
    <div class="box">
        <div id="angular-motion">

        </div>
    </div>
</template>
<script>
    //vue中使用P5的方式
    import P5 from "../../.vuepress/resource/p5";

    export default {
        name:'angularMotion',
        data() {
            return {}
        },
        created() {

        },
        mounted() {
                new P5(this.main,"angular-motion");
        },
        methods: {
            main(_p5) {
                let p5 = _p5;
                p5.setup=()=> {
                    p5.createCanvas(p5.windowWidth-30, p5.windowHeight-100);

                }
                p5.draw=()=> {
                }
            }
        }

    }
</script>
<style scoped>
    #angular-motion{
        max-width: 100%;
        max-height: 80%;
        overflow: hidden;
    }
</style>