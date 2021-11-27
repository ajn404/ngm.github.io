const home: any = {
    text: "首页",
    link: "/"
};
const menu: any = {
    text: "主流框架学习",
    children: [
        {
            text: "element-plus",
            link: "/ep",
        },
        {
            text: "element-plus源码分析",
            link: "/sourceCodeAnalyze/note",
        }
    ]
};
const front_end = {
    text: "前端(琐碎)",
    children: [
        {
            text: "代码技巧总结",
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
const note: any = {
    text: '收藏陈列',
    link: '/reading/'
};
const others: any = {
    text: '探索',
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
            text: '星空(coding train)'
        },
        {
            link: '/fantastic/coding_chanlenges/p5_002',
            text: 'L-system'
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
export const navbarConfig = [
    home,
    front_end,
    others,
    menu,
    note,
    link
];
