"use strict";(self.webpackChunkvue_book=self.webpackChunkvue_book||[]).push([[1517],{77170:(e,t,s)=>{s.d(t,{C:()=>l,t:()=>o});var a=s(9669),i=s.n(a);const r=i().create({baseURL:"https://picsum.photos",timeout:5e4});r.interceptors.response.use((e=>e.data));const l=()=>r({url:"/v2/list",method:"Get"}),o=()=>i().create({timeout:5e4,baseURL:"https://api.oick.cn"})({method:"get",url:"/dutang/api.php"})},11517:(e,t,s)=>{s.r(t),s.d(t,{default:()=>u});var a=s(66252);const i=(0,a.Uk)(" 懒加载 ");var r=s(77170),l=s(2262);const o={name:"waterfallsFlow",data:()=>({picList:[],previewList:[]}),created(){},mounted(){(0,r.C)().then((e=>{this.picList=e;let t=[];e.map((e=>{t.push(e.download_url)})),this.previewList=(0,l.iH)(t)}))}},u=(0,s(83744).Z)(o,[["render",function(e,t,s,r,l,o){const u=(0,a.up)("el-image"),c=(0,a.up)("el-main"),n=(0,a.up)("el-container");return(0,a.wg)(),(0,a.j4)(n,null,{default:(0,a.w5)((()=>[(0,a.Wm)(c,{class:"image-box"},{default:(0,a.w5)((()=>[i,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.picList,(e=>((0,a.wg)(),(0,a.j4)(u,{src:e.download_url,key:e.id,"preview-src-list":l.previewList,lazy:""},null,8,["src","preview-src-list"])))),128))])),_:1})])),_:1})}],["__scopeId","data-v-0ab41c0f"]])}}]);