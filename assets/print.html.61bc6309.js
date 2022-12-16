import{_ as n,o as s,c as a,a as t}from"./app.88c43aab.js";const e={},p=t(`<h1 id="\u683C\u5F0F\u5316\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#\u683C\u5F0F\u5316\u5B57\u7B26\u4E32" aria-hidden="true">#</a> \u683C\u5F0F\u5316\u5B57\u7B26\u4E32</h1><p>fmt.Sprintf \u548C fmt.Printf \u4F7F\u7528\u683C\u5F0F\u5316</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span>\u683C\u5F0F\u5316\u6837\u5F0F<span class="token punctuation">,</span> \u53C2\u6570\u5217\u8868\u2026<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span>\u683C\u5F0F\u5316\u6837\u5F0F<span class="token punctuation">,</span> \u53C2\u6570\u5217\u8868\u2026<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>**\u683C\u5F0F\u5316\u6837\u5F0F\uFF1A**\u5B57\u7B26\u4E32\u5F62\u5F0F\uFF0C\u683C\u5F0F\u5316\u7B26\u53F7\u4EE5 <strong>%</strong> \u5F00\u5934\uFF0C %s \u5B57\u7B26\u4E32\u683C\u5F0F\uFF0C%d \u5341\u8FDB\u5236\u7684\u6574\u6570\u683C\u5F0F\u3002</li><li>**\u53C2\u6570\u5217\u8868\uFF1A**\u591A\u4E2A\u53C2\u6570\u4EE5\u9017\u53F7\u5206\u9694\uFF0C\u4E2A\u6570\u5FC5\u987B\u4E0E\u683C\u5F0F\u5316\u6837\u5F0F\u4E2D\u7684\u4E2A\u6570\u4E00\u4E00\u5BF9\u5E94\uFF0C\u5426\u5219\u8FD0\u884C\u65F6\u4F1A\u62A5\u9519\u3002</li></ul><h2 id="\u683C\u5F0F\u5316\u7B26\u53F7" tabindex="-1"><a class="header-anchor" href="#\u683C\u5F0F\u5316\u7B26\u53F7" aria-hidden="true">#</a> \u683C\u5F0F\u5316\u7B26\u53F7</h2><table><thead><tr><th style="text-align:left;">\u683C \u5F0F</th><th style="text-align:left;">\u63CF \u8FF0</th></tr></thead><tbody><tr><td style="text-align:left;">%s</td><td style="text-align:left;">\u4EE5\u5B57\u7B26\u4E32\u7684\u65B9\u5F0F\u663E\u793A</td></tr><tr><td style="text-align:left;">%d</td><td style="text-align:left;">\u6574\u578B\u4EE5\u5341\u8FDB\u5236\u65B9\u5F0F\u663E\u793A</td></tr><tr><td style="text-align:left;">%f</td><td style="text-align:left;">\u6D6E\u70B9\u6570</td></tr><tr><td style="text-align:left;">%v</td><td style="text-align:left;">\u6309\u503C\u7684\u672C\u6765\u503C\u8F93\u51FA</td></tr><tr><td style="text-align:left;">%+v</td><td style="text-align:left;">\u5728 %v \u57FA\u7840\u4E0A\uFF0C\u5BF9\u7ED3\u6784\u4F53\u5B57\u6BB5\u540D\u548C\u503C\u8FDB\u884C\u5C55\u5F00</td></tr><tr><td style="text-align:left;">%#v</td><td style="text-align:left;">\u8F93\u51FA Go \u8BED\u8A00\u8BED\u6CD5\u683C\u5F0F\u7684\u503C</td></tr><tr><td style="text-align:left;">%T</td><td style="text-align:left;">\u8F93\u51FA Go \u8BED\u8A00\u8BED\u6CD5\u683C\u5F0F\u7684\u7C7B\u578B\u548C\u503C</td></tr><tr><td style="text-align:left;">%%</td><td style="text-align:left;">\u8F93\u51FA % \u672C\u4F53</td></tr><tr><td style="text-align:left;">%b</td><td style="text-align:left;">\u6574\u578B\u4EE5\u4E8C\u8FDB\u5236\u65B9\u5F0F\u663E\u793A</td></tr><tr><td style="text-align:left;">%o</td><td style="text-align:left;">\u6574\u578B\u4EE5\u516B\u8FDB\u5236\u65B9\u5F0F\u663E\u793A</td></tr><tr><td style="text-align:left;">%x</td><td style="text-align:left;">\u6574\u578B\u4EE5\u5341\u516D\u8FDB\u5236\u65B9\u5F0F\u663E\u793A</td></tr><tr><td style="text-align:left;">%X</td><td style="text-align:left;">\u6574\u578B\u4EE5\u5341\u516D\u8FDB\u5236\u3001\u5B57\u6BCD\u5927\u5199\u65B9\u5F0F\u663E\u793A</td></tr><tr><td style="text-align:left;">%U</td><td style="text-align:left;">Unicode \u5B57\u7B26</td></tr><tr><td style="text-align:left;">%p</td><td style="text-align:left;">\u6307\u9488\uFF0C\u5341\u516D\u8FDB\u5236\u65B9\u5F0F\u663E\u793A</td></tr></tbody></table><h5 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h5><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> point <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    x<span class="token punctuation">,</span> y <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    p <span class="token operator">:=</span> point<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%v\\n&quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%+v\\n&quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%#v\\n&quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%T\\n&quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%t\\n&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> <span class="token number">123</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%b\\n&quot;</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%c\\n&quot;</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%x\\n&quot;</span><span class="token punctuation">,</span> <span class="token number">456</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%f\\n&quot;</span><span class="token punctuation">,</span> <span class="token number">78.9</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%e\\n&quot;</span><span class="token punctuation">,</span> <span class="token number">123400000.0</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%E\\n&quot;</span><span class="token punctuation">,</span> <span class="token number">123400000.0</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s\\n&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\\&quot;string\\&quot;&quot;</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%q\\n&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\\&quot;string\\&quot;&quot;</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%x\\n&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;hex this&quot;</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%p\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>p<span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;|%6d|%6d|\\n&quot;</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">345</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;|%6.2f|%6.2f|\\n&quot;</span><span class="token punctuation">,</span> <span class="token number">1.2</span><span class="token punctuation">,</span> <span class="token number">3.45</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;|%-6.2f|%-6.2f|\\n&quot;</span><span class="token punctuation">,</span> <span class="token number">1.2</span><span class="token punctuation">,</span> <span class="token number">3.45</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;|%6s|%6s|\\n&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;|%-6s|%-6s|\\n&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">)</span>

    s <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;a %s&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Fprintf</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stderr<span class="token punctuation">,</span> <span class="token string">&quot;an %s\\n&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>\u8F93\u51FA\u7ED3\u679C</strong></em></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{1 2}
{x:1 y:2}
main.point{x:1, y:2}
main.point
true
123
1110
!
1c8
78.900000
1.234000e+08
1.234000E+08
&quot;string&quot;
&quot;\\&quot;string\\&quot;&quot;
6865782074686973
0xc0000b4010
|    12|   345|
|  1.20|  3.45|
|1.20  |3.45  |
|   foo|     b|
|foo   |b     |
a string
an error
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),i=[p];function l(o,c){return s(),a("div",null,i)}const d=n(e,[["render",l],["__file","print.html.vue"]]);export{d as default};
