import ElementPlus from 'element-plus'
import * as elIcons from "@element-plus/icons"

import { defineClientAppEnhance } from '@vuepress/client'
export default defineClientAppEnhance(({ app, router, siteData }) => {
    app.use(ElementPlus);
    app.component('bottom',elIcons.Bottom)
})
