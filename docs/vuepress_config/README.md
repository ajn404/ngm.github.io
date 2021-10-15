### 目录
[[toc]]
### 官方示例
```js
    module.exports = {
  themeConfig: {
    navbar: [
      // NavbarItem
      {
        text: 'Foo',
        link: '/foo/',
      },
      // NavbarGroup
      {
        text: 'Group',
        children: ['/group/foo.md', '/group/bar.md'],
      },
      // 字符串 - 页面文件路径
      '/bar/README.md',
    ],
  },
}
```

### 本项目的自动构建代码
``` yml
# .github/workflows/docs.yml
name: docs

on:
  # 每当 push 到 main 分支时触发部署
  push:
    branches: [main]
  # 手动触发部署
  workflow_dispatch:

jobs:
  docs:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
        with:
          # “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v1
        with:
          # 选择要使用的 node 版本
          node-version: '14'

      # 缓存 node_modules
      - name: Cache dependencies
        uses: actions/cache@v2
        id: yarn-cache
        with:
          path: |
            **/node_modules
          key: ${{ runner.os }}-yarn-${{ hashFiles('**/yarn.lock') }}
          restore-keys: |
            ${{ runner.os }}-yarn-

      # 如果缓存没有命中，安装依赖
      - name: Install dependencies
        if: steps.yarn-cache.outputs.cache-hit != 'true'
        run: yarn --frozen-lockfile

      # 运行构建脚本
      - name: Build VuePress site
        run: yarn docs:build

      # 查看 workflow 的文档来获取更多信息
      # @see https://github.com/crazy-max/ghaction-github-pages
      - name: Deploy to GitHub Pages
        uses: crazy-max/ghaction-github-pages@v2
        with:
          # 部署到 gh-pages 分支
          target_branch: master
          # 部署目录为 VuePress 的默认输出目录
          build_dir: docs/.vuepress/dist
        env:
          # @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
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

