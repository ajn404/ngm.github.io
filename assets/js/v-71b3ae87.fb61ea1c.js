"use strict";(self.webpackChunkvue_book=self.webpackChunkvue_book||[]).push([[5642],{71114:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-71b3ae87",path:"/interview/",title:"面试总结",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"css",slug:"css",children:[{level:3,title:"1.1-CSS BFC块级格式上下文",slug:"_1-1-css-bfc块级格式上下文",children:[]},{level:3,title:"1.2-css 盒子模型",slug:"_1-2-css-盒子模型",children:[]}]},{level:2,title:"js",slug:"js",children:[{level:3,title:"1.1-js常规dom操作",slug:"_1-1-js常规dom操作",children:[]},{level:3,title:"1.2-js数组api",slug:"_1-2-js数组api",children:[]},{level:3,title:"1.3-手写reduce",slug:"_1-3-手写reduce",children:[]}]},{level:2,title:"算法",slug:"算法",children:[{level:3,title:"1.1-跳台阶",slug:"_1-1-跳台阶",children:[]}]},{level:2,title:"vue/react",slug:"vue-react",children:[{level:3,title:"1.1-vue和react的区别和优劣",slug:"_1-1-vue和react的区别和优劣",children:[]}]},{level:2,title:"常规基础",slug:"常规基础",children:[{level:3,title:"1.1-",slug:"_1-1",children:[]}]},{level:2,title:"node高级基础",slug:"node高级基础",children:[{level:3,title:"1",slug:"_1",children:[]}]}],filePathRelative:"interview/README.md",git:{updatedTime:1646489987e3,contributors:[{name:"ajn404",email:"nhy1423238345@163.com",commits:4},{name:"ajn404",email:"huiyuening00@gmail.com",commits:1}]}}},31191:(n,s,a)=>{a.r(s),a.d(s,{default:()=>i});var e=a(66252);const t=(0,e.uE)('<h1 id="面试总结" tabindex="-1"><a class="header-anchor" href="#面试总结" aria-hidden="true">#</a> 面试总结</h1><h2 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> css</h2><h3 id="_1-1-css-bfc块级格式上下文" tabindex="-1"><a class="header-anchor" href="#_1-1-css-bfc块级格式上下文" aria-hidden="true">#</a> 1.1-CSS BFC块级格式上下文</h3><div class="custom-container tip"><p class="custom-container-title">创建bfc</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>1.overflow:visiable;除外的\n2.position为absolute或者fixed\n3.float:none;除外的\n4.display:inline-block/table-cell/flex/table-caption/inline-flex;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></div><div class="custom-container tip"><p class="custom-container-title">作用</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>bfc就是页面中独立的容器，容器中的子元素不会影响外部元素\n1.自适应两栏布局\n2.避免margin覆盖\n3.避免高度坍塌\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></div><h3 id="_1-2-css-盒子模型" tabindex="-1"><a class="header-anchor" href="#_1-2-css-盒子模型" aria-hidden="true">#</a> 1.2-css 盒子模型</h3><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="js" tabindex="-1"><a class="header-anchor" href="#js" aria-hidden="true">#</a> js</h2><h3 id="_1-1-js常规dom操作" tabindex="-1"><a class="header-anchor" href="#_1-1-js常规dom操作" aria-hidden="true">#</a> 1.1-js常规dom操作</h3><details class="custom-container details"><summary>查看详情</summary><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>1.获取节点\ngetElementById\ngetElementbyName\ngetElementsByClassName\ngetElementsByTagName\nquerySelector\nquerySelectorAll\n2.获取或设置元素的属性\nsetAttribute\ngetAttribute\n3.创建节点\ncreateElement\ncreateTextNode\ncreateAttribute\n4.增加节点\nappendChild\ninsertBefore\n5.删除节点\nremoveChild\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div></details><h3 id="_1-2-js数组api" tabindex="-1"><a class="header-anchor" href="#_1-2-js数组api" aria-hidden="true">#</a> 1.2-js数组api</h3><details class="custom-container details"><summary>查看详情</summary><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>map,find,foreach,includes...\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></details><h4 id="array-from" tabindex="-1"><a class="header-anchor" href="#array-from" aria-hidden="true">#</a> Array.from()</h4><p>将类似数组的对象或者可遍历的对象转换成真正的数组</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> arrayLike <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token string-property property">&#39;0&#39;</span><span class="token operator">:</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span>\n    <span class="token string-property property">&#39;1&#39;</span><span class="token operator">:</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span>\n    <span class="token string-property property">&#39;2&#39;</span><span class="token operator">:</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">length</span><span class="token operator">:</span><span class="token number">3</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> arr <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>arrayLike<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//es5写法</span>\n<span class="token keyword">var</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arrLike<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\nArray<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;p&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">p</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>p<span class="token punctuation">.</span>style<span class="token punctuation">.</span>outline<span class="token operator">=</span><span class="token string">&#39;1px solid red&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h4 id="array-of" tabindex="-1"><a class="header-anchor" href="#array-of" aria-hidden="true">#</a> Array.of()</h4><p>将一组值转换成数组</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Array<span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//[1,2,3]</span>\n<span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//1,2,3</span>\n\nArray<span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//[3]</span>\n<span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token punctuation">,</span><span class="token punctuation">,</span><span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="实例的find-和findindex" tabindex="-1"><a class="header-anchor" href="#实例的find-和findindex" aria-hidden="true">#</a> 实例的find()和findIndex()</h4><p>找到第一个符合条件的数组成员或数组成员的位置</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span>idx<span class="token punctuation">,</span>arr</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment">// console.log(arguments);</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token keyword">return</span> val<span class="token operator">===</span><span class="token number">1</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="map-filter-fill-includes" tabindex="-1"><a class="header-anchor" href="#map-filter-fill-includes" aria-hidden="true">#</a> map(),filter(),fill(),includes()</h4><h4 id="entries-keys-values" tabindex="-1"><a class="header-anchor" href="#entries-keys-values" aria-hidden="true">#</a> entries(),keys(),values()</h4><h3 id="_1-3-手写reduce" tabindex="-1"><a class="header-anchor" href="#_1-3-手写reduce" aria-hidden="true">#</a> 1.3-手写reduce</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prev<span class="token punctuation">,</span>item</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>prev<span class="token operator">+</span>item<span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token comment">//16</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="算法" tabindex="-1"><a class="header-anchor" href="#算法" aria-hidden="true">#</a> 算法</h2><h3 id="_1-1-跳台阶" tabindex="-1"><a class="header-anchor" href="#_1-1-跳台阶" aria-hidden="true">#</a> 1.1-跳台阶</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 1 1 2 3 5 8 13 21 ...</span>\n\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="vue-react" tabindex="-1"><a class="header-anchor" href="#vue-react" aria-hidden="true">#</a> vue/react</h2><h3 id="_1-1-vue和react的区别和优劣" tabindex="-1"><a class="header-anchor" href="#_1-1-vue和react的区别和优劣" aria-hidden="true">#</a> 1.1-vue和react的区别和优劣</h3>',30),p={href:"https://mp.weixin.qq.com/s/JsTZ-R6tNJaejoEyQxCXOw",target:"_blank",rel:"noopener noreferrer"},l=(0,e.Uk)("公众号前端面试中的总结"),c=(0,e.uE)('<details class="custom-container details"><summary>查看详情</summary><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>1.模版和jsx\n2.状态管理和对象属性\n3.vue本质是mvvm框架，由mvc发展而来；\nreact是前端组件化工具\n。。。\nreact的性能优化需要手动去做，而vue的性能优化是自动的，但是vue的响应式机制也有问题，就是当state特别多的时候，Watcher也会很多，会导致卡顿，所以大型应用（状态特别多的）一般用react，更加可控。\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></details><h2 id="常规基础" tabindex="-1"><a class="header-anchor" href="#常规基础" aria-hidden="true">#</a> 常规基础</h2><h3 id="_1-1" tabindex="-1"><a class="header-anchor" href="#_1-1" aria-hidden="true">#</a> 1.1-</h3><h2 id="node高级基础" tabindex="-1"><a class="header-anchor" href="#node高级基础" aria-hidden="true">#</a> node高级基础</h2><h3 id="_1" tabindex="-1"><a class="header-anchor" href="#_1" aria-hidden="true">#</a> 1</h3>',5),r={},i=(0,a(83744).Z)(r,[["render",function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[t,(0,e._)("p",null,[(0,e._)("a",p,[l,(0,e.Wm)(a)])]),c],64)}]])},83744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);