"use strict";(self.webpackChunkvue_book=self.webpackChunkvue_book||[]).push([[2757],{82757:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var n=a(66252),s=a(3577),o=a(9669);const u=a.n(o)().create({baseURL:"https://91.usst.edu.cn",timeout:5e4,withCredentials:!0});u.interceptors.response.use((e=>e.data));const r={name:"workcal",data:()=>({data:{}}),mounted(){try{u({url:"/API/Meet/GetCampusRecruList",method:"Get"}).then((e=>{this.data=e}),(e=>{console.log(e)}))}catch(e){console.log(e)}}},c=(0,a(83744).Z)(r,[["render",function(e,t,a,o,u,r){return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("pre",null,"            "+(0,s.toDisplayString)(u.data)+"\n        ",1)])}]])}}]);