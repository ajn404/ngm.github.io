<template>
    <div class="box">
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
                new P5(this.main,"xxx");
        },
        methods: {
            main(_p5) {
                let p5 = _p5;
                let i =0;
                let num = 5;

                let width = p5.windowWidth-30;
                let height = p5.windowHeight -100;

                p5.setup=()=> {
                    p5.createCanvas(width/2, height/2);
                }
                p5.draw=()=> {
                    p5.describe('pink square with red heart in the bottom right corner');
                    p5.background('pink');
                    p5.fill('red');
                    p5.noStroke();

                    let originPoints=[width/2,0,0,p5.height,]



                    // if(i<num){
                    //     p5.triangle()
                    //     i++;
                    //
                    // }

                }
            },
            getPoint(x1,y1,x2,y2,x3,y3){
                    return [x1,y1,(x1+x2)/2,(y1+y2)/2,(x1+x3)/2,(y1+y3)/2]
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