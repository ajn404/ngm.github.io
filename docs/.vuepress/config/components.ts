const {path} = require('@vuepress/utils')

const resolve = (dir) => {
    return path.resolve(__dirname, dir)
}

export const components = {
    MyDemo: resolve('../components/draft/my-demo'),
    workcal: resolve('../components/draft/workcal'),
    Home: resolve('../components/home'),
    VueStillLearn: resolve('../components/vue3_still_learn/vue-still-learn'),
    NestedLines: resolve('../components/vue3_still_learn/nestedLines'),
    ElementDemo: resolve('../components/element-demo'),
    PixiDemo: resolve('../components/game/pixi-demo'),
    ResponsiveImages: resolve('../components/responsiveImages/index'),
    WaterfallsFlow: resolve('../components/common/components/waterfallsFlow'),
    AEleven: resolve('../components/fantastic/a11'),
    Charts: resolve('../components/fantastic/charts'),
    starField: resolve('../components/fantastic/coding_chanlenges/startField'),
    lSystem: resolve('../components/fantastic/coding_chanlenges/LSystem'),
    selfAvoiding: resolve('../components/fantastic/coding_chanlenges/selfAvoding'),
    elementAnalyze: resolve('../components/sourceCodeAnalyze/index'),
    themeChalk:resolve('../components/sourceCodeAnalyze/components/themeChalk'),
    collectionEle:resolve('../components/collections/index.vue')
};
