const {path} = require('@vuepress/utils')

const resolve = (dir) => {
    return path.resolve(__dirname, dir)
}

export const components = {
    MyDemo: resolve('../components/draft/my-demo.vue'),
    workcal: resolve('../components/draft/workcal.vue'),
    Home: resolve('../components/home.vue'),
    VueStillLearn: resolve('../components/vue3_still_learn/vue-still-learn.vue'),
    NestedLines: resolve('../components/vue3_still_learn/nestedLines.vue'),
    ElementDemo: resolve('../components/element-demo.vue'),
    PixiDemo: resolve('../components/game/pixi-demo.vue'),
    ResponsiveImages: resolve('../components/responsiveImages/index.vue'),
    WaterfallsFlow: resolve('../components/common/components/waterfallsFlow.vue'),
    AEleven: resolve('../components/fantastic/a11.vue'),
    Charts: resolve('../components/fantastic/charts.vue'),
    starField: resolve('../components/fantastic/coding_chanlenges/startField.vue'),
    lSystem: resolve('../components/fantastic/coding_chanlenges/LSystem.vue'),
    selfAvoiding: resolve('../components/fantastic/coding_chanlenges/selfAvoding.vue'),
    elementAnalyze: resolve('../components/sourceCodeAnalyze/index.vue'),
    themeChalk:resolve('../components/sourceCodeAnalyze/components/themeChalk.vue'),
    screenRecord:resolve('../components/fantastic/screenRecord.vue'),
    echartBarDemo:resolve('../../vue_still_learn/static/echart_demo/index.vue'),
    vuexLearn:resolve('../components/vue3_still_learn/vuex_learn.vue'),
    clearState:resolve('../components/vue3_still_learn/clearState.vue'),
    polariod:resolve('../components/collections/css3/polariod.vue'),
    transitionTimingFunction:resolve('../components/collections/css3/transition_timing_function')
};
