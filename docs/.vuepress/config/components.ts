const {path} = require('@vuepress/utils')

export const components = {
    MyDemo: path.resolve(__dirname, '../components/draft/my-demo'),
    Home: path.resolve(__dirname, '../components/home'),
    VueStillLearn: path.resolve(__dirname, '../components/vue3_still_learn/vue-still-learn'),
    NestedLines: path.resolve(__dirname, '../components/vue3_still_learn/nestedLines'),
    ElementDemo: path.resolve(__dirname, '../components/element-demo'),
    PixiDemo: path.resolve(__dirname, '../components/game/pixi-demo'),
    ResponsiveImages: path.resolve(__dirname, '../components/responsiveImages/index'),
    WaterfallsFlow: path.resolve(__dirname, '../components/common/components/waterfallsFlow'),
    AEleven: path.resolve(__dirname, '../components/fantastic/a11'),
    Charts: path.resolve(__dirname, '../components/fantastic/charts'),
    starField: path.resolve(__dirname, '../components/fantastic/coding_chanlenges/startField'),
    lSystem: path.resolve(__dirname, '../components/fantastic/coding_chanlenges/LSystem')
};
