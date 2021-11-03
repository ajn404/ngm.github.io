const home: any = {
    text: "首页",
    link: "/"
}
const menu: any = {
    text :"主流框架学习",
    children:[
        {
            text: 'element-plus图片',
            link: '/fantastic/waterfallsFlow'
        },
        {
            text :"element-plus表单元素",
            link: "/ep",
        }
    ]
}

const config: any = {
    text: "博客",
    children: [
        {
            text: "概述",
            link: "/vuepress_config/"
        },
        {
            text: "插件",
            link: "/vuepress_config/plugins"
        },
        {
            text: "组件",
            link: "/vuepress_config/components/"
        }
    ],
};

const front_end = {
    text: "前端(琐碎)",
    children: [
        {
            text: "vue",
            link: "/vue_still_learn/",
        },
        {
            text: "ji技能之string",
            link: "/vue_still_learn/js_skill/string",
        },
        {
            text: "ji技能之object",
            link: "/vue_still_learn/js_skill/object",
        },
        {
            text: "webpack摸爬滚打",
            link: "/vue_still_learn/webpack",
        },
        {
            text: "es6技能之promise",
            link: "/vue_still_learn/js_skill/promise",
        },
    ],
};

const note: any = {
    text: '读书',
    link: '/reading/'
}

const game: any = {
    text: '兴趣',
    link: '/game/pixi-demo'
}

const others:any={
    text:'探索',
    children:[
        {
            text:'关于vim',
            link:'/something_help_dev/vim'
        },
        {
            text: '样式之flex布局',
            link: '/style_learn/flex'
        },
        {
            text:'动画--steven',
            link:'/fantastic/a11'
        },
        {
            text:'图表',
            link:'/something_help_dev/charts'
        },
        {
            link: '/fantastic/coding_chanlenges/p5_001',
            text: '星空(coding train)'
        },
        {
            link: '/fantastic/coding_chanlenges/p5_002',
            text: 'L-system'
        }
    ]
}


export const navbarConfig = [
    home,
    config,
    front_end,
    note,
    game,
    others,
    menu,
]
