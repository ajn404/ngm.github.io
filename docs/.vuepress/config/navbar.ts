const home: any = {
    text: "首页",
    link: "/"
};
const menu: any = {
    text: "框架学习",
    children: [
        {
            text: "element-plus陈列",
            link: "/ep",
        },
        {
            text: "element-plus源码分析",
            link: "/sourceCodeAnalyze/note",
        }
    ]
};
const front_end:any = {
    text: "前端(琐碎)",
    children: [
        {
            text: "前端代码技巧总结",
            link: "/vue_still_learn/",
        },
        {
            text: "webpack摸爬滚打",
            link: "/vue_still_learn/webpack",
        },
        {
            text: "博客搭建记录",
            link: "/vuepress_config/"
        },
        {
            link: '/alimap/',
            text: '构建知识体系'
        },
        {
            link: '/something_help_dev/leetcode',
            text: '纠结的算法历史'
        },
        {
            link:'/style_learn/style',
            text: 'css细节'
        },
        {
            link:'/vue_still_learn/vuex_learn',
            text:'vuex4.x官方文档学习'
        }
    ],
};
const back_end:any = {
    text:'后端',
    children:[
        {
            text:'Java',
            link:'/back_end_start/java'
        }
    ]
}

const note: any = {
    text: '收藏陈列',
    link: '/reading/'
};
const others: any = {
    text: '玩',
    children: [
        {
            text: 'vim',
            link: '/something_help_dev/vim'
        },
        {
            text: '动画-A13',
            link: '/fantastic/a11'
        },
        {
            text: '图表',
            link: '/something_help_dev/charts'
        },
        {
            link: '/fantastic/coding_chanlenges/p5_001',
            text: 'canvas 星空'
        },
        {
            link: '/fantastic/coding_chanlenges/p5_002',
            text: 'canvas L-system'
        },
        {
            text: 'pixi',
            link: '/game/pixi-demo'
        },
    ]
};
const link:any={
    text:'GitHub',
    link:'https://github.com/ajn404/ngm.github.io'
} 

const resource:any={
    text:'资源导航',
    link:'/resource'
}

const interview:any =  {
    text:'面试总结',
    link:'/interview/'
}
export const navbarConfig = [
    home,
    front_end,
    back_end,
    others,
    menu,
    interview,
    resource,
    link
];
