import{_ as e,o,c,b as n,d as s,e as p,a as t,r as l}from"./app.f3d3541e.js";const u="/rjr_blog/img/20200909203030707.gif",i="/rjr_blog/img/20200909202344100.gif",r="/rjr_blog/img/20200909202034169.png",k={},d=n("h1",{id:"\u6570\u7EC4\u6392\u5E8F",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6570\u7EC4\u6392\u5E8F","aria-hidden":"true"},"#"),s(" \u6570\u7EC4\u6392\u5E8F")],-1),m=n("h2",{id:"\u5192\u6CE1\u6392\u5E8F",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5192\u6CE1\u6392\u5E8F","aria-hidden":"true"},"#"),s(" \u5192\u6CE1\u6392\u5E8F")],-1),v={href:"https://so.csdn.net/so/search?q=%E6%95%B0%E7%BB%84&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},b=t('<p><img src="'+u+`" alt="img"></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">MaoPaoSort</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u628A\u5927\u7684\u6570\u5B57\u653E\u5230\u540E\u9762</span>
        <span class="token keyword">var</span> str <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
        arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span>
        arr<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> str
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>
<span class="token comment">//console.log(arr);[3,5,1,2,7,8,4,5,3,4];</span>
<span class="token function">MaoPaoSort</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
<span class="token comment">//console.log(arr);[1, 2, 3, 3, 4, 4, 5, 5, 7, 8]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u63D2\u961F\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u63D2\u961F\u6392\u5E8F" aria-hidden="true">#</a> \u63D2\u961F\u6392\u5E8F</h2><p>\u5C06\u8981\u6392\u5E8F\u7684\u6570\u7EC4\u5206\u6210\u4E24\u90E8\u5206\uFF0C\u6BCF\u6B21\u4ECE\u540E\u9762\u7684\u90E8\u5206\u53D6\u51FA\u7D22\u5F15\u6700\u5C0F\u7684\u5143\u7D20\u63D2\u5165\u5230\u524D\u4E00\u90E8\u5206\u7684\u9002\u5F53\u4F4D\u7F6E</p><p><img src="`+i+`" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p><ul><li>\u4ECE\u7B2C\u4E00\u4E2A\u5143\u7D20\u5F00\u59CB\uFF0C\u8BE5\u5143\u7D20\u53EF\u4EE5\u8BA4\u4E3A\u5DF2\u7ECF\u88AB\u6392\u5E8F\uFF1B</li><li>\u53D6\u51FA\u4E0B\u4E00\u4E2A\u5143\u7D20\uFF0C\u5728\u5DF2\u7ECF\u6392\u5E8F\u7684\u5143\u7D20\u5E8F\u5217\u4E2D\u4ECE\u540E\u5411\u524D\u626B\u63CF\uFF1B</li><li>\u5982\u679C\u8BE5\u5143\u7D20\uFF08\u5DF2\u6392\u5E8F\uFF09\u5927\u4E8E\u65B0\u5143\u7D20\uFF0C\u5C06\u8BE5\u5143\u7D20\u79FB\u5230\u4E0B\u4E00\u4F4D\u7F6E\uFF1B</li><li>\u91CD\u590D\u6B65\u9AA4 3\uFF0C\u76F4\u5230\u627E\u5230\u5DF2\u6392\u5E8F\u7684\u5143\u7D20\u5C0F\u4E8E\u6216\u8005\u7B49\u4E8E\u65B0\u5143\u7D20\u7684\u4F4D\u7F6E\uFF1B</li><li>\u5C06\u65B0\u5143\u7D20\u63D2\u5165\u5230\u8BE5\u4F4D\u7F6E\u540E\uFF1B</li><li>\u91CD\u590D\u6B65\u9AA4 2~5\u3002</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">InsertSort</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length
  <span class="token keyword">let</span> preIndex<span class="token punctuation">,</span> current
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    preIndex <span class="token operator">=</span> i <span class="token operator">-</span> <span class="token number">1</span>
    current <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>preIndex <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> current <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>preIndex<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      arr<span class="token punctuation">[</span>preIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>preIndex<span class="token punctuation">]</span>
      preIndex<span class="token operator">--</span>
    <span class="token punctuation">}</span>
    arr<span class="token punctuation">[</span>preIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> current
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>

<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">56</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">78</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">42</span><span class="token punctuation">,</span> <span class="token number">37</span><span class="token punctuation">]</span>
<span class="token function">InsertSort</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5FEB\u901F\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u6392\u5E8F" aria-hidden="true">#</a> \u5FEB\u901F\u6392\u5E8F</h2>`,8),h={href:"https://so.csdn.net/so/search?q=%E9%81%8D%E5%8E%86&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"\u5FEB\u901F\u6392\u5E8F\u5BF9\u5192\u6CE1\u6392\u5E8F\u7684\u4E00\u79CD\u6539\u8FDB",-1),g=t('<p><img src="'+r+`" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p><p>\u5B9E\u73B0\u601D\u8DEF\u662F\uFF0C\u5C06\u4E00\u4E2A\u6570\u7EC4\u7684\u6392\u5E8F\u95EE\u9898\u770B\u6210\u662F\u4E24\u4E2A\u5C0F\u6570\u7EC4\u7684\u6392\u5E8F\u95EE\u9898\uFF0C\u4EE5\u4E00\u4E2A\u6570\u4E3A\u57FA\u51C6(\u4E2D\u95F4\u7684\u6570)\uFF0C\u6BD4\u57FA\u51C6\u5C0F\u7684\u653E\u5230\u5DE6\u8FB9\uFF0C\u6BD4\u57FA\u51C6\u5927\u7684\u653E\u5230\u53F3\u8FB9\uFF0C\u800C\u6BCF\u4E2A\u5C0F\u7684\u6570\u7EC4\u53C8\u53EF\u4EE5\u7EE7\u7EED\u770B\u6210\u66F4\u5C0F\u7684\u4E24\u4E2A\u6570\u7EC4\uFF0C\u4E00\u76F4\u9012\u5F52\u4E0B\u53BB\uFF0C\u76F4\u5230\u6570\u7EC4\u957F\u5EA6\u5927\u5C0F\u6700\u5927\u4E3A 2\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">quickSort</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//\u5982\u679C\u6570\u7EC4\u957F\u5EA6\u5C0F\u4E8E1\uFF0C\u6CA1\u5FC5\u8981\u6392\u5E8F\uFF0C\u76F4\u63A5\u8FD4\u56DE</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> arr
  <span class="token comment">//pivot \u57FA\u51C6\u7D22\u5F15\uFF0C\u957F\u5EA6\u7684\u4E00\u534A</span>
  <span class="token keyword">let</span> pivotIndex <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">//\u5947\u6570\u9879\u5411\u4E0B\u53D6\u6574</span>
  <span class="token comment">//\u627E\u5230\u57FA\u51C6\uFF0C\u628A\u57FA\u51C6\u9879\u4ECE\u539F\u6570\u7EC4\u5220\u9664</span>
  <span class="token keyword">let</span> pivot <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>pivotIndex<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
  <span class="token comment">//\u5B9A\u4E49\u5DE6\u53F3\u6570\u7EC4</span>
  <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">let</span> right <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token comment">//\u628A\u6BD4\u57FA\u51C6\u5C0F\u7684\u653Eleft,\u5927\u7684\u653Eright</span>
  arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">element</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>element <span class="token operator">&lt;</span> pivot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      left<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      right<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token function">quickSort</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span>pivot<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token function">quickSort</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">56</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">67</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">66</span><span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">quickSort</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//[3, 4, 5, 44, 56, 66, 67]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function _(w,y){const a=l("ExternalLinkIcon");return o(),c("div",null,[d,m,n("p",null,[s("\u5C06"),n("a",v,[s("\u6570\u7EC4"),p(a)]),s("\u4E2D\u7684\u76F8\u90BB\u4E24\u4E2A\u5143\u7D20\u8FDB\u884C\u6BD4\u8F83\uFF0C\u5C06\u6BD4\u8F83\u5927\uFF08\u8F83\u5C0F\uFF09\u7684\u6570\u901A\u8FC7\u4E24\u4E24\u6BD4\u8F83\u79FB\u52A8\u5230\u6570\u7EC4\u672B\u5C3E\uFF08\u5F00\u59CB\uFF09\uFF0C\u6267\u884C\u4E00\u904D\u5185\u5C42\u5FAA\u73AF\uFF0C\u786E\u5B9A\u4E00\u4E2A\u6700\u5927\uFF08\u6700\u5C0F\uFF09\u7684\u6570\uFF0C\u5916\u5C42\u5FAA\u73AF\u4ECE\u6570\u7EC4\u672B\u5C3E\uFF08\u5F00\u59CB\uFF09\u904D\u5386\u5230\u5F00\u59CB\uFF08\u672B\u5C3E\uFF09")]),b,n("p",null,[s("\u5728\u770B\u5B8C\u4E0A\u9762\u7684\u4E1C\u897F\u4E4B\u540E\uFF0C\u4E0D\u77E5\u9053\u5927\u5BB6\u6709\u6CA1\u6709\u53D1\u73B0\u5728\u5B9E\u9645\u7684\u5DE5\u4F5C\u4E2D\u5982\u679C\u6570\u636E\u91CF\u8FC7\u5927\uFF0C\u6570\u7EC4\u6BD4\u8F83\u590D\u6742\uFF0C\u901A\u8FC7\u4E24\u6B21"),n("a",h,[s("\u904D\u5386"),p(a)]),s("\uFF0C\u540C\u65F6\u4F1A\u5E26\u6765\u6027\u80FD\u4E0A\u7684\u95EE\u9898\uFF0C\u4E0D\u7528\u614C\uFF0C\u6211\u4EEC\u8FD8\u53EF\u4EE5\u7528\u5FEB\u901F\u6392\u5E8F\u7684\u65B9\u6CD5\u8FDB\u884C\u89E3\u51B3\uFF0C"),f]),g])}const j=e(k,[["render",_],["__file","sort.html.vue"]]);export{j as default};
