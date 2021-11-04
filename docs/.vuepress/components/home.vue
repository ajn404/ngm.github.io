<template>
    <div class="box" ref="box">
        <Swiper
                class="swiper-container"
                :autoplay="true"
        >
            <SwiperSlide v-for="(i,index) in swiperSlideNums" :key="index">
                <el-image :src="'https://picsum.photos/1080/480/?random='+(index)" fit="cover" style="max-width: 100vw"></el-image>
            </SwiperSlide>
        </Swiper>
        <span class="element"></span>
        <div class="calendar">
            ajn404
        </div>
        <!-- <css-transition-and-animation></css-transition-and-animation> -->
        <div class="box-box">{{text}}</div>
        <md-editor class="editor" v-model="text"/>
<!--        <nested-lines></nested-lines>-->
    </div>
</template>
<script>
    // import {Swiper,SwiperSlide} from 'swiper/vue'
    import {Swiper, SwiperSlide} from "swiper/vue"
    import * as Typed from 'typed.js'
    import GitHubCalendar from 'github-calendar'
    // import cssTransitionAndAnimation from "./home/cssTransitionAndAnimation";
    import MdEditor from 'md-editor-v3';
    import 'github-calendar/dist/github-calendar-responsive.css'
    import 'md-editor-v3/lib/style.css';

    import 'swiper/css'
    import 'swiper/css/bundle'

    import './common/styles/index.scss'
    import nestedLines from "./vue3_still_learn/nestedLines";

    export default {
        data() {
            return {
                text: 'hello editor',
                swiperSlideNums: new Array(5),
            }
        },
        mounted() {
            //自动打字
            this.initType();
            //github提交日历
            this.initCalender();
        },
        methods: {
            initType() {
                let typedString = ["大梦一场的", "董二千先生",
                    "推开窗户", " 举起望远镜",
                    "推开窗户", " 举起望远镜",
                    "眼底映出 ", "一阵浓烟",
                    "前已无通路 ", "后不见归途",
                    "敌视现实", " 虚构远方",
                    "东张西望 ", "一无所长",
                    "四体不勤", " 五谷不分",
                    "文不能测字", " 武不能防身",
                    "喜欢养狗 ", "不爱洗头",
                    "不事劳作 ", "一无所获",
                    "厌恶争执", " 不善言说",
                    "终于沦为", "沉默的帮凶",
                    "借酒消愁 ", "不太能喝",
                    "蛊惑他人 ", "麻醉内心",
                    "浇上汽油 ", "舒展眉头",
                    "纵火的青年 ", "迫近的时间",
                    "大梦一场的", "董二千先生",
                    "推开窗户 ", "举起望远镜",
                    "眼底映出 ", "一阵浓烟",
                    "前已无通路 ", "后不见归途"]
                let homeTypedFont = new Typed('.element', {
                    strings: typedString,
                    typeSpeed: 500, //打字速度
                    backSpeed: 10,//回退速度
                });
                return homeTypedFont
            },
            initCalender() {
                GitHubCalendar(".calendar", "ajn404", {responsive: true});
            }
        },
        components: {
            // cssTransitionAndAnimation,
            MdEditor,
            Swiper,
            SwiperSlide,
            nestedLines
        }
    }</script>
<style lang="scss" scoped>
    @import "./common/styles/home.scss";
</style>
