import{_ as n,o as s,c as a,a as t}from"./app.c4ba29fa.js";const e={},p=t(`<h1 id="\u9762\u5411\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u9762\u5411\u5BF9\u8C61" aria-hidden="true">#</a> \u9762\u5411\u5BF9\u8C61</h1><h2 id="\u7C7B\u7684\u8868\u793A" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u7684\u8868\u793A" aria-hidden="true">#</a> \u7C7B\u7684\u8868\u793A</h2><p>\u8868\u793A\u4E00\u4E2A\u7C7B\u4EE5\u53CA\u4E00\u4E2A\u65B9\u6CD5\u7684\u65B9\u5F0F\u4E3A\uFF1A\u7ED3\u6784\u4F53 + \u65B9\u6CD5</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">type</span> Hero <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Name <span class="token builtin">string</span>
    Ad <span class="token builtin">int</span>
    Level <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5FC5\u987B\u7528 *Hero \u7C7B\u578B\uFF0C\u5426\u5219\u521D\u59CB\u5316\u7684\u662F\u4E00\u4E2AHero\u4E34\u65F6\u5BF9\u8C61</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>h <span class="token operator">*</span>Hero<span class="token punctuation">)</span> <span class="token function">SetName</span><span class="token punctuation">(</span>newName <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    h<span class="token punctuation">.</span>Name <span class="token operator">=</span> newName
<span class="token punctuation">}</span>

<span class="token comment">// \u6700\u597D\u4E5F\u7528 * \u7C7B\u578B\uFF0C\u53EF\u514D\u53BB\u62F7\u8D1D\u5F00\u9500</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>h <span class="token operator">*</span>Hero<span class="token punctuation">)</span> <span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> h<span class="token punctuation">.</span>Name
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5C01\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5C01\u88C5" aria-hidden="true">#</a> \u5C01\u88C5</h2><p>\u7ED3\u6784\u4F53\u540D\u3001\u7ED3\u6784\u4F53\u5143\u7D20\u540D\u6216\u8005\u65B9\u6CD5\u540D\u7684\u9996\u5B57\u6BCD\u5927\u5199\uFF0C\u5219\u5176\u4ED6\u5305\u4E5F\u80FD\u591F\u8BBF\u95EE\uFF0C\u5426\u5219\u53EA\u80FD\u5728\u672C\u5305\u4E2D\u8BBF\u95EE\u3002\u8FD9\u4E5F\u6070\u597D\u89E3\u91CA\u4E86\u4E3A\u4EC0\u4E48\u4F7F\u7528fmt.Println()\u65F6P\u8981\u5927\u5199\u4E86\uFF01</p><h2 id="\u7EE7\u627F\u6A21\u62DF" tabindex="-1"><a class="header-anchor" href="#\u7EE7\u627F\u6A21\u62DF" aria-hidden="true">#</a> \u7EE7\u627F\u6A21\u62DF</h2><p>go \u6CA1\u6709\u7EE7\u627F\uFF0C\u4F46\u662F\u53EF\u4EE5\u7528\u8BED\u6CD5\u7CD6\u6A21\u62DF\u7EE7\u627F\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">type</span> Human <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	name <span class="token builtin">string</span>
	sex  <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>h Human<span class="token punctuation">)</span> <span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>h<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token string">&quot;is running&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> SuperMan <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Human <span class="token comment">// SuperMan\u7C7B\u7EE7\u627F\u4E86Human\u7C7B\u7684\u65B9\u6CD5</span>

	level <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> s SuperMan
	s<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;li4&quot;</span> <span class="token comment">// \u8BED\u6CD5\u7CD6\uFF0C\u7B49\u4EF7\u4E8E s.Human.name</span>
	s<span class="token punctuation">.</span>sex <span class="token operator">=</span> <span class="token string">&quot;male&quot;</span>
	s<span class="token punctuation">.</span>level <span class="token operator">=</span> <span class="token number">88</span>
    s<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u8BED\u6CD5\u7CD6\uFF0C\u7B49\u4EF7\u4E8E s.Human.Run()</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u591A\u6001\u6A21\u62DF" tabindex="-1"><a class="header-anchor" href="#\u591A\u6001\u6A21\u62DF" aria-hidden="true">#</a> \u591A\u6001\u6A21\u62DF</h2><p>\u4EC0\u4E48\u662F\u591A\u6001\uFF1F</p><p>\u76F8\u540C\u7684\u6D88\u606F\u53D1\u9001\u7ED9\u4E0D\u540C\u7684\u5BF9\u8C61\uFF0C\u7CFB\u7EDF\u6839\u636E\u5BF9\u8C61\u6240\u5C5E\u7C7B\u522B\uFF0C\u5F15\u53D1\u4E0D\u540C\u5BF9\u8C61\u4EA7\u751F\u4E0D\u540C\u7684\u884C\u4E3A\u3002</p><p>golang \u5982\u4F55\u5B9E\u73B0\u591A\u6001\uFF1F</p><p>\u4F7F\u7528 <strong>\u63A5\u53E3 + \u7ED3\u6784\u4F53</strong> \u65B9\u6CD5\u6765\u5B9E\u73B0\u591A\u6001\u3002</p><p>\u6BD4\u5982\u5B9A\u4E49\u4E00\u4E2A Animal \u6709 eat() \u548C color() \uFF0C\u901A\u8FC7\u4E0D\u540C\u7684\u7ED3\u6784\u4F53\u5B9E\u73B0 eat() \u548C color() \u6765\u5B9A\u4E49\u4E0D\u540C\u7684\u52A8\u7269\uFF0C\u4E14\u5177\u6709\u4E0D\u540C\u7684 eat() \u548C color() \u5B9E\u73B0\u65B9\u5F0F\u3002\u63A5\u53E3\u7684\u6570\u636E\u7C7B\u578B\u4E3A\u7236\u7C7B\u6307\u9488\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">type</span> Animal <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Cat <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Dog <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>Cat<span class="token punctuation">)</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;cat &quot;</span> <span class="token operator">+</span> c<span class="token punctuation">.</span>Name <span class="token operator">+</span> <span class="token string">&quot; is eating fish&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>d <span class="token operator">*</span>Dog<span class="token punctuation">)</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;dog &quot;</span> <span class="token operator">+</span> d<span class="token punctuation">.</span>Name <span class="token operator">+</span> <span class="token string">&quot; is eating bone&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// animal\u7684\u672C\u8D28\u662F\u4E00\u4E2A\u6307\u9488</span>
<span class="token keyword">func</span> <span class="token function">showAnimal</span><span class="token punctuation">(</span>animal Animal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	animal<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> animal Animal <span class="token comment">// \u63A5\u53E3\u7684\u6570\u636E\u7C7B\u578B\u4E3A\u201C\u7236\u7C7B\u6307\u9488\u201D</span>

	animal <span class="token operator">=</span> <span class="token operator">&amp;</span>Cat<span class="token punctuation">{</span><span class="token string">&quot;FuGui&quot;</span><span class="token punctuation">}</span>
	animal<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	animal <span class="token operator">=</span> <span class="token operator">&amp;</span>Dog<span class="token punctuation">{</span><span class="token string">&quot;WangCai&quot;</span><span class="token punctuation">}</span>
	animal<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	cat <span class="token operator">:=</span> Cat<span class="token punctuation">{</span><span class="token string">&quot;FuGuiPig&quot;</span><span class="token punctuation">}</span>
	<span class="token function">showAnimal</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>cat<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),i=[p];function c(o,l){return s(),a("div",null,i)}const d=n(e,[["render",c],["__file","class.html.vue"]]);export{d as default};
