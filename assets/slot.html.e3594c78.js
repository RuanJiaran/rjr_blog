import{_ as n,o as s,c as a,a as t}from"./app.c4ba29fa.js";const p={},e=t(`<h1 id="\u63D2\u69FD" tabindex="-1"><a class="header-anchor" href="#\u63D2\u69FD" aria-hidden="true">#</a> \u63D2\u69FD</h1><h2 id="\u533F\u540D\u63D2\u69FD" tabindex="-1"><a class="header-anchor" href="#\u533F\u540D\u63D2\u69FD" aria-hidden="true">#</a> \u533F\u540D\u63D2\u69FD</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token comment">// \u5B9A\u4E49\u7EC4\u4EF6componentOne</span>
<span class="token keyword">const</span> compoentOne <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
        &lt;div :style=&quot;style1&quot;&gt;
            &lt;slot&gt;&lt;/slot&gt; // \u5B9A\u4E49\u63D2\u69FD
        &lt;/div&gt;
    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">style1</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;200px&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&#39;200px&#39;</span>
                <span class="token literal-property property">border</span><span class="token operator">:</span> <span class="token string">&#39;1px solid #ccc&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8C03\u7528\u7EC4\u4EF6</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">ComOne</span><span class="token operator">:</span> componentOne<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#id&#39;</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">val1</span><span class="token operator">:</span> <span class="token string">&#39;123&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
        &lt;div&gt;
            &lt;com-one&gt;
                &lt;span&gt;{{val1}}&lt;/span&gt; // \u4F7F\u7528\u63D2\u69FD
            &lt;/com-one&gt;
        &lt;/div&gt;
    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5177\u540D\u63D2\u69FD" tabindex="-1"><a class="header-anchor" href="#\u5177\u540D\u63D2\u69FD" aria-hidden="true">#</a> \u5177\u540D\u63D2\u69FD</h2><p>\u7ED9\u5177\u4F53\u7684\u63D2\u69FD\u547D\u540D\uFF0C\u5E76\u5728\u4F7F\u7528\u7684\u65F6\u5019\u4F20\u5165\u63D2\u69FD\u7684\u540D\u79F0</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token comment">// \u5B9A\u4E49\u7EC4\u4EF6componentOne</span>
<span class="token keyword">const</span> compoentOne <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
        &lt;div :style=&quot;style1&quot;&gt;
            &lt;div&gt;
                &lt;slot name=&quot;header&quot;&gt;&lt;/slot&gt; // \u5B9A\u4E49\u4E00\u4E2A\u540D\u79F0\u4E3Aheader\u7684\u63D2\u69FD
            &lt;/div&gt;
            &lt;div&gt;
                &lt;slot name=&quot;body&quot;&gt;&lt;/slot&gt; // \u5B9A\u4E49\u4E00\u4E2A\u540D\u79F0\u4E3Abody\u7684\u63D2\u69FD
            &lt;/div&gt;
        &lt;/div&gt;
    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">style1</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;200px&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&#39;200px&#39;</span>
                <span class="token literal-property property">border</span><span class="token operator">:</span> <span class="token string">&#39;1px solid #ccc&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8C03\u7528\u7EC4\u4EF6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">ComOne</span><span class="token operator">:</span> componentOne<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#id&#39;</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">val1</span><span class="token operator">:</span> <span class="token string">&#39;123&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">val2</span><span class="token operator">:</span> <span class="token string">&#39;456&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
        &lt;div&gt;
            &lt;com-one&gt;
                &lt;span slot=&quot;header&quot;&gt;{{val1}}&lt;/span&gt; // \u4F7F\u7528\u63D2\u69FD&#39;header**\u91CD\u70B9\u5185\u5BB9**&#39;
                &lt;span slot=&quot;body&quot;&gt;{{val2}}&lt;/span&gt; // \u4F7F\u7528\u63D2\u69FD&#39;body&#39;
            &lt;/com-one&gt;
        &lt;/div&gt;
    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F5C\u7528\u57DF\u63D2\u69FD" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u7528\u57DF\u63D2\u69FD" aria-hidden="true">#</a> \u4F5C\u7528\u57DF\u63D2\u69FD</h2><p>\u5C06\u5B9A\u4E49\u63D2\u69FD\u7684\u53D8\u91CF\u4F7F\u7528\u5230\u63D2\u69FD\u4E2D\uFF0C\u63D2\u69FD\u5185\u53EF\u4EE5\u4F7F\u7528\u63D2\u69FD\u5B9A\u4E49\u7684\u53D8\u91CF</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token comment">// \u5B9A\u4E49\u7EC4\u4EF6componentOne</span>
<span class="token keyword">const</span> compoentOne <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
        &lt;div :style=&quot;style1&quot;&gt;
            &lt;slot :aa=&quot;val1&quot; :bb=&quot;val2&quot;&gt;&lt;/slot&gt; // \u7ED9\u63D2\u69FD\u4F20\u5165\u53D8\u91CF
        &lt;/div&gt;
    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">style1</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;200px&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&#39;200px&#39;</span>
                <span class="token literal-property property">border</span><span class="token operator">:</span> <span class="token string">&#39;1px solid #ccc&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">val1</span><span class="token operator">:</span> <span class="token string">&#39;slot1&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">val2</span><span class="token operator">:</span> <span class="token string">&#39;slot2&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8C03\u7528</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u8C03\u7528\u7EC4\u4EF6</span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">ComOne</span><span class="token operator">:</span> componentOne<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#id&#39;</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">val1</span><span class="token operator">:</span> <span class="token string">&#39;123&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
        &lt;div&gt;
            &lt;com-one&gt;
                &lt;span slot-scope=&quot;props&quot;&gt;{{props.aa}}{{props.bb}}{{val1}}&lt;/span&gt; // \u5B9A\u4E49\u63D2\u69FD\u4F20\u5165\u7684\u5BF9\u8C61props,\u5E76\u4F7F\u7528
            &lt;/com-one&gt;
        &lt;/div&gt;
    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>!&gt;vue2.6 \u4EE5\u540E\u5BF9\u5177\u540D\u63D2\u69FD\u548C\u4F5C\u7528\u57DF\u63D2\u69FD\u505A\u4E86\u4FEE\u6539\uFF0C\u4F46\u4EFB\u7136\u6CA1\u6709\u5E9F\u5F03\u4E4B\u524D\u8BED\u6CD5</p><h2 id="\u5177\u540D\u63D2\u69FD-2-6-\u4EE5\u540E" tabindex="-1"><a class="header-anchor" href="#\u5177\u540D\u63D2\u69FD-2-6-\u4EE5\u540E" aria-hidden="true">#</a> \u5177\u540D\u63D2\u69FD\uFF082.6 \u4EE5\u540E\uFF09</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    {{ age }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>footer<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
      //\u8FD9\u91CCname\u7684\u503C\u5C31\u662F\u8FD9\u4E2A\u63D2\u69FD\u7684\u540D\u79F0\u3002
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

// \u8C03\u7528
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyFooter</span><span class="token punctuation">&gt;</span></span>
  //\u8FD9\u91CCv-slot\uFF1A\u540E\u8FB9\u7684\u503C\u4E0E\u7EC4\u4EF6\u5185\u7684slot\u7684name\u5C5E\u6027\u5BF9\u5E94\uFF0C\u4E5F\u5C31\u662F\u63D2\u69FD\u7684\u540D\u79F0\u3002
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>footer</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>list<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MyFooter</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F5C\u7528\u57DF\u63D2\u69FD-vue2-6-\u4EE5\u540E" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u7528\u57DF\u63D2\u69FD-vue2-6-\u4EE5\u540E" aria-hidden="true">#</a> \u4F5C\u7528\u57DF\u63D2\u69FD\uFF08vue2.6 \u4EE5\u540E\uFF09</h2><p>\u4F5C\u7528\u57DF\u63D2\u69FD\u7684\u4E3B\u8981\u4F5C\u7528\u662F\u5728\u4E66\u5199\u63D2\u69FD\u5185\u5BB9\u65F6\u53EF\u4EE5\u83B7\u53D6\u5230\u63D2\u69FD\u4F5C\u7528\u57DF\u7684\u503C</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>footer<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:aa</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

//\u8C03\u7528
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>myli</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>footer</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>message<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>{{message.aa}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>myli</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),l=[e];function o(i,c){return s(),a("div",null,l)}const r=n(p,[["render",o],["__file","slot.html.vue"]]);export{r as default};
