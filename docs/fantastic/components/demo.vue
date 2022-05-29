<template>
    <div class="">
        <div id="xxx">

        </div>
    </div>
</template>
<script>
    //vue中使用P5的方式
    import P5 from "../../.vuepress/resource/p5";

    export default {
        data() {
            return {}
        },
        created() {

        },
        mounted() {
            let judgeCanvasExist = document.getElementById("defaultCanvas0")
            if (judgeCanvasExist === null) {
                new P5(this.main,"xxx");
            }
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
    #xxx{
        max-width: 100%;
        max-height: 80%;
        overflow: hidden;
    }
</style>