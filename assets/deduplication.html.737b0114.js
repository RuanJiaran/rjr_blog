import{_ as n,o as s,c as a,a as p}from"./app.dcb2b369.js";const t={},e=p(`<h1 id="\u6570\u7EC4\u53BB\u91CD" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u53BB\u91CD" aria-hidden="true">#</a> \u6570\u7EC4\u53BB\u91CD</h1><h2 id="\u65B9\u6CD5\u4E00\u3001set" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u4E00\u3001set" aria-hidden="true">#</a> \u65B9\u6CD5\u4E00\u3001set</h2><p>\u4F7F\u7528 ES6 \u4E2D\u7684 set \u662F\u6700\u7B80\u5355\u7684\u53BB\u91CD\u65B9\u6CD5\u3002\u8BE5\u65B9\u6CD5\u53EF\u4EE5\u8BF4\u662F\u6700\u5B8C\u7F8E\u7684\u65B9\u6CD5\uFF0C\u5C31\u662F\u9700\u8981\u73AF\u5883\u652F\u6301 ES6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token string">&#39;true&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;true&#39;</span><span class="token punctuation">,</span>
  <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token number">15</span><span class="token punctuation">,</span>
  <span class="token number">15</span><span class="token punctuation">,</span>
  <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token keyword">undefined</span><span class="token punctuation">,</span>
  <span class="token keyword">undefined</span><span class="token punctuation">,</span>
  <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token number">NaN</span><span class="token punctuation">,</span>
  <span class="token number">NaN</span><span class="token punctuation">,</span>
  <span class="token string">&#39;NaN&#39;</span><span class="token punctuation">,</span>
  <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token keyword">function</span> <span class="token function">arr_unique</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">]</span>
  <span class="token comment">//\u6216\u8005</span>
  <span class="token comment">//return  Array.from(new Set(arr))</span>
<span class="token punctuation">}</span>
<span class="token function">arr_unique</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token comment">// (13)[1, &quot;true&quot;, true, 15, false, undefined, null, NaN, &quot;NaN&quot;, 0, &quot;a&quot;, {\u2026}, {\u2026}]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u65B9\u6CD5\u4E8C\u3001map-\u6570\u636E\u7ED3\u6784\u53BB\u91CD" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u4E8C\u3001map-\u6570\u636E\u7ED3\u6784\u53BB\u91CD" aria-hidden="true">#</a> \u65B9\u6CD5\u4E8C\u3001Map \u6570\u636E\u7ED3\u6784\u53BB\u91CD</h2><p>\u521B\u5EFA\u4E00\u4E2A\u7A7A Map \u6570\u636E\u7ED3\u6784\uFF0C\u904D\u5386\u9700\u8981\u53BB\u91CD\u7684\u6570\u7EC4\uFF0C\u628A\u6570\u7EC4\u7684\u6BCF\u4E00\u4E2A\u5143\u7D20\u4F5C\u4E3A key \u5B58\u5230 Map \u4E2D\u3002\u7531\u4E8E Map \u4E2D\u4E0D\u4F1A\u51FA\u73B0\u76F8\u540C\u7684 key \u503C\uFF0C\u6240\u4EE5\u6700\u7EC8\u5F97\u5230\u7684\u5C31\u662F\u53BB\u91CD\u540E\u7684\u7ED3\u679C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token string">&#39;true&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;true&#39;</span><span class="token punctuation">,</span>
  <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token number">15</span><span class="token punctuation">,</span>
  <span class="token number">15</span><span class="token punctuation">,</span>
  <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token keyword">undefined</span><span class="token punctuation">,</span>
  <span class="token keyword">undefined</span><span class="token punctuation">,</span>
  <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token number">NaN</span><span class="token punctuation">,</span>
  <span class="token number">NaN</span><span class="token punctuation">,</span>
  <span class="token string">&#39;NaN&#39;</span><span class="token punctuation">,</span>
  <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
<span class="token keyword">function</span> <span class="token function">arr_unique</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> array <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u6570\u7EC4\u7528\u4E8E\u8FD4\u56DE\u7ED3\u679C</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5982\u679C\u6709\u8BE5key\u503C</span>
      map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token comment">// \u5982\u679C\u6CA1\u6709\u8BE5key\u503C</span>
      array<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> array
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">arr_unique</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//(13) [1, &quot;a&quot;, &quot;true&quot;, true, 15, false, 1, {\u2026}, null, NaN, NaN, &quot;NaN&quot;, 0, &quot;a&quot;, {\u2026}, undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),c=[e];function o(l,i){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","deduplication.html.vue"]]);export{r as default};
