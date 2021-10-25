const {path} = require('@vuepress/utils')

export const components={
    MyDemo: path.resolve(__dirname, '../components/draft/my-demo.vue'),
    Home: path.resolve(__dirname,'../components/home.vue'),
    VueStillLearn : path.resolve(__dirname,'../components/vue3_still_learn/vue-still-learn.vue'),
    ElementDemo : path.resolve(__dirname,'../components/element-demo'),
    PixiDemo: path.resolve(__dirname,'../components/game/pixi-demo')
};
