<template>
    <div class="box" ref="box">
        <span class="element" v-show="!typingStop"></span>
        <div v-show="typingStop" class="slow-show">
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
        </div>


    </div>
</template>
<script>
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
                    "大梦一场的",
                    "董二千先生",
                    "推开窗户",
                    " 举起望远镜",
                    "推开窗户",
                    " 举起望远镜",
                    "眼底映出 ",
                    "一阵浓烟",
                    "前已无通路 ",
                    "后不见归途",
                    "敌视现实",
                    " 虚构远方",
                    "东张西望 ",
                    "一无所长",
                    "四体不勤",
                    " 五谷不分",
                    "文不能测字",
                    " 武不能防身",
                    "喜欢养狗 ",
                    "不爱洗头",
                    "不事劳作 ",
                    "一无所获",
                    "厌恶争执",
                    " 不善言说",
                    "终于沦为",
                    "沉默的帮凶",
                    "借酒消愁 ",
                    "不太能喝",
                    "蛊惑他人 ",
                    "麻醉内心",
                    "浇上汽油 ",
                    "舒展眉头",
                    "纵火的青年 ",
                    "迫近的时间",
                    "大梦一场的",
                    "董二千先生",
                    "推开窗户 ",
                    "举起望远镜",
                    "眼底映出 ",
                    "一阵浓烟",
                    "前已无通路 ",
                    "后不见归途",
                ];
                typedString = [
                    "技术积累",
                    "沉下心来",
                    "一点点弄明白",
                    "关于计算机",
                    "关于自己",
                    "关于........",
                ];
                let homeTypedFont = new Typed(".element", {
                    strings: typedString,
                    typeSpeed: 500, //打字速度
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
                this.time=setTimeout(() => {
                    window.scrollTo({
                        top: height,
                        behavior: "smooth",
                    },1000);
                });
                // vue中使用setTimeout

            },
        },
        unmounted(){
            clearTimeout(this.time);
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
