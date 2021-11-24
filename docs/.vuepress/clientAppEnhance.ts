import ElementPlus from 'element-plus'
console.log(ElementPlus)

import { defineClientAppEnhance } from '@vuepress/client'
export default defineClientAppEnhance(({ app, router, siteData }) => {
    app.use(ElementPlus);
})
