<template>
  <div class="box">
    <div id="poorDemo1"></div>
    

    <div class="slider-demo-block">
    <span class="demonstration">Default value</span>
    <el-slider
    v-model="r"
    :max="800"
    :min="0"
    :show-tooltip="false"
    />
  </div>
  </div>

</template>
<script>
//vue中使用P5的方式
import P5 from "../../.vuepress/resource/p5";

export default {
  data() {
    return {
        r:800,
        g:800,
        b:800
    };
  },
  created() {},
  mounted() {
    document.getElementById("poorDemo1").innerHTML = "";
    // new P5(this.main, "poorDemo1");
  },
  methods: {
    main(_p5) {
      let p5 = _p5;

      let width = 400;
      let height = 400;

    


      p5.setup = () => {
        p5.createCanvas(width, height);

       
      };
      p5.draw = () => {
        // p5.background(255);
         let images = p5.createImage(400, 400);
        images.loadPixels();
        for (let i = 0; i < 400; i++) {
          for (let j = 0; j < 400; j++) {
            images.set(
              i,
              j,
              p5.color(
                p5.map(i + j, 0, this.r, 0, 255, true),
                p5.map(i + j, 0, this.g, 0, 255, true),
                p5.map(i + j, 0, this.b, 0, 255, true),
                (i % 400) * 2)
              )
          }
        }
        images.updatePixels();
        p5.image(images, 0, 0);
      };
    },
  },
};
</script>
<style scoped>
#poorDemo1 {
  max-width: 100%;
  max-height: 80%;
  overflow: hidden;
}

.slider-demo-block {
  display: flex;
  align-items: center;
}
.slider-demo-block .el-slider {
  margin-top: 0;
  margin-left: 12px;
}

</style>