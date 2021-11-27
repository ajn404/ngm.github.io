  <template>
  <div class="box" ref="box">
    <span class="element" v-show="!typingStop"></span>
    <div v-show="typingStop" class="slow-show">
      <div class="element">大梦一场的狗粮长先生，前已无通路，后不见归途</div>
      <div class="calendar">ajn404</div>
      <Swiper
        class="swiper-container"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        style="position: relative"
        v-show="styleAnimate"
      >
        <SwiperSlide v-for="(i, index) in swiperSlideNums" :key="index" class=" animate__animated animate__zoomIn animate__infinite">
          <el-image
            :src="'https://picsum.photos/1080/480/?random=' + index"
            fit="cover"
            style="max-width: 100vw"
            class="swiper-img"
          ></el-image>
        </SwiperSlide>
      </Swiper>
      <Swiper
        class="swiper-container"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        v-show="!styleAnimate"
        style="position: relative"
      >
        <SwiperSlide v-for="(i, index) in swiperSlideNums" :key="index">
          <el-image
            :src="'https://picsum.photos/1080/480/?random=' + index"
            fit="cover"
            style="max-width: 100vw"
            class="swiper-img"
          ></el-image>
        </SwiperSlide>
      </Swiper>
      <el-button 
      @click="resetSwiperAnimate"
      
      >
      zoomIn:轮播动画
      </el-button>
      <h3>使用wasd上下左右,聚焦后键入m关闭音乐r重制场景</h3>
      <div class="iframe-box">
        <iframe
          style="width: 100%"
          scrolling="yes"
          src="https://bruno-simon.com/"
          frameborder="no"
          allowfullscreen="true"
        >
        </iframe>
      </div>
      <div class="nice-u">
        <div>优质的网页收集</div>
        <h3><a href="https://iuri.is">https://iuri.is</a></h3>
        <h3>
          <a href="https://prashantsani.com/">https://prashantsani.com/</a>
        </h3>
        <h3>
          <a href="https://albinotonnina.com/">https://albinotonnina.com/</a>
        </h3>
      </div>
      <h3>算法可视化</h3>
      <div class="iframe-box">
        <iframe
          style="width: 100%"
          scrolling="yes"
          src="https://algorithm-visualizer.org/backtracking/hamiltonean-cycles"
          frameborder="no"
          allowfullscreen="true"
        >
        </iframe>
      </div>
      <div class="nice-u">
        <h3>工具学习类的</h3>
        <h3>
          <a href="https://algorithm-visualizer.org/"
            >https://algorithm-visualizer.org/</a
          >
        </h3>
      </div>
      <h3>学习vite vue3系列</h3>
      <div class="iframe-box">
        <iframe
          style="width: 100%"
          scrolling="yes"
          src="https://ajn404.github.io/viteV3/"
          frameborder="no"
          allowfullscreen="true"
        >
        </iframe>
      </div>
      <h3>学习react gsap系列</h3>
      <div class="iframe-box">
        <iframe
          style="width: 100%"
          scrolling="yes"
          src="https://ajn404.github.io/gsap_ex/"
          frameborder="no"
          allowfullscreen="true"
        >
        </iframe>
      </div>
    </div>
  </div>
</template>
<script>
// 首页这里我还不是很熟悉vue3和typescript的写法
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
import "animate.css";
export default {
  data() {
    return {
      text: "hello editor",
      swiperSlideNums: new Array(20),
      typeThing: "",
      typingStop: false,
      styleAnimate:false,
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
        "四体不勤 五谷不分",
        "文不能作词 武不能防身",
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
      // this.$nextTick(() => {
      //   document.addEventListener("keydown", function (event) {
      //     if (event.keyCode === 38 || event.keyCode === 40) {
      //       event.preventDefault();
      //     }
      //   });
      // });

      const height = document.body.scrollHeight;
      let i = 100;
      var time = setInterval(function () {
        window.scrollTo({
          top: i,
          behavior: "smooth",
        });
        i += 100;
        if (i >= height) {
          clearInterval(time);
          let j = height;
          setTimeout(() => {
            var toTop = setInterval(function () {
              window.scrollTo({
                top: j,
                behavior: "smooth",
              });
              j -= 30;
              if (j < 0) {
                clearInterval(toTop);
              }
            });
          }, 4000);
        }
      }, 50);
    },

    resetSwiperAnimate(){
      this.styleAnimate =!this.styleAnimate
    }
  },
  components: {
    // cssTransitionAndAnimation,
    MdEditor,
    Swiper,
    SwiperSlide,
  },
};
</script>
<style lang="scss" scoped>
@import "./common/styles/home.scss";
</style>
