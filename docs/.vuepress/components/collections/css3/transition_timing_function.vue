<template>
  <div class="box">
    <el-button @click="handelClick">触发</el-button>
    <div class="items" @click="handelClick">
      <div class="item" :class="showTransition" v-for="(item,index) in new Array(5)">{{functionName[index]}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "transition_timing_function",
  data() {
    return {
      showTransition: '',
      functionName:['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear']
    }
  },
  methods: {
    handelClick() {
      this.showTransition = this.showTransition ? '' : 'transition'
    }
  }
}
</script>

<style scoped lang="scss">
@import "~element-plus/dist/index.css";

.box {
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 2vh;
}

.items {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 2em;
  color: #fff;


  .item {
    width: 5em;
    height: 5em;
    line-height: 5em;
    text-align: center;
    vertical-align: middle;
    transition-property: margin-left;
    transition-duration: 2s;
    //transition-delay: 2s;
    &.transition {
      margin-left: 50vw;

    }
  }

  //下面两个可以写在一起，练习一下scss嘛
  $list: ease, ease-in, ease-out, ease-in-out, linear;
  @for $i from 1 through 5 {
    .item:nth-child(#{$i}) {
      background-color: rgb(random(235), random(235), random(235));
    }
  }

  @each $c in $list {
    $i: index($list, $c);
    .item:nth-child(#{$i}) {
      transition-timing-function: $c;
    }
  }
}
</style>