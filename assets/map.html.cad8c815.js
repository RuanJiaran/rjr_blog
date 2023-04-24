import{_ as s,o as a,c as p,b as n,d as t,a as e}from"./app.908a3111.js";const o="/rjr_blog/img/1719104-20210428151859745-105702474.png",c="/rjr_blog/img/1719104-20210428155029134-829957729.png",l="/rjr_blog/img/1719104-20210428160930636-492498211.png",i="/rjr_blog/img/1719104-20210428163304990-657663839.png",u={},r=n("h1",{id:"map-\u548C-foreach",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#map-\u548C-foreach","aria-hidden":"true"},"#"),t(" map() \u548C forEach()")],-1),k=n("div",{class:"custom-container warning"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8v4"}),n("path",{d:"M12 16h.01"})])]),n("p",{class:"custom-container-title"},"\u4E3B\u8981\u4E0D\u540C"),n("p",null,"forEach() \u65B9\u6CD5\u4E0D\u4F1A\u8FD4\u56DE\u6267\u884C\u7ED3\u679C\uFF0C\u800C\u662F\u8FD4\u56DE undefined\u3002map() \u65B9\u6CD5\u4F1A\u5206\u914D\u5185\u5B58\u7A7A\u95F4\u5B58\u50A8\u65B0\u6570\u7EC4\uFF0C\u5E76\u8FD4\u56DE\u65B0\u6570\u7EC4\u3002"),n("p",null,"forEach \u904D\u5386\u901A\u5E38\u90FD\u662F\u76F4\u63A5\u5F15\u5165\u5F53\u524D\u904D\u5386\u6570\u7EC4\u7684\u5185\u5B58\u5730\u5740\uFF0C\u751F\u6210\u7684\u6570\u7EC4\u7684\u503C\u53D1\u751F\u53D8\u5316\uFF0C\u5F53\u524D\u904D\u5386\u7684\u6570\u7EC4\u5BF9\u5E94\u7684\u503C\u4E5F\u4F1A\u53D1\u751F\u53D8\u5316\u3002map \u904D\u5386\u540E\u7684\u6570\u7EC4\u901A\u5E38\u90FD\u662F\u751F\u6210\u4E00\u4E2A\u65B0\u7684\u6570\u7EC4\uFF0C\u65B0\u7684\u6570\u7EC4\u7684\u503C\u53D1\u751F\u53D8\u5316\uFF0C\u5F53\u524D\u904D\u5386\u7684\u6570\u7EC4\u503C\u4E0D\u4F1A\u53D8\u5316\u3002")],-1),d=n("div",{class:"custom-container info"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"\u5176\u5B83\u7279\u70B9"),n("p",null,"\u533F\u540D\u51FD\u6570\u4E2D\u7684 this \u90FD\u662F\u6307\u5411 window"),n("p",null,"\u90FD\u53EA\u80FD\u904D\u5386\u6570\u7EC4\uFF0Cmap \u7684\u901F\u5EA6\u5927\u4E8E forEach"),n("p",null,"\u6BCF\u6B21\u6267\u884C\u533F\u540D\u51FD\u6570\u90FD\u652F\u6301\u4E09\u4E2A\u53C2\u6570\uFF0C\u53C2\u6570\u5206\u522B\u4E3A item(\u5F53\u524D\u6BCF\u4E00\u9879)\uFF0Cindex(\u7D22\u5F15\u503C)\uFF0Carr(\u539F\u6570\u7EC4)")],-1),m=e(`<h2 id="map-\u7ED3\u5408-filter-\u7EC4\u5408\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#map-\u7ED3\u5408-filter-\u7EC4\u5408\u4F7F\u7528" aria-hidden="true">#</a> map() \u7ED3\u5408 filter() \u7EC4\u5408\u4F7F\u7528</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> arr2 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> num <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> num <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// arr2 = [6, 8, 10]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="map-\u548C-foreach-\u6B63\u786E\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#map-\u548C-foreach-\u6B63\u786E\u7528\u6CD5" aria-hidden="true">#</a> map() \u548C forEach() \u6B63\u786E\u7528\u6CD5</h2><blockquote><p>forEach \u904D\u5386\u901A\u5E38\u90FD\u662F\u76F4\u63A5\u5F15\u5165\u5F53\u524D\u904D\u5386\u6570\u7EC4\u7684\u5185\u5B58\u5730\u5740\uFF0C\u751F\u6210\u7684\u6570\u7EC4\u7684\u503C\u53D1\u751F\u53D8\u5316\uFF0C\u5F53\u524D\u904D\u5386\u7684\u6570\u7EC4\u5BF9\u5E94\u7684\u503C\u4E5F\u4F1A\u53D1\u751F\u53D8\u5316\u3002map \u904D\u5386\u540E\u7684\u6570\u7EC4\u901A\u5E38\u90FD\u662F\u751F\u6210\u4E00\u4E2A\u65B0\u7684\u6570\u7EC4\uFF0C\u65B0\u7684\u6570\u7EC4\u7684\u503C\u53D1\u751F\u53D8\u5316\uFF0C\u5F53\u524D\u904D\u5386\u7684\u6570\u7EC4\u503C\u4E0D\u4F1A\u53D8\u5316\u3002 <strong><em>\u5BF9\u4E8E\u8FD9\u4E00\u70B9\u53EF\u80FD\u5B58\u5728\u7591\u60D1\uFF0C\u6CA1\u5173\u7CFB\uFF0C\u901A\u8FC7\u4E0B\u9762\u6848\u4F8B\u53EF\u4EE5\u8BA9\u4F60\u8C41\u7136\u5F00\u6717\u3002</em></strong></p></blockquote><p>\u8FD9\u91CC\u6211\u4E3A\u4EC0\u4E48\u90FD\u8BF4\u904D\u5386\u540E\u901A\u5E38\u662F\u5F15\u5165\u5F53\u524D\u904D\u5386\u6570\u7EC4\u7684\u5185\u5B58\u5730\u5740\u548C\u751F\u6210\u4E00\u4E2A\u65B0\u7684\u6570\u7EC4\uFF0C\u56E0\u4E3A\u6309 forEach \u548C map \u521B\u4F5C\u601D\u60F3\uFF0CforEach \u904D\u5386\u57FA\u672C\u5F15\u5165\u904D\u5386\u6570\u7EC4\u5185\u5B58\u5730\u5740\u3001map \u904D\u5386\u800C\u662F\u751F\u6210\u4E00\u4E2A\u65B0\u7684\u6570\u7EC4\uFF0C<strong><em>\u4F46\u662F\u6709\u4E9B\u4EBA\u5199\u7684\u65F6\u5019\u4E0D\u6309 map \u548C forEach \u7684\u5E38\u89C4\u8BED\u6CD5\u6765\uFF0C\u5BFC\u81F4\u4F7F\u7528 map \u904D\u5386\u6570\u7EC4\u65F6\uFF0C\u8FD4\u56DE\u7684\u503C\u662F\u76F4\u63A5\u628A\u5F53\u524D\u904D\u5386\u6570\u7EC4\u7684\u6BCF\u4E2A\u5143\u7D20\u7684\u5185\u5B58\u5730\u5740\u7ED9\u4E86\u53E6\u5916\u4E00\u4E2A\u6570\u7EC4\uFF0C\u672C\u8D28\u8FD8\u662F\u5F15\u7528\u904D\u5386\u6570\u7EC4\u4E2D\u6BCF\u4E2A\u5143\u7D20\u7684\u5185\u5B58\u5730\u5740\uFF0C\u8FD9\u6837\u751F\u6210\u7684\u6570\u7EC4\u5DF2\u7ECF\u4E0D\u80FD\u79F0\u4F5C\u4E3A\u4E00\u4E2A\u65B0\u7684\u6570\u7EC4\u540C\u6837\u4E5F\u628A map \u6700\u5927\u7684\u4E00\u4E2A\u7279\u6027\u7ED9\u820D\u5F03\u4E86</em></strong>\uFF0C\u540C\u7406\u5982\u679C map \u548C forEach \u672C\u8D28\u6CA1\u533A\u522B\u7684\u8BDD\uFF0C\u5F00\u53D1\u4EBA\u5458\u6CA1\u5FC5\u8981\u628A\u4ED6\u4EEC\u5C01\u88C5\u6210\u4E24\u4E2A\u51FD\u6570\uFF0C\u5C01\u88C5\u6210\u4E00\u4E2A\u5C31\u597D\u4E86\u3002</p><p>\u4E0B\u9762\u5E26\u7740\u4EE3\u7801\u4E00\u6B65\u6B65\u53D1\u73B0\u771F\u76F8</p><p>\u6848\u4F8B\u4E00\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u96EA\u78A7&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">2.5</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u53EF\u4E50&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">2.5</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> a <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> item<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> b <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> item<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u6253\u5370arr\u6570\u7EC4</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//undefined</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u6253\u5370arr\u6570\u7EC4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+o+`" alt="img"></p><p>\u4ECE\u6848\u4F8B\u4E00\u53EF\u4EE5\u770B\u51FA\u6765\uFF0Cmap \u65B9\u6CD5\u662F\u6709\u8FD4\u56DE\u503C\u7684\uFF0C\u800C forEach \u65B9\u6CD5\u6CA1\u6709\u8FD4\u56DE\u503C\uFF0C\u4F46\u662F\u5982\u679C\u7528 map \u65B9\u6CD5\u60F3\u8BA9 b \u83B7\u53D6 arr \u7684\u6570\u7EC4\u7684\u503C\uFF0C\u4E0D\u5EFA\u8BAE\u6848\u4F8B\u4E00\u4E2D\u7684\u5199\u6CD5\uFF0C\u56E0\u4E3A\u4E0A\u9762\u6211\u4EEC\u5DF2\u7ECF\u8BF4\u5230\u4E86 map \u65B9\u6CD5\u4E3B\u8981\u662F\u751F\u6210\u4E00\u4E2A\u65B0\u7684\u6570\u7EC4\uFF0C\u800C\u4E0D\u662F\u76F4\u63A5\u5F15\u5165 arr \u6570\u7EC4\u5185\u5B58\u5730\u5740\uFF0C\u5982\u679C\u6709\u4E0D\u660E\u767D\u7684\u6211\u4EEC\u6765\u770B\u4E0B\u9762\u7684\u6848\u4F8B\u4F60\u5C31\u4F1A\u61C2\u4E86\u3002</p><p>\u6848\u4F8B\u4E8C\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u96EA\u78A7&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">2.5</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u53EF\u4E50&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">2.5</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> list <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u96EA\u78A7&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">2.5</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u53EF\u4E50&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">2.5</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  a<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> item<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

b <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> item<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+c+`" alt="img"></p><p>\u5230\u8FD9\u91CC\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\uFF0Ca \u548C b \u90FD\u5DF2\u7ECF\u6210\u529F\u7684\u63A5\u6536\u4E86 arr \u548C list \u7684\u6570\u7EC4\u7684\u6570\u636E\uFF0C\u4E0A\u9762\u6211\u4E00\u76F4\u5F3A\u8C03 map \u4E00\u5B9A\u4E0D\u8981\u76F4\u63A5 return item\uFF0C\u8FD9\u91CC\u8FD9\u4E48\u5199\u4E3B\u8981\u662F\u4E3A\u4E86\u8BA9\u4F60\u4EEC\u533A\u5206\u751F\u6210\u65B0\u6570\u7EC4\u548C\u5185\u5B58\u5730\u5740\u7684\u533A\u522B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>price <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>price <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+l+`" alt="img"></p><p>\u4ECE\u8FD9\u91CC\u6211\u4EEC\u770B\u5230\u53EA\u66F4\u6539\u4E86 a \u548C b \u4E2D price \u503C\uFF0C\u4F46\u662F arr \u548C list \u6570\u7EC4 price \u7684\u503C\u4E5F\u53D1\u751F\u4E86\u53D8\u5316\uFF0Carr \u53D1\u751F\u53D8\u5316\u5C5E\u4E8E\u6B63\u5E38\u73B0\u8C61\uFF0C\u56E0\u4E3A\u5728\u4E0A\u8FF0\u4E2D\u5DF2\u7ECF\u8BF4\u8FC7 forEach \u65B9\u6CD5\u904D\u5386\u901A\u5E38\u90FD\u662F\u5F15\u5165\u904D\u5386\u6570\u7EC4\u7684\u5185\u5B58\u5730\u5740\uFF0C\u4E0D\u7BA1\u662F arr \u53D1\u751F\u6539\u53D8\u8FD8\u662F a \u53D1\u751F\u6539\u53D8\uFF0C\u5176\u5B9E\u90FD\u662F\u76F4\u63A5\u6539\u53D8\u540C\u4E00\u4E2A\u5185\u5B58\u5730\u5740\uFF0C\u6240\u4EE5\u4ED6\u4EEC\u7684\u503C\u4F1A\u4E00\u76F4\u540C\u6B65\uFF0C<strong><em>\u4F46\u662F map \u65B9\u6CD5\u4E0D\u662F\u8BF4\u751F\u6210\u7684\u662F\u4E00\u4E2A\u65B0\u7684\u6570\u7EC4\uFF0C\u4E3A\u4EC0\u4E48 b \u7684\u503C\u53D1\u751F\u6539\u53D8\uFF0Clist \u503C\u540C\u6837\u53D1\u751F\u6539\u53D8\u5462</em></strong>\uFF0C\u8FD9\u91CC\u5C31\u662F\u4E0A\u8FF0\u8BF4\u7684\u5185\u5B58\u5730\u5740\u5F15\u5165\u95EE\u9898\u3002</p><h4 id="map-\u7684\u6B63\u786E\u4F7F\u7528\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#map-\u7684\u6B63\u786E\u4F7F\u7528\u65B9\u5F0F" aria-hidden="true">#</a> map \u7684\u6B63\u786E\u4F7F\u7528\u65B9\u5F0F</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>b <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u6B63\u786E\u7528\u6CD5\uFF0C\u8FD4\u56DE\u65B0\u5BF9\u8C61</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> item<span class="token punctuation">.</span>title<span class="token punctuation">,</span>
    <span class="token literal-property property">price</span><span class="token operator">:</span> item<span class="token punctuation">.</span>price<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// \u9519\u8BEF\u7528\u6CD5\uFF0C\u8FD4\u56DE\u7684\u662F\u5BF9\u8C61\u7684\u5730\u5740\u3002\u8FD9\u6837\u7528\u751F\u6210\u7684\u65B0\u5BF9\u8C61\u548C\u539F\u5BF9\u8C61\u76F8\u5F53\u4E8E\u662F\u6D45\u62F7\u8D1D</span>
  <span class="token keyword">return</span> item<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>price <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+i+'" alt="img"></p><p>\u5728\u8FD9\u91CC\u6211\u4EEC\u6539\u53D8\u4E00\u4E0B\u5199\u6CD5\uFF0C\u5C31\u4F1A\u53D1\u73B0\u73B0\u5728\u5728\u6539\u53D8 b \u503C\u7684\uFF0Clist \u7684\u5C31\u4E0D\u4F1A\u53D1\u751F\u53D8\u5316\u4E86\uFF0C\u6848\u4F8B\u4E8C\u4E2D\u6539\u53D8 b \u7684\u503C\uFF0Clist \u7684\u503C\u53D1\u73B0\u53D8\u5316\u662F\u56E0\u4E3A\u867D\u8BF4 map \u904D\u5386\u540E\u751F\u6210\u7684\u662F\u4E00\u4E2A\u65B0\u7684\u6570\u7EC4\uFF0C\u4F46\u662F\u5728\u904D\u5386\u7684\u8FC7\u7A0B\u8FD8\u662F\u5F15\u5165\u65E7\u6570\u7EC4\u7684\u5185\u5BB9\u5730\u5740\uFF0C\u800C\u5728\u6848\u4F8B\u4E09\u4E2D\u6211\u4EEC\u901A\u8FC7 map \u904D\u5386\u7684\u65F6\u5019\u81EA\u5DF1\u5B9A\u4E49\u4E00\u4E0B\u60F3\u8981\u53C2\u6570\u540D\uFF0C\u53EA\u590D\u5236\u4E00\u4E0B\u65E7\u6570\u7EC4\u7684\u503C\uFF0C\u904D\u5386\u5B8C\u540E\u4F1A\u751F\u6210\u65B0\u7684\u5185\u5B58\u7A7A\u95F4\u53BB\u5B58\u50A8 b \u7684\u503C\uFF0C\u6240\u4EE5\u6211\u4EEC\u5728\u6539\u53D8 b \u7684\u503C\u65F6\u5019\u4E5F\u53EA\u662F\u6539\u53D8\u4E86 b \u5185\u5B58\u4E2D\u7684\u503C\uFF0C\u800C\u6CA1\u6709\u6539\u53D8 list \u5185\u5B58\u7684\u503C\uFF0C\u540C\u6837\u7684\u5728\u6539\u53D8 list \u7684\u503C\uFF0Cb \u7684\u503C\u4E5F\u4E0D\u4F1A\u53D1\u73B0\u6539\u53D8\uFF0C\u6240\u4EE5\u8BF4 map \u65B9\u6CD5\u904D\u5386\u540E\u4F1A\u751F\u6210\u4E00\u4E2A\u65B0\u7684\u6570\u7EC4\u3002</p>',21),v=[r,k,d,m];function b(g,h){return a(),p("div",null,v)}const y=s(u,[["render",b],["__file","map.html.vue"]]);export{y as default};