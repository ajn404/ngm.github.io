import {defineUserConfig} from "vuepress";
import type {DefaultThemeOptions} from "vuepress";
import {components} from "./config/components";
import {navbarConfig} from "./config/navbar";

export default defineUserConfig<DefaultThemeOptions>({
    title: "君子慎独",
    description: "某只前端开发的自我修养手册",
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
        logoDark:"",
        navbar: navbarConfig,
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
    port:3000,

});
