### 目录
[[toc]]
### 开始写博客
##### 描述：vuepress2.x+ts学习历程
![🤺](/ngm.github.io/images/sword.png)

### 安装插件

- @vuepress/plugin-toc@next
- @vuepress/plugin-back-to-top@next
- @vuepress/plugin-nprogress@next


### 插入logo
![😀](/ngm.github.io/images/logo.png)
<br>
<strong>配置文件</strong><i>2021/10/13</i>
``` ts
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
        children: [{ text: "初识", link: "/vuepress_config" }],
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
    ],
    sidebar: "auto",
  },
  plugins: [
    "@vuepress/plugin-toc",
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-nprogress",
  ],
});
```

