import {defineUserConfig} from "vuepress";
import type {DefaultThemeOptions} from "vuepress";
const {path} = require('@vuepress/utils');
import {components} from "./components";

export default defineUserConfig<DefaultThemeOptions>({
    title: "君子慎独",
    description: "一个前端开发工程师的自我修养",
    base: "/ngm.github.io/",
    head: [
        [
            "link",
            {
                rel: "icon",
                href: "/images/sword.png",
            },
        ],
        [
            "meta",
            {
                name:'baidu-site-verification',
                content:'code-Uv8ovRPETm'
            }
        ]
    ],
    themeConfig: {
        logo: "/images/logo.png",
        navbar: [
            {text: "首页", link: "/"},
            {
                text: "博客配置",
                children: [{text: "初识", link: "/vuepress_config/"}, {
                    text: "插件",
                    link: "/vuepress_config/plugins"
                }, {text: "组件", link: "/vuepress_config/components/"}],
            },
            {
                text: "vue3",
                children: [
                    {
                        text: "继续看看vue",
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
                        text: "webpack摸爬滚打",
                        link: "/vue_still_learn/js_skill/promise",
                    },
                ],
            },
            {text: '读书笔记', link: '/reading/'}

        ],
        sidebar: "auto",
    },
    plugins: [
        "@vuepress/plugin-toc",
        "@vuepress/plugin-back-to-top",
        "@vuepress/plugin-nprogress",
        [
            '@vuepress/register-components',
            {
                components: components,
            },
        ],
    ],
});
