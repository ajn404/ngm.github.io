<template>
<div>

</div>
</template>

<script>
import P5 from "../../../resource/p5";
export default {
  name: "primeSpiral",
  mounted() {
    this.$nextTick(function (){
      let judgeCanvasExist = document.getElementById("defaultCanvas0");
      if (judgeCanvasExist === null) {
        new P5(this.main, "box");
      }
    })

  },
  methods:{
    main(_p5){
      let _ = _p5;
      console.log(p5)
    }
  }
}
</script>

<style scoped>

</style>