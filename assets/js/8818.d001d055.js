"use strict";(self.webpackChunkvue_book=self.webpackChunkvue_book||[]).push([[8818],{48818:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});var o=a(66252);const n={class:"box"},d=[(e=>((0,o.dD)("data-v-b16f28ce"),e=e(),(0,o.Cn)(),e))((()=>(0,o._)("div",{id:"polar-coordinates-demo"},null,-1)))];var r=a(76258),s=a.n(r);const c={data:()=>({deleteNumber:.03,rotateSpeed:1,color1:"#abcde1",value:.01}),setup(){},created(){},mounted(){document.getElementById("polar-coordinates-demo").innerHTML="",new(s())(this.main,"polar-coordinates-demo")},methods:{main(e){let t=e,a=2*t.PI;t.setup=()=>{t.createCanvas(400,400)},t.draw=()=>{let e=t.map(t.mouseX,0,400,t.PI,.01);t.translate(200,200),t.background(0,10),t.stroke(255),t.strokeWeight(4),t.noFill(),t.beginShape(),e<0&&(e=-e);for(let o=0;o<a;o+=e){let e=150*t.cos(o),a=150*t.sin(o);t.vertex(e,a)}t.endShape(t.CLOSE)}}}},l=(0,a(83744).Z)(c,[["render",function(e,t,a,r,s,c){return(0,o.wg)(),(0,o.iD)("div",n,d)}],["__scopeId","data-v-b16f28ce"]])}}]);