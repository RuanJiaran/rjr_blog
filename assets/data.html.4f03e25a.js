import{_ as t,o as p,c as e,b as n,d as s,e as o,a as c,r as l}from"./app.908a3111.js";const i={},u=n("h1",{id:"\u7EC4\u4EF6\u7684-data-\u4E3A\u4EC0\u4E48\u662F\u51FD\u6570",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7EC4\u4EF6\u7684-data-\u4E3A\u4EC0\u4E48\u662F\u51FD\u6570","aria-hidden":"true"},"#"),s(" \u7EC4\u4EF6\u7684 data \u4E3A\u4EC0\u4E48\u662F\u51FD\u6570")],-1),r=n("h2",{id:"\u5B9E\u4F8B\u548C\u7EC4\u4EF6\u5B9A\u4E49-data-\u7684\u533A\u522B",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5B9E\u4F8B\u548C\u7EC4\u4EF6\u5B9A\u4E49-data-\u7684\u533A\u522B","aria-hidden":"true"},"#"),s(" \u5B9E\u4F8B\u548C\u7EC4\u4EF6\u5B9A\u4E49 data \u7684\u533A\u522B")],-1),d={href:"https://www.bilibili.com/video/BV1aq4y167Mr?spm_id_from=333.999.0.0&vd_source=c0cb6866911e79b68c9abaeabc75069c",target:"_blank",rel:"noopener noreferrer"},k=c(`<p><strong>vue \u5B9E\u4F8B\u4E2D\u7684 data \u5C5E\u6027\u65E2\u53EF\u4EE5\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A\u51FD\u6570</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5BF9\u8C61\u683C\u5F0F</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u51FD\u6570\u683C\u5F0F</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7EC4\u4EF6\u4E2D\u5B9A\u4E49 data \u5C5E\u6027\uFF0C<code>\u53EA\u80FD\u662F\u4E00\u4E2A\u51FD\u6570</code></strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;component1&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;\u7EC4\u4EF6&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7EC4\u4EF6-data-\u5B9A\u4E49\u51FD\u6570\u4E0E\u5BF9\u8C61\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6-data-\u5B9A\u4E49\u51FD\u6570\u4E0E\u5BF9\u8C61\u7684\u533A\u522B" aria-hidden="true">#</a> \u7EC4\u4EF6 data \u5B9A\u4E49\u51FD\u6570\u4E0E\u5BF9\u8C61\u7684\u533A\u522B</h2><p>\u4E0A\u9762\u8BB2\u5230\u7EC4\u4EF6 data \u5FC5\u987B\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u4E0D\u77E5\u9053\u5927\u5BB6\u6709\u6CA1\u6709\u601D\u8003\u8FC7\u8FD9\u662F\u4E3A\u4EC0\u4E48\u5462\uFF1F</p><p>\u5728\u6211\u4EEC\u5B9A\u4E49\u597D\u4E00\u4E2A\u7EC4\u4EF6\u7684\u65F6\u5019\uFF0Cvue \u6700\u7EC8\u90FD\u4F1A\u901A\u8FC7 Vue.extend()\u6784\u6210\u7EC4\u4EF6\u5B9E\u4F8B</p><p>\u8FD9\u91CC\u6211\u4EEC\u6A21\u4EFF\u7EC4\u4EF6\u6784\u9020\u51FD\u6570\uFF0C\u5B9A\u4E49 data \u5C5E\u6027\uFF0C\u91C7\u7528\u5BF9\u8C61\u7684\u5F62\u5F0F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token class-name">Component</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u521B\u5EFA\u4E24\u4E2A\u7EC4\u4EF6\u5B9E\u4F8B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> componentA <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Component</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> componentB <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Component</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4FEE\u6539 componentA \u7EC4\u4EF6 data \u5C5E\u6027\u7684\u503C\uFF0CcomponentB \u4E2D\u7684\u503C\u4E5F\u53D1\u751F\u4E86\u6539\u53D8</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>componentB<span class="token punctuation">.</span>data<span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token comment">// 0</span>
componentA<span class="token punctuation">.</span>data<span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>componentB<span class="token punctuation">.</span>data<span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EA7\u751F\u8FD9\u6837\u7684\u539F\u56E0\u8FD9\u662F\u4E24\u8005\u5171\u7528\u4E86\u540C\u4E00\u4E2A\u5185\u5B58\u5730\u5740\uFF0CcomponentA \u4FEE\u6539\u7684\u5185\u5BB9\uFF0C\u540C\u6837\u5BF9 componentB \u4EA7\u751F\u4E86\u5F71\u54CD</p><p>\u5982\u679C\u6211\u4EEC\u91C7\u7528\u51FD\u6570\u7684\u5F62\u5F0F\uFF0C\u5219\u4E0D\u4F1A\u51FA\u73B0\u8FD9\u79CD\u60C5\u51B5\uFF08\u51FD\u6570\u8FD4\u56DE\u7684\u5BF9\u8C61\u5185\u5B58\u5730\u5740\u5E76\u4E0D\u76F8\u540C\uFF09</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token class-name">Component</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">data</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4FEE\u6539 componentA \u7EC4\u4EF6 data \u5C5E\u6027\u7684\u503C\uFF0CcomponentB \u4E2D\u7684\u503C\u4E0D\u53D7\u5F71\u54CD</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> componentA <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Component</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> componentB <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Component</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>componentB<span class="token punctuation">.</span>data<span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token comment">// 0</span>
componentA<span class="token punctuation">.</span>data<span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>componentB<span class="token punctuation">.</span>data<span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token comment">// 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vue \u7EC4\u4EF6\u53EF\u80FD\u4F1A\u6709\u5F88\u591A\u4E2A\u5B9E\u4F8B\uFF0C\u91C7\u7528\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A\u5168\u65B0 data \u5F62\u5F0F\uFF0C\u4F7F\u6BCF\u4E2A\u5B9E\u4F8B\u5BF9\u8C61\u7684\u6570\u636E\u4E0D\u4F1A\u53D7\u5230\u5176\u4ED6\u5B9E\u4F8B\u5BF9\u8C61\u6570\u636E\u7684\u6C61\u67D3</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><ul><li>\u6839\u5B9E\u4F8B\u5BF9\u8C61 data \u53EF\u4EE5\u662F\u5BF9\u8C61\u4E5F\u53EF\u4EE5\u662F\u51FD\u6570\uFF08\u6839\u5B9E\u4F8B\u662F\u5355\u4F8B\uFF09\uFF0C\u4E0D\u4F1A\u4EA7\u751F\u6570\u636E\u6C61\u67D3\u60C5\u51B5</li><li>\u7EC4\u4EF6\u5B9E\u4F8B\u5BF9\u8C61<code>data</code>\u5FC5\u987B\u4E3A\u51FD\u6570\uFF0C\u76EE\u7684\u662F\u4E3A\u4E86\u9632\u6B62\u591A\u4E2A\u7EC4\u4EF6\u5B9E\u4F8B\u5BF9\u8C61\u4E4B\u95F4\u5171\u7528\u4E00\u4E2A data\uFF0C\u4EA7\u751F\u6570\u636E\u6C61\u67D3\u3002\u91C7\u7528\u51FD\u6570\u7684\u5F62\u5F0F\uFF0CinitData \u65F6\u4F1A\u5C06\u5176\u4F5C\u4E3A\u5DE5\u5382\u51FD\u6570\u90FD\u4F1A\u8FD4\u56DE\u5168\u65B0 data \u5BF9\u8C61</li></ul>`,21);function v(m,b){const a=l("ExternalLinkIcon");return p(),e("div",null,[u,r,n("p",null,[n("a",d,[s("\u89C6\u9891\u89E3\u6790"),o(a)])]),k])}const h=t(i,[["render",v],["__file","data.html.vue"]]);export{h as default};