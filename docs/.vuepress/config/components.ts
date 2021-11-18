const {path} = require('@vuepress/utils')

<<<<<<< HEAD
const resolve = (dir)=>{
    return path.resolve(__dirname,dir)
=======
function resolve(dir){
    return path.resolve(__dirname, dir)
>>>>>>> 24b6fdb378343ebfab7392dd11caa17bbaea04d4
}

export const components = {
    MyDemo: resolve('../components/draft/my-demo'),
<<<<<<< HEAD
    workcal: resolve('../components/draft/workcal'),
=======
    workcal: resolve('_../components/draft/workcal'),
>>>>>>> 24b6fdb378343ebfab7392dd11caa17bbaea04d4
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
    selfAvoiding: resolve('../components/fantastic/coding_chanlenges/selfAvoding')
};
