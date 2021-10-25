const home: any = {
    text: "首页",
    link: "/"
}
const menu: any = {
    text :"element-plus",
    link: "/ep"
}

const config: any = {
    text: "博客配置",
    children: [
        {
            text: "初识",
            link: "/vuepress_config/"
        },
        {
            text: "插件",
            link: "/vuepress_config/plugins"
        },
        {
            text: "组件", link: "/vuepress_config/components/"
        }
    ],
};

const front_end = {
    text: "前端js相关",
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
    text: '游戏',
    link: '/game/pixi-demo'
}

const others:any={
    text:'其他',
    children:[
        {
            text:'关于vim',
            link:'/something_help_dev/vim'
        }
    ]
}


export const navbarConfig = [
    home,
    menu,
    config,
    front_end,
    note,
    game
]
