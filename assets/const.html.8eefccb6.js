import{_ as n,o as s,c as a,a as e}from"./app.f3d3541e.js";const t={},o=e(`<h1 id="\u5E38\u91CF-const" tabindex="-1"><a class="header-anchor" href="#\u5E38\u91CF-const" aria-hidden="true">#</a> \u5E38\u91CF\uFF08const\uFF09</h1><h2 id="const-\u5B9A\u4E49\u5E38\u91CF" tabindex="-1"><a class="header-anchor" href="#const-\u5B9A\u4E49\u5E38\u91CF" aria-hidden="true">#</a> const \u5B9A\u4E49\u5E38\u91CF</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// \u5355\u884C\u5B9A\u4E49</span>
<span class="token keyword">const</span> a <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">100</span>

<span class="token comment">// \u591A\u884C\u5B9A\u4E49</span>
<span class="token keyword">const</span> <span class="token punctuation">(</span>
	b <span class="token operator">=</span> <span class="token string">&quot;rjr&quot;</span>
    c <span class="token operator">=</span> <span class="token boolean">false</span>
    d <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">300</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="iota-\u5173\u952E\u5B57" tabindex="-1"><a class="header-anchor" href="#iota-\u5173\u952E\u5B57" aria-hidden="true">#</a> iota \u5173\u952E\u5B57</h2><p>iota\uFF0C\u7279\u6B8A\u5E38\u91CF\uFF0C\u53EF\u4EE5\u8BA4\u4E3A\u662F\u4E00\u4E2A\u53EF\u4EE5\u88AB\u7F16\u8BD1\u5668\u4FEE\u6539\u7684\u5E38\u91CF\u3002</p><p>iota \u5728 const \u5173\u952E\u5B57\u51FA\u73B0\u65F6\u5C06\u88AB\u91CD\u7F6E\u4E3A 0(const \u5185\u90E8\u7684\u7B2C\u4E00\u884C\u4E4B\u524D)\uFF0Cconst \u4E2D\u6BCF\u65B0\u589E\u4E00\u884C\u5E38\u91CF\u58F0\u660E\u5C06\u4F7F iota \u8BA1\u6570\u4E00\u6B21(iota \u53EF\u7406\u89E3\u4E3A const \u8BED\u53E5\u5757\u4E2D\u7684\u884C\u7D22\u5F15)\u3002</p><p>iota \u53EF\u4EE5\u88AB\u7528\u4F5C\u679A\u4E3E\u503C\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">const</span> <span class="token punctuation">(</span>
	ONE <span class="token operator">=</span> <span class="token boolean">iota</span>  <span class="token comment">// iota=0, ONE=0</span>
    TWO			<span class="token comment">// iota=1, TWO=1</span>
    THREE 		<span class="token comment">// iota=2, THREE=2</span>
<span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
	A <span class="token operator">=</span> <span class="token boolean">iota</span><span class="token operator">*</span><span class="token number">10</span>  <span class="token comment">// A=0</span>
    B			 <span class="token comment">// B=10</span>
<span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
	a<span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token boolean">iota</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token comment">// iota=0,a=1,b=2</span>
	c<span class="token punctuation">,</span> d                      <span class="token comment">// iota=1,a=2,b=3</span>
	e<span class="token punctuation">,</span> f                      <span class="token comment">//iota=2,a=3,b=4</span>
	g<span class="token punctuation">,</span> h <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token boolean">iota</span> <span class="token operator">*</span> <span class="token number">3</span> <span class="token comment">//iota=3,a=6,b=9</span>
	i<span class="token punctuation">,</span> k                      <span class="token comment">//iota=4,a=8,b=12</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF1Aiota \u53EA\u80FD\u914D\u5408 const() \u4F7F\u7528</p>`,9),c=[o];function p(i,l){return s(),a("div",null,c)}const d=n(t,[["render",p],["__file","const.html.vue"]]);export{d as default};
