"use strict";(self.webpackChunkvue_book=self.webpackChunkvue_book||[]).push([[6609],{46609:(t,e,o)=>{o.r(e),o.d(e,{default:()=>a});var r=o(66252);const s={class:"box"},i=[(t=>((0,r.dD)("data-v-0dd8165b"),t=t(),(0,r.Cn)(),t))((()=>(0,r._)("div",{id:"slidePuzzle"},null,-1)))];var n=o(76258),l=o.n(n);const h={data:()=>({}),created(){},mounted(){document.getElementById("slidePuzzle").innerHTML="",new(l())(this.main,"slidePuzzle")},methods:{main(t){let e,o,r,s=t,i=400,n=400,l=[],h=[],a=[];function u(t){d(s.floor(s.random(4)),s.floor(s.random(4)),t)}function d(t,e,o){let r=function(){for(let t=0;t<l.length;t++)if(-1==l[t])return t}();(function(t,e,o,r){return(t===o||e===r)&&(1==s.abs(t-o)||1==s.abs(e-r))})(t,e,r%4,s.floor(r/4))&&function(t,e,o){let r=o[t];o[t]=o[e],o[e]=r}(r,t+4*e,o)}s.setup=()=>{s.createCanvas(i,n),e=s.createGraphics(i,n),o=100,r=100;for(let t=0;t<4;t++)for(let e=0;e<4;e++){let i=s.createImage(o,r),n=t+4*e;l.push(n);let a=new f(n,i);h[n]=a}h.pop(),l.pop(),l.push(-1),function(){for(let t=0;t<3;t++)a.push(new c)}(),function(t){for(let e=0;e<1e3;e++)u(t)}(l)},s.mousePressed=()=>{d(s.floor(s.mouseX/o),s.floor(s.mouseY/r),l)},s.draw=()=>{s.background(0),function(){e.background(50);for(let t of a)t.update(),t.show()}(),function(){for(let t=0;t<4;t++)for(let s=0;s<4;s++){let i=s*o,n=t*r,l=t+4*s;h[l]&&h[l].img.copy(e,i,n,o,r,0,0,o,r)}}();for(let t=0;t<4;t++)for(let e=0;e<4;e++){let i=t*o,n=e*r,a=l[t+4*e];if(a>-1){let t=h[a].img;s.image(t,i,n,o,r)}}for(let t=0;t<4;t++)for(let e=0;e<4;e++){let i=t*o,n=e*r;s.strokeWeight(1),s.noFill(),s.rect(i,n,o,r)}(function(){for(let t=0;t<l.length-1;t++)if(l[t]!==h[t].index)return!1;return!0})()&&console.log("SOLVED")};class c{constructor(){this.r=s.random(60,80),this.x=s.random(this.r,i-this.r),this.y=s.random(this.r,n-this.r),this.vx=s.random(-2,2),this.vy=s.random(-2,2),this.color=s.color(s.random(255),s.random(255),s.random(255),100)}show(){e.noFill(),e.stroke(255),e.fill(this.color),e.strokeWeight(2),e.circle(this.x,this.y,2*this.r)}update(){this.x+=this.vx,this.y+=this.vy,(this.x>i-this.r||this.x<this.r)&&(this.vx*=-1),(this.y>n-this.r||this.y<this.r)&&(this.vy*=-1)}}class f{constructor(t,e){this.index=t,this.img=e}}}}},a=(0,o(83744).Z)(h,[["render",function(t,e,o,n,l,h){return(0,r.wg)(),(0,r.iD)("div",s,i)}],["__scopeId","data-v-0dd8165b"]])}}]);