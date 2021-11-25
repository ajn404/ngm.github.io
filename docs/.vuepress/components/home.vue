<template>
  <div class="box" ref="box">
    <span class="element" v-show="!typingStop"></span>
    <div v-show="typingStop" class="slow-show">
        <div class="element">大梦一场的狗粮长先生，前已无通路，后不见归途</div>
      <div class="calendar">ajn404</div>
      <Swiper
        class="swiper-container"
        :effect="'fade'"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
      >
        <SwiperSlide v-for="(i, index) in swiperSlideNums" :key="index">
          <el-image
            :src="'https://picsum.photos/1080/480/?random=' + index"
            fit="cover"
            style="max-width: 100vw"
          ></el-image>
        </SwiperSlide>
      </Swiper>
      <!-- <neu></neu> -->
    </div>
  </div>
</template>
<script>
import neu from './home/neu.vue'
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Autoplay, EffectFade } from "swiper";
import * as Typed from "typed.js";
import GitHubCalendar from "github-calendar";
import MdEditor from "md-editor-v3";
import "github-calendar/dist/github-calendar-responsive.css";
import "md-editor-v3/lib/style.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/bundle";
import "./common/styles/index.scss";
// import "./home/neu.scss"

export default {
  data() {
    return {
      text: "hello editor",
      swiperSlideNums: new Array(10),
      typeThing: "",
      typingStop: false,
    };
  },
  mounted() {
    this.$nextTick(() => {
      //自动打字
      this.typeThing = this.initType();
      //github提交日历
      this.initCalender();
    });
  },
  created() {
    SwiperCore.use([Autoplay, EffectFade]);
  },
  methods: {
    initType() {
      let typedString = [
        "大梦一场的狗粮长先生",
        "前已无通路 后不见归途",
      ];
      let homeTypedFont = new Typed(".element", {
        strings: typedString,
        typeSpeed: 400, //打字速度
        backSpeed: 10, //回退速度
        showCursor: false,
        onComplete: (self) => {
          this.typingStop = true;
          this.$nextTick(() => {
            this.scrollToBottom();
          });
        },
      });
      return homeTypedFont;
    },
    initCalender() {
      GitHubCalendar(".calendar", "ajn404", { responsive: true });
    },
    scrollToBottom() {
      const height = document.body.scrollHeight;
      let i = 10;
      var time = setInterval(function () {
        window.scrollTo(0, i);
        i += 10;
        if(i>=height){
            clearInterval(time)
        }
      }, 20);
    },
  },
  components: {
    // cssTransitionAndAnimation,
    MdEditor,
    Swiper,
    SwiperSlide,
    neu
  },
};
</script>
<style lang="scss" scoped>
@import "./common/styles/home.scss";
</style>
