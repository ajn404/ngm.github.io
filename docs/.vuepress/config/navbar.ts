const home: any = {
    text: "首页",
    link: "/"
}
const menu: any = {
    text :"主流框架学习",
    children:[
        // {
        //     text: 'element-plus图片',
        //     link: '/fantastic/waterfallsFlow'
        // },
        {
            text :"element-plus",
            link: "/ep",
        }
    ]
}

// const config: any = {
//     text: "博客",
//     children: [
//         // {
//         //     text: "插件",
//         //     link: "/vuepress_config/plugins"
//         // },
//         // {
//         //     text: "组件",
//         //     link: "/vuepress_config/components/"
//         // }
//     ],
// };

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
            text: "概述",
            link: "/vuepress_config/"
        },
    ],
};

const note: any = {
    text: '读书',
    link: '/reading/'
}


const others:any={
    text:'探索',
    children:[
        {
            text:'vim',
            link:'/something_help_dev/vim'
        },
        // {
        //     text: 'flex布局',
        //     link: '/style_learn/flex'
        // },
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
        // {
        //     link: '/fantastic/coding_chanlenges/p5_003',
        //     text: 'self-avoiding walk'
        // }
        {
            link:'/alimap/README.md',
            text:'构建知识体系'
        }
    ]
}


export const navbarConfig = [
    home,
    // config,
    front_end,
    note,
    others,
    menu,
]
