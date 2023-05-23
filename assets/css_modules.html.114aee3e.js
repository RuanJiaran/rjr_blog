import{_ as s,o as n,c as a,a as e}from"./app.832893c4.js";const t={},p=e(`<h1 id="\u914D\u7F6E-css-module-\u6A21\u5757\u5316" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-css-module-\u6A21\u5757\u5316" aria-hidden="true">#</a> \u914D\u7F6E css module \u6A21\u5757\u5316</h1><h2 id="\u4FEE\u6539-webpack-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539-webpack-\u914D\u7F6E" aria-hidden="true">#</a> \u4FEE\u6539 webpack \u914D\u7F6E</h2><p>\u4FEE\u6539 config/utils.js</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">getStyleLoaders</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">preProcessor</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span> 
    <span class="token punctuation">{</span>
      <span class="token literal-property property">loader</span><span class="token operator">:</span><span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">options</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">localIdentName</span><span class="token operator">:</span><span class="token string">&#39;[local]_[hash:8]&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    preProcessor
  <span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>Boolean<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5982\u4F55\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u4F7F\u7528" aria-hidden="true">#</a> \u5982\u4F55\u4F7F\u7528</h2><p>\u521B\u5EFA app.less \u6587\u4EF6</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.app_wrap</span><span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span><span class="token string">&#39;yellow&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728 app.tsx \u4E2D\u4F7F\u7528</p><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token keyword">import</span> styles <span class="token keyword">from</span> <span class="token string">&#39;./app.less&#39;</span>

<span class="token operator">...</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>app_wrap<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u89E3\u51B3-eslint-\u68C0\u6D4B-import-styles-from-app-less-\u98D8\u7EA2\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3-eslint-\u68C0\u6D4B-import-styles-from-app-less-\u98D8\u7EA2\u95EE\u9898" aria-hidden="true">#</a> \u89E3\u51B3 eslint \u68C0\u6D4B <code>import styles from &#39;./app.less&#39;</code> \u98D8\u7EA2\u95EE\u9898</h2><p>1.\u521B\u5EFA\u6587\u4EF6 <code>src/type.d.ts</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;*.css&#39;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> classes<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token keyword">readonly</span> <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> classes
<span class="token punctuation">}</span>

<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;*.less&#39;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> classes<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token keyword">readonly</span> <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> classes
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.\u4FEE\u6539 <code>tsconfig.json</code> \u6587\u4EF6</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>...
<span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;./src/**/*&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;type.d.ts&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),l=[p];function i(o,c){return n(),a("div",null,l)}const d=s(t,[["render",i],["__file","css_modules.html.vue"]]);export{d as default};
