import{_ as n,o as s,c as a,a as t}from"./app.f3d3541e.js";const e={},p=t(`<h1 id="like-\u548C-import-\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#like-\u548C-import-\u533A\u522B" aria-hidden="true">#</a> like \u548C @import \u533A\u522B</h1><h5 id="\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u533A\u522B" aria-hidden="true">#</a> \u533A\u522B</h5><ul><li>link \u5C5E\u4E8E html \u6807\u7B7E\u3002@import \u5728 css \u4E2D\u4F7F\u7528\u8868\u793A\u5BFC\u5165\u5916\u90E8\u6837\u5F0F\u8868</li><li>link \u652F\u6301\u4F7F\u7528 javascript \u6539\u53D8\u6837\u5F0F \uFF08<code>document.styleSheets</code>\uFF09\uFF0C\u540E\u8005\u4E0D\u53EF</li><li>\u9875\u9762\u88AB\u52A0\u8F7D\u7684\u65F6\uFF0Clink \u4F1A\u540C\u65F6\u88AB\u52A0\u8F7D\uFF0C\u800C@import \u5F15\u7528\u7684 CSS \u4F1A\u7B49\u5230\u9875\u9762\u88AB\u52A0\u8F7D\u5B8C\u518D\u52A0\u8F7D</li><li>link \u65B9\u5F0F\u7684\u6837\u5F0F\u7684\u6743\u91CD \u9AD8\u4E8E@import \u7684\u6743\u91CD</li><li>import \u53EA\u5728 IE5 \u4EE5\u4E0A\u624D\u80FD\u8BC6\u522B\uFF0C\u800C link \u662F HTML \u6807\u7B7E\uFF0C\u65E0\u517C\u5BB9\u95EE\u9898</li></ul><h5 id="\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7528\u6CD5" aria-hidden="true">#</a> \u7528\u6CD5</h5><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- link\u662F\u6807\u7B7E\uFF0C\u5F15\u5165\u5916\u90E8\u6837\u5F0F\u8868 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./a.css<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token comment">/* @import \u5728css\u73AF\u5883\u4E2D \u5BFC\u5165\u5916\u90E8css */</span>
    <span class="token atrule"><span class="token rule">@import</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;./b.css&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
    <span class="token selector">.box</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
      <span class="token property">background</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),l=[p];function c(i,o){return s(),a("div",null,l)}const r=n(e,[["render",c],["__file","link.html.vue"]]);export{r as default};
