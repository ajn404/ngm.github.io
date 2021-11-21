import ElementPlus from 'element-plus'
import { defineClientAppEnhance } from '@vuepress/client'
// import config from 'dotenv'
// console.log(config)
console.log(process.env)
export default defineClientAppEnhance(({ app, router, siteData }) => {
    app.use(ElementPlus);
})
