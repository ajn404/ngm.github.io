const home: any = {
    text: "首页",
    link: "/"
}
const menu: any = {
    text :"element-plus",
    children:[
        {
            text: '图片',
            link: '/fantastic/waterfallsFlow'
        },
        {
            text :"表单元素",
            link: "/ep",
        }
    ]
}

const config: any = {
    text: "配置",
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
    text: "前端",
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
    text: '读书笔记',
    link: '/reading/'
}

const game: any = {
    text: 'h5游戏',
    link: '/game/pixi-demo'
}

const others:any={
    text:'其他',
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
        }
    ]
}


export const navbarConfig = [
    home,
    menu,
    config,
    front_end,
    note,
    game,
    others
]
