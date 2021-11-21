import ElementPlus from 'element-plus'
import { defineClientAppEnhance } from '@vuepress/client'
export default defineClientAppEnhance(({ app, router, siteData }) => {
    app.use(ElementPlus);
})
