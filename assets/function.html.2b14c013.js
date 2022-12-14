import{_ as n,o as s,c as a,a as e}from"./app.f3d3541e.js";const p={},t=e(`<h1 id="\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570" aria-hidden="true">#</a> \u51FD\u6570</h1><h2 id="\u5B9A\u4E49\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49\u51FD\u6570" aria-hidden="true">#</a> \u5B9A\u4E49\u51FD\u6570 <!-- {docsify-ignore-all} --></h2><blockquote><p>\u6211\u4EEC\u53EF\u4EE5\u7ED9\u6BCF\u4E2A\u53C2\u6570\u6DFB\u52A0\u7C7B\u578B\u4E4B\u540E\u518D\u4E3A\u51FD\u6570\u672C\u8EAB\u6DFB\u52A0\u8FD4\u56DE\u503C\u7C7B\u578B</p></blockquote><p>ts \u4E2D\u6709\u4E24\u79CD\u5B9A\u4E49\u51FD\u6570\u7684\u65B9\u5F0F\uFF0C\u5206\u522B\u662F<code>\u51FD\u6570\u58F0\u660E</code>\u548C<code>\u51FD\u6570\u8868\u8FBE\u5F0F</code></p><h5 id="\u51FD\u6570\u58F0\u660E\u65B9\u5F0F\u5B9A\u4E49\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u58F0\u660E\u65B9\u5F0F\u5B9A\u4E49\u51FD\u6570" aria-hidden="true">#</a> \u51FD\u6570\u58F0\u660E\u65B9\u5F0F\u5B9A\u4E49\u51FD\u6570</h5><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">x</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span><span class="token operator">:</span> number <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="\u51FD\u6570\u8868\u8FBE\u5F0F\u65B9\u5F0F\u5B9A\u4E49\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u8868\u8FBE\u5F0F\u65B9\u5F0F\u5B9A\u4E49\u51FD\u6570" aria-hidden="true">#</a> \u51FD\u6570\u8868\u8FBE\u5F0F\u65B9\u5F0F\u5B9A\u4E49\u51FD\u6570</h5><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u533F\u540D\u51FD\u6570</span>
<span class="token keyword">let</span> <span class="token function-variable function">myAdd</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">x</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span><span class="token operator">:</span> number <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>!&gt;TypeScript \u80FD\u591F\u6839\u636E\u8FD4\u56DE\u8BED\u53E5\u81EA\u52A8\u63A8\u65AD\u51FA\u8FD4\u56DE\u503C\u7C7B\u578B\uFF0C\u56E0\u6B64\u6211\u4EEC\u901A\u5E38\u7701\u7565\u5B83</p><p>\u4E0A\u9762\u51FD\u6570\u8868\u8FBE\u5F0F\u65B9\u5F0F\u5B9A\u4E49\u7684\u51FD\u6570\u7701\u7565\u4E86\u8FD4\u56DE\u503C\u7C7B\u578B\u7684\u5B9A\u4E49\uFF0C\u4E0B\u9762\u6211\u4EEC\u6765\u4E66\u5199\u5B8C\u6574\u51FD\u6570\u7C7B\u578B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u666E\u901A\u51FD\u6570\u5F62\u5F0F</span>
<span class="token keyword">let</span> <span class="token function-variable function">myAdd</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">x</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function-variable function">number</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">x</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span><span class="token operator">:</span> number <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>

<span class="token comment">// \u7BAD\u5934\u51FD\u6570\u5F62\u5F0F</span>
<span class="token keyword">let</span> <span class="token function-variable function">myAdd</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">x</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> number <span class="token operator">=</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter">number</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>

<span class="token comment">// \u4E0B\u9762\u5206\u6B65\u9AA4\u5B9E\u73B0</span>
<span class="token keyword">let</span> <span class="token function-variable function">add</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">x</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> number <span class="token comment">// \u5B9A\u4E49\u51FD\u6570\u7684\u7ED3\u6784</span>

add <span class="token operator">=</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter">number</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5B9A\u4E49\u51FD\u6570</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u51FD\u6570\u7ED3\u6784\u5B9A\u4E49-\u9AD8\u7EA7\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u7ED3\u6784\u5B9A\u4E49-\u9AD8\u7EA7\u7528\u6CD5" aria-hidden="true">#</a> \u51FD\u6570\u7ED3\u6784\u5B9A\u4E49\uFF0C\u9AD8\u7EA7\u7528\u6CD5</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">userType</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">//\u5B9A\u4E49\u51FD\u6570\u53C2\u6570\u7ED3\u6784\u7C7B\u578B</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">userAddFunc</span> <span class="token operator">=</span> <span class="token punctuation">(</span>user<span class="token operator">:</span> userType<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> userType <span class="token comment">//\u5B9A\u4E49\u51FD\u6570\u7ED3\u6784\u7C7B\u578B</span>

<span class="token keyword">let</span> addUser<span class="token operator">:</span> userAddFunc <span class="token operator">=</span> <span class="token punctuation">(</span>u<span class="token operator">:</span> userType<span class="token punctuation">)</span><span class="token operator">:</span> userType <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">//\u5B9A\u4E49\u51FD\u6570</span>
  <span class="token keyword">return</span> u
<span class="token punctuation">}</span>

<span class="token keyword">let</span> ret<span class="token operator">:</span> userType <span class="token operator">=</span> <span class="token function">addUser</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;rjr&#39;</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">22</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// \u8C03\u7528\u51FD\u6570</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span> <span class="token comment">// { name: &#39;rjr&#39;, age: 22 }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53EF\u9009\u53C2\u6570\u548C\u9ED8\u8BA4\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53EF\u9009\u53C2\u6570\u548C\u9ED8\u8BA4\u53C2\u6570" aria-hidden="true">#</a> \u53EF\u9009\u53C2\u6570\u548C\u9ED8\u8BA4\u53C2\u6570</h2><h5 id="\u53EF\u9009\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53EF\u9009\u53C2\u6570" aria-hidden="true">#</a> \u53EF\u9009\u53C2\u6570</h5><p>TypeScript \u91CC\u6211\u4EEC\u53EF\u4EE5\u5728\u53C2\u6570\u540D\u65C1\u4F7F\u7528<code>?</code>\u5B9E\u73B0\u53EF\u9009\u53C2\u6570\u7684\u529F\u80FD\u3002 \u6BD4\u5982\uFF0C\u6211\u4EEC\u60F3\u8BA9 last name \u662F\u53EF\u9009\u7684\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">buildName</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">firstName</span><span class="token operator">:</span> string<span class="token punctuation">,</span> lastName<span class="token operator">?</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>lastName<span class="token punctuation">)</span> <span class="token keyword">return</span> firstName <span class="token operator">+</span> <span class="token string">&#39; &#39;</span> <span class="token operator">+</span> lastName
  <span class="token keyword">else</span> <span class="token keyword">return</span> firstName
<span class="token punctuation">}</span>

<span class="token keyword">let</span> result1 <span class="token operator">=</span> <span class="token function">buildName</span><span class="token punctuation">(</span><span class="token string">&#39;Bob&#39;</span><span class="token punctuation">)</span> <span class="token comment">// works correctly now</span>
<span class="token keyword">let</span> result2 <span class="token operator">=</span> <span class="token function">buildName</span><span class="token punctuation">(</span><span class="token string">&#39;Bob&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Adams&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sr.&#39;</span><span class="token punctuation">)</span> <span class="token comment">// error, too many parameters</span>
<span class="token keyword">let</span> result3 <span class="token operator">=</span> <span class="token function">buildName</span><span class="token punctuation">(</span><span class="token string">&#39;Bob&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Adams&#39;</span><span class="token punctuation">)</span> <span class="token comment">// ah, just right</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="\u9ED8\u8BA4\u503C\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4\u503C\u53C2\u6570" aria-hidden="true">#</a> \u9ED8\u8BA4\u503C\u53C2\u6570</h5><p>!&gt;\u5E26\u9ED8\u8BA4\u503C\u7684\u53C2\u6570\u4E0D\u9700\u8981\u653E\u5728\u5FC5\u987B\u53C2\u6570\u7684\u540E\u9762</p><p>\u5728 TypeScript \u91CC\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u4E3A\u53C2\u6570\u63D0\u4F9B\u4E00\u4E2A\u9ED8\u8BA4\u503C\u5F53\u7528\u6237\u6CA1\u6709\u4F20\u9012\u8FD9\u4E2A\u53C2\u6570\u6216\u4F20\u9012\u7684\u503C\u662F<code>undefined</code>\u65F6</p><p>\u5982\u679C\u5E26\u9ED8\u8BA4\u503C\u7684\u53C2\u6570\u51FA\u73B0\u5728\u5FC5\u987B\u53C2\u6570\u524D\u9762\uFF0C\u7528\u6237\u5FC5\u987B\u660E\u786E\u7684\u4F20\u5165 undefined \u503C\u6765\u83B7\u5F97\u9ED8\u8BA4\u503C\u3002\u4F8B\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">buildName</span><span class="token punctuation">(</span>firstName <span class="token operator">=</span> <span class="token string">&#39;Will&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">lastName</span><span class="token operator">:</span> string<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> firstName <span class="token operator">+</span> <span class="token string">&#39; &#39;</span> <span class="token operator">+</span> lastName
<span class="token punctuation">}</span>

<span class="token keyword">let</span> result1 <span class="token operator">=</span> <span class="token function">buildName</span><span class="token punctuation">(</span><span class="token string">&#39;Bob&#39;</span><span class="token punctuation">)</span> <span class="token comment">// error, too few parameters</span>
<span class="token keyword">let</span> result2 <span class="token operator">=</span> <span class="token function">buildName</span><span class="token punctuation">(</span><span class="token string">&#39;Bob&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Adams&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sr.&#39;</span><span class="token punctuation">)</span> <span class="token comment">// error, too many parameters</span>
<span class="token keyword">let</span> result3 <span class="token operator">=</span> <span class="token function">buildName</span><span class="token punctuation">(</span><span class="token string">&#39;Bob&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Adams&#39;</span><span class="token punctuation">)</span> <span class="token comment">// okay and returns &quot;Bob Adams&quot;</span>
<span class="token keyword">let</span> result4 <span class="token operator">=</span> <span class="token function">buildName</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token string">&#39;Adams&#39;</span><span class="token punctuation">)</span> <span class="token comment">// okay and returns &quot;Will Adams&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5269\u4F59\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u5269\u4F59\u53C2\u6570" aria-hidden="true">#</a> \u5269\u4F59\u53C2\u6570</h2><p>\u5728 TypeScript \u91CC\uFF0C\u4F60\u53EF\u4EE5\u628A\u6240\u6709\u53C2\u6570\u4EE5<code>...</code>\u6536\u96C6\u5230\u4E00\u4E2A\u53D8\u91CF\u91CC</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">buildName</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">firstName</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token operator">...</span>restOfName<span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> firstName <span class="token operator">+</span> <span class="token string">&#39; &#39;</span> <span class="token operator">+</span> restOfName<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> employeeName <span class="token operator">=</span> <span class="token function">buildName</span><span class="token punctuation">(</span><span class="token string">&#39;Joseph&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Samuel&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Lucas&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;MacKinzie&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u7701\u7565\u53F7\u4E5F\u4F1A\u5728\u5E26\u6709\u5269\u4F59\u53C2\u6570\u7684\u51FD\u6570\u7C7B\u578B\u5B9A\u4E49\u4E0A\u4F7F\u7528\u5230\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">buildName</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">firstName</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token operator">...</span>restOfName<span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> firstName <span class="token operator">+</span> <span class="token string">&#39; &#39;</span> <span class="token operator">+</span> restOfName<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> <span class="token function-variable function">buildNameFun</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">fname</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token operator">...</span>rest<span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> string <span class="token operator">=</span> buildName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27),o=[t];function c(r,l){return s(),a("div",null,o)}const u=n(p,[["render",c],["__file","function.html.vue"]]);export{u as default};
