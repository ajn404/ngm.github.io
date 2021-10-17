import { defineUserConfig } from "@vuepress/cli";
import type { DefaultThemeOptions } from "vuepress";

export default defineUserConfig<DefaultThemeOptions>({
  title: "君子慎独",
  description: "老子婆娑",
  base: "/ngm.github.io/",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/images/sword.png",
      },
    ],
  ],
  themeConfig: {
    logo: "/images/logo.png",
    navbar: [
      { text: "首页", link: "/" },
      {
        text: "博客配置",
        children: [{ text: "初识", link: "/vuepress_config" },{ text: "插件", link: "/vuepress_config/plugins" }],
      },
      {
        text: "vue3",
        children: [
          {
            text: "继续看看vue",
            link: "/vue_still_learn",
          },
          {
            text: "webpack摸爬滚打",
            link: "/vue_still_learn/webpack.md",
          },
        ],
      },
      {text:'读书笔记',link:'/reading'}

    ],
    sidebar: "auto",
  },
  plugins: [
    "@vuepress/plugin-toc",
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-nprogress",
  ],
});
