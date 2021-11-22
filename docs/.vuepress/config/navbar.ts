const home: any = {
    text: "首页",
    link: "/"
};
const menu: any = {
    text :"主流框架学习",
    children:[
        {
            text :"element-plus",
            link: "/ep",
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
            link:'/alimap/README.md',
            text:'构建知识体系'
        }
    ],
};
const note: any = {
    text: '收藏陈列',
    link: '/reading/'
};
const others:any={
    text:'探索',
    children:[
        {
            text:'vim',
            link:'/something_help_dev/vim'
        },
        {
            text:'动画-m1',
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
        },
        {
            text: 'pixi',
            link: '/game/pixi-demo'
        },
    ]
};
// const link:any={
//     text:'GitHub',
//     link:'https://github.com/ajn404/ngm.github.io'
// }
export const navbarConfig = [
    home,
    front_end,
    note,
    others,
    menu,
    // link
];
