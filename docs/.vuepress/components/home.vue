<template>
    <div class="box">
        <span class="element"></span>
        <div class="calendar">
            准备好了吗？
        </div>
        <css-transition-and-animation></css-transition-and-animation>
    </div>
</template>
<script>
    import * as Typed from 'typed.js'
    import GitHubCalendar from 'github-calendar'
    import cssTransitionAndAnimation from "./home/cssTransitionAndAnimation";
    export default {
        mounted() {
            this.initType();
            GitHubCalendar(".calendar", "ajn404", { responsive: true });
        },
        methods: {
            initType() {
                let typedString = ["大梦一场的董二千先生",
                    "推开窗户 举起望远镜",
                    "推开窗户 举起望远镜",
                    "眼底映出 一阵浓烟",
                    "前已无通路 后不见归途",
                    "敌视现实 虚构远方",
                    "东张西望 一无所长",
                    "四体不勤 五谷不分",
                    "文不能测字 武不能防身",
                    "喜欢养狗 不爱洗头",
                    "不事劳作 一无所获",
                    "厌恶争执 不善言说",
                    "终于沦为沉默的帮凶",
                    "借酒消愁 不太能喝",
                    "蛊惑他人 麻醉内心",
                    "浇上汽油 舒展眉头",
                    "纵火的青年 迫近的时间",
                    "大梦一场的董二千先生",
                    "推开窗户 举起望远镜",
                    "眼底映出 一阵浓烟",
                    "前已无通路 后不见归途"]
                let homeTypedFont = new Typed('.element', {
                    strings: typedString,
                    typeSpeed: 500, //打字速度
                    backSpeed: 10,//回退速度
                });
                return homeTypedFont
            }
        },
        components:{
            cssTransitionAndAnimation
        }
    }
    import 'github-calendar/dist/github-calendar-responsive.css'

</script>
<style scoped>
    .box {
        width: 100%;
        min-height: 100vh;
        font-size: 2em;
        font-weight: bold;
        text-align: center;
    }
    .calendar{
        margin-top: 2em;
        border-radius: 10px;
        padding: 10px;
    }

</style>
