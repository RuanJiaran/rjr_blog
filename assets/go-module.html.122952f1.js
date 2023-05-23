import{_ as a,o as n,c as s,a as o}from"./app.832893c4.js";const e={},p=o(`<h1 id="go-\u4F9D\u8D56\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#go-\u4F9D\u8D56\u7BA1\u7406" aria-hidden="true">#</a> Go \u4F9D\u8D56\u7BA1\u7406</h1><p>\u4E86\u89E3 go \u7684\u4F9D\u8D56\u7BA1\u7406\uFF0C\u9700\u8981\u8BA4\u8BC6\u4E09\u4E2A\u4E1C\u897F\uFF1AGOPATH\u3001GO111MODULE\u3001go.mod</p><h2 id="gopath" tabindex="-1"><a class="header-anchor" href="#gopath" aria-hidden="true">#</a> GOPATH</h2><p>\u6700\u5F00\u59CB go \u4F7F\u7528 GOPATH \u8FDB\u884C\u4F9D\u8D56\u7BA1\u7406\u3002</p><h2 id="gopath-\u7684\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#gopath-\u7684\u4F4D\u7F6E" aria-hidden="true">#</a> GOPATH \u7684\u4F4D\u7F6E</h2><p>linux \u9ED8\u8BA4\u5728\uFF1A~/go \u4E0B</p><p>windows \u9ED8\u8BA4\u5728\uFF1A%USERPROFILE%\\go \u4E0B</p><h2 id="gopath-\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#gopath-\u76EE\u5F55" aria-hidden="true">#</a> GOPATH \u76EE\u5F55</h2><p>GOPATH \u4E0B\u6709 src, pkg, bin \u4E09\u4E2A\u76EE\u5F55\uFF1A</p><ul><li>src\uFF1A\u5B58\u653E go \u6E90\u4EE3\u7801\uFF1B</li><li>pkg\uFF1A\u5B58\u653E\u9884\u7F16\u8BD1\u7684\u5305\u6587\u4EF6\uFF1B</li><li>bin\uFF1A\u5B58\u653E\u53EF\u6267\u884C\u6587\u4EF6\u3002</li></ul><h2 id="gopath-\u5B58\u5728\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#gopath-\u5B58\u5728\u7684\u95EE\u9898" aria-hidden="true">#</a> GOPATH \u5B58\u5728\u7684\u95EE\u9898\uFF1A</h2><p>\u6CA1\u6709\u7248\u672C\u63A7\u5236\u6982\u5FF5\u3002\u7CFB\u7EDF\u5728\u5BFB\u627E gopath \u4E0B\u7684\u6587\u4EF6\u65F6\uFF0C\u4E00\u5B9A\u8981\u901A\u8FC7 gopath/src \u4E0B\u53BB\u5BFB\u627E\uFF0C\u5982\u679C\u4E24\u4E2A project \u90FD\u5728 src \u4E0B\u6240\u4EE5\u7B2C\u4E09\u65B9\u5E93\u8DEF\u5F84\u4E00\u81F4\uFF0C\u4F46\u662F\u53EF\u80FD\u4E24\u4E2A project \u8981\u7684\u7B2C\u4E09\u65B9\u5E93\u7684\u7248\u672C\u4E0D\u4E00\u81F4\uFF0C\u4F46\u540C\u4E00\u8DEF\u5F84\u53EA\u80FD\u6709\u4E00\u79CD\u7248\u672C\u3002</p><hr><h3 id="go111module" tabindex="-1"><a class="header-anchor" href="#go111module" aria-hidden="true">#</a> GO111MODULE</h3><p>\u8F93\u5165 go env \u547D\u4EE4\uFF0C\u53EF\u4EE5\u770B\u5230 <code>GO111MODULE=&quot;on&quot;/&quot;off&quot;/&quot;auto&quot;</code>\u7684\u6761\u76EE\uFF0C111 \u7684\u610F\u601D\u5C31\u662F\u7EAA\u5FF5 go module \u662F\u5728 go1.11 \u7684\u65F6\u5019\u8BDE\u751F\u7684\u3002</p><p>GO111MODULE \u662F\u4E00\u4E2A\u5F00\u5173\uFF0C\u901A\u8FC7\u5B83\u53EF\u4EE5\u5F00\u542F\u6216\u5173\u95ED go mod \u6A21\u5F0F\u3002</p><p>\u5B83\u6709\u4E09\u4E2A\u53EF\u9009\u503C\uFF1Aoff\u3001on\u3001auto\uFF0C\u9ED8\u8BA4\u503C\u662F auto\u3002</p><ol><li>GO111MODULE=off \u7981\u7528\u6A21\u5757\u652F\u6301\uFF0C\u7F16\u8BD1\u65F6\u4F1A\u4ECE GOPATH \u548C vendor \u6587\u4EF6\u5939\u4E2D\u67E5\u627E\u5305\u3002</li><li>GO111MODULE=on \u542F\u7528\u6A21\u5757\u652F\u6301\uFF0C\u7F16\u8BD1\u65F6\u4F1A\u5FFD\u7565 GOPATH \u548C vendor \u6587\u4EF6\u5939\uFF0C\u53EA\u6839\u636E go.mod \u4E0B\u8F7D\u4F9D\u8D56\u3002</li><li>GO111MODULE=auto\uFF0C\u5F53<strong>\u9879\u76EE\u5728 $GOPATH/src \u5916\u4E14\u9879\u76EE\u6839\u76EE\u5F55\u6709 go.mod \u6587\u4EF6</strong>\u65F6\uFF0C\u81EA\u52A8\u5F00\u542F\u6A21\u5757\u652F\u6301\u3002</li></ol><p>\u8BBE\u7F6E\u547D\u4EE4\uFF1A<code>$ go env -w GO111MODULE=&quot;on&quot;</code></p><p>\u5F00\u542F go mod \u6A21\u5F0F\u540E\uFF0Cgo \u6587\u4EF6\u5939\u4E0B\u7684\u5B50\u6587\u4EF6\u5939\u4F5C\u7528\u4E3A\uFF1A</p><ul><li>pkg\uFF1A\u5B50\u6587\u4EF6\u5939 mod \u7528\u4E8E\u5B58\u653E\u5404\u4E2A go mod \u9879\u76EE\u4F9D\u8D56\u7684\u5305\uFF1B</li><li>bin\uFF1A\u5B58\u653E\u7F16\u8BD1\u540E\u7684\u53EF\u6267\u884C\u6587\u4EF6</li><li>src\uFF1A\u4E0D\u518D\u4F7F\u7528\uFF1B</li></ul><hr><h3 id="go-mod" tabindex="-1"><a class="header-anchor" href="#go-mod" aria-hidden="true">#</a> go.mod</h3><p>\u4F7F\u7528 <code>go mod init modname</code>\u547D\u4EE4\u540E\uFF0C\u4F1A\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u521B\u5EFA\u4E00\u4E2A go.mod \u6587\u4EF6\uFF0C\u7528\u4E8E\u4F4D\u4E8E\u5F53\u524D\u76EE\u5F55\u9879\u76EE\u7684\u4F9D\u8D56\u7BA1\u7406\u3002</p><p>go mod \u6A21\u5F0F\u5BFC\u5165\u7684\u5305\uFF0C\u7F16\u8BD1\u540E\u4F1A\u653E\u5728 <code>$GOPATH/pkg/mod</code> \u76EE\u5F55\u4E0B\u3002</p><h2 id="\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a> \u5B9E\u4F8B</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>module github<span class="token punctuation">.</span>com<span class="token operator">/</span>BingmingWong<span class="token operator">/</span>module<span class="token operator">-</span>test

<span class="token keyword">go</span> <span class="token number">1.14</span>

require <span class="token punctuation">(</span>
    example<span class="token punctuation">.</span>com<span class="token operator">/</span>apple v0<span class="token punctuation">.</span><span class="token number">1.2</span>
    example<span class="token punctuation">.</span>com<span class="token operator">/</span>banana v1<span class="token punctuation">.</span><span class="token number">2.3</span>
    example<span class="token punctuation">.</span>com<span class="token operator">/</span>banana<span class="token operator">/</span>v2 v2<span class="token punctuation">.</span><span class="token number">3.4</span>
    example<span class="token punctuation">.</span>com<span class="token operator">/</span>pear <span class="token comment">// indirect</span>
    example<span class="token punctuation">.</span>com<span class="token operator">/</span>strawberry <span class="token comment">// incompatible</span>
<span class="token punctuation">)</span>

exclude example<span class="token punctuation">.</span>com<span class="token operator">/</span>banana v1<span class="token punctuation">.</span><span class="token number">2.4</span>
replace\uFF08
    golang<span class="token punctuation">.</span>org<span class="token operator">/</span>x<span class="token operator">/</span>crypto v0<span class="token punctuation">.</span><span class="token number">0.0</span><span class="token operator">-</span><span class="token number">20180820150726</span><span class="token operator">-</span>614d502a4dac <span class="token operator">=</span><span class="token operator">&gt;</span> github<span class="token punctuation">.</span>com<span class="token operator">/</span>golang<span class="token operator">/</span>crypto v0<span class="token punctuation">.</span><span class="token number">0.0</span><span class="token operator">-</span><span class="token number">20180820150726</span><span class="token operator">-</span>614d502a4dac
    golang<span class="token punctuation">.</span>org<span class="token operator">/</span>x<span class="token operator">/</span>net v0<span class="token punctuation">.</span><span class="token number">0.0</span><span class="token operator">-</span><span class="token number">20180821023952</span><span class="token operator">-</span>922f4815f713 <span class="token operator">=</span><span class="token operator">&gt;</span> github<span class="token punctuation">.</span>com<span class="token operator">/</span>golang<span class="token operator">/</span>net v0<span class="token punctuation">.</span><span class="token number">0.0</span><span class="token operator">-</span><span class="token number">20180826012351</span><span class="token operator">-</span>8a410e7b638d
    golang<span class="token punctuation">.</span>org<span class="token operator">/</span>x<span class="token operator">/</span>text v0<span class="token punctuation">.</span><span class="token number">3.0</span> <span class="token operator">=</span><span class="token operator">&gt;</span> github<span class="token punctuation">.</span>com<span class="token operator">/</span>golang<span class="token operator">/</span>text v0<span class="token punctuation">.</span><span class="token number">3.0</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u7B2C 1 \u884C\uFF1A\u6A21\u5757\u7684\u5F15\u7528\u8DEF\u5F84</li><li>\u7B2C 3 \u884C\uFF1A\u9879\u76EE\u4F7F\u7528\u7684 go \u7248\u672C</li><li>require()\uFF1A\u9879\u76EE\u6240\u9700\u7684\u76F4\u63A5\u4F9D\u8D56\u5305\u53CA\u5176\u7248\u672C</li><li>exclude\uFF1A \u5FFD\u7565\u6307\u5B9A\u7248\u672C\u7684\u4F9D\u8D56\u5305</li><li>replace\uFF1A\u7531\u4E8E\u5728\u56FD\u5185\u8BBF\u95EE golang.org/x \u7684\u5404\u4E2A\u5305\u90FD\u9700\u8981 f.q\uFF0C\u4F60\u53EF\u4EE5\u5728 go.mod \u4E2D\u4F7F\u7528 replace \u66FF\u6362\u6210 github \u4E0A\u5BF9\u5E94\u7684\u5E93\u3002</li></ul><h2 id="\u76F8\u5173\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u76F8\u5173\u547D\u4EE4" aria-hidden="true">#</a> \u76F8\u5173\u547D\u4EE4</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">go</span> mod init		 <span class="token comment">// \u751F\u6210 go.mod \u2F42\u6587\u4EF6</span>
<span class="token keyword">go</span> mod download  <span class="token comment">// \u4E0B\u8F7D go.mod \u2F42\u6587\u4EF6\u4E2D\u6307\u660E\u7684\u6240\u6709\u4F9D\u8D56</span>
<span class="token keyword">go</span> mod tidy 	 <span class="token comment">//	\u6574\u7406\u7406\u73B0\u6709\u7684\u4F9D\u8D56</span>
<span class="token keyword">go</span> mod graph 	 <span class="token comment">// \u67E5\u770B\u73B0\u6709\u7684\u4F9D\u8D56\u7ED3\u6784</span>
<span class="token keyword">go</span> mod edit 	 <span class="token comment">// \u7F16\u8F91 go.mod \u2F42\u6587\u4EF6</span>
<span class="token keyword">go</span> mod vendor	 <span class="token comment">// \u5BFC\u51FA\u9879\u2F6C\u76EE\u6240\u6709\u7684\u4F9D\u8D56\u5230vendor\u2F6C\u76EE\u5F55</span>
<span class="token keyword">go</span> mod verify	 <span class="token comment">// \u6821\u9A8C\u2F00\u4E00\u4E2A\u6A21\u5757\u662F\u5426\u88AB\u7BE1\u6539\u8FC7</span>
<span class="token keyword">go</span> mod why	     <span class="token comment">// \u67E5\u770B\u4E3A\u4EC0\u4EC0\u4E48\u9700\u8981\u4F9D\u8D56\u67D0\u6A21\u5757</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h1 id="go-sum" tabindex="-1"><a class="header-anchor" href="#go-sum" aria-hidden="true">#</a> go.sum</h1><p>\u5728\u6267\u884C go get \u4E4B\u540E\u968F\u7740 go.mod \u7684\u66F4\u65B0\uFF0C\u53EF\u4EE5\u53D1\u73B0\u51FA\u73B0\u4E86\u4E00\u4E2A go.sum \u6587\u4EF6\uFF0C\u91CC\u9762\u4F3C\u4E4E\u662F\u54C8\u5E0C\u503C\u7684\u4E00\u4E9B\u770B\u4E0D\u61C2\u7684\u4E1C\u897F\u3002</p><p>\u5176\u5B9E\u56DE\u8FC7\u6765\u770B\uFF0Cgo.mod \u4F5C\u4E3A\u4F9D\u8D56\u7BA1\u7406\u7684\u552F\u4E00\u6587\u4EF6\u662F\u5426\u53EF\u9760\u5462\uFF1F\u663E\u7136\u662F\u4E0D\u53EF\u9760\u7684\uFF0C\u56E0\u4E3A\u90FD\u662F\u660E\u6587\u5B58\u50A8\uFF0C\u5BB9\u6613\u88AB\u7BE1\u6539\u3002</p><h2 id="go-sum-\u7684\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#go-sum-\u7684\u683C\u5F0F" aria-hidden="true">#</a> go.sum \u7684\u683C\u5F0F</h2><div class="language-plain ext-plain line-numbers-mode"><pre class="language-plain"><code>github.com/go-playground/validator/v10 v10.4.1 h1:pH2c5ADXtd66mxoE0Zm9SUhxE20r7aM3F26W0hOn+GE=
github.com/go-playground/validator/v10 v10.4.1/go.mod h1:nlOn6nFhuKACm19sB/8EGNn9GlaMV7XkbRSipzJ0Ii4=
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6BCF\u4E2A gomodule \u4F9D\u8D56\u7531\u4E24\u6761\u8BB0\u5F55\u6784\u6210\uFF1A</p><ul><li><code>&lt;gomodule \u540D \u7248\u672C\u53F7 h1:\u54C8\u5E0C\u503C&gt;</code></li><li><code>&lt;gomodule \u540D \u7248\u672C\u53F7/go.mod h1:\u54C8\u5E0C\u503C&gt;</code></li></ul><p>\u7B2C\u4E00\u6761\u8868\u793A\u6574\u4E2A\u4F9D\u8D56\u6587\u4EF6\u7684\u54C8\u5E0C\u503C\uFF1B</p><p>\u7B2C\u4E8C\u6761\u8868\u793A mo.mod \u6587\u4EF6\u4E2D\u8BE5\u6761\u8BB0\u5F55\u7684\u54C8\u5E0C\u503C\uFF1B</p><p>h1 \u8868\u793A\u540E\u9762\u7684\u54C8\u5E0C\u503C\u662F\u7531\u7B97\u6CD5 SHA-256 \u8BA1\u7B97\u51FA\u6765\u7684\uFF1B</p><h2 id="\u5982\u4F55\u4FDD\u8BC1\u4F9D\u8D56\u5305\u7684\u6B63\u786E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u4FDD\u8BC1\u4F9D\u8D56\u5305\u7684\u6B63\u786E\u6027" aria-hidden="true">#</a> \u5982\u4F55\u4FDD\u8BC1\u4F9D\u8D56\u5305\u7684\u6B63\u786E\u6027\uFF1F</h2><ol><li>\u9996\u5148\u4FDD\u8BC1 go.sum \u4E2D\u54C8\u5E0C\u503C\u7684\u6B63\u786E\u6027\uFF1A</li></ol><p>\u5728\u66F4\u65B0 go.sum \u4E4B\u524D\uFF0C\u4E3A\u4E86\u786E\u4FDD\u4E0B\u8F7D\u7684\u4F9D\u8D56\u5305\u662F\u771F\u5B9E\u53EF\u9760\u7684\uFF0Cgo \u547D\u4EE4\u4E0B\u8F7D\u5B8C\u4F9D\u8D56\u5305\u540E\u4F1A\u67E5\u8BE2 GOSUMDB \u73AF\u5883\u53D8\u91CF\u6240\u6307\u793A\u7684\u670D\u52A1\u5668\uFF0C\u4EE5\u5F97\u5230\u4E00\u4E2A\u6743\u5A01\u7684\u4F9D\u8D56\u5305\u7248\u672C\u54C8\u5E0C\u503C\u3002\u5982\u679C go \u547D\u4EE4\u8BA1\u7B97\u51FA\u7684\u4F9D\u8D56\u5305\u7248\u672C\u54C8\u5E0C\u503C\u4E0E GOSUMDB \u670D\u52A1\u5668\u7ED9\u51FA\u7684\u54C8\u5E0C\u503C\u4E0D\u4E00\u81F4\uFF0Cgo \u547D\u4EE4\u5C06\u62D2\u7EDD\u5411\u4E0B\u6267\u884C\uFF0C\u4E5F\u4E0D\u4F1A\u66F4\u65B0 go.sum \u6587\u4EF6\u3002</p><ol><li>\u518D\u6765\u4FDD\u8BC1\u4F9D\u8D56\u5305\u7684\u6B63\u786E\u6027\uFF1A</li></ol><p>\u5F53\u6784\u5EFA\u4E00\u4E2A\u9879\u76EE\u65F6\uFF0Cgo \u547D\u4EE4\u4F1A\u5148\u5728\u672C\u5730\u7F13\u5B58\u4E2D\u67E5\u627E\u6240\u6709 go.mod \u8BB0\u5F55\u7684\u4F9D\u8D56\u5305\uFF0C\u8BA1\u7B97\u5176\u54C8\u5E0C\u503C\uFF0C\u4E0E go.sum \u4E2D\u7684\u54C8\u5E0C\u503C\u5BF9\u6BD4\u3002\u5982\u679C\u4E0D\u4E00\u81F4\uFF0Cgo \u547D\u4EE4\u4F1A\u5224\u5B9A\u4E3A\u672C\u5730\u7F13\u5B58\u7684\u4F9D\u8D56\u5305\u9519\u8BEF\uFF0C\u56E0\u4E3A\u4E00\u4E2A\u65B0\u7684\u4F9D\u8D56\u5305\u7248\u672C\u5728\u88AB\u6DFB\u52A0\u5230 go.sum \u524D\u662F\u7ECF\u8FC7 GOSUMDB\uFF08\u6821\u9A8C\u548C\u6570\u636E\u5E93\uFF09\u9A8C\u8BC1\u8FC7\u7684\u3002</p><h2 id="\u4E3A\u4EC0\u4E48-go-sum-\u6761\u76EE\u6BD4-go-mod-\u591A\u90A3\u4E48\u591A" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48-go-sum-\u6761\u76EE\u6BD4-go-mod-\u591A\u90A3\u4E48\u591A" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48 go.sum \u6761\u76EE\u6BD4 go.mod \u591A\u90A3\u4E48\u591A\uFF1F</h2><p>\u56E0\u4E3A go.mod \u53EA\u8BB0\u5F55\u76F4\u63A5\u4F9D\u8D56\u7684\u5305\uFF0Cgo.sum \u8BB0\u5F55\u6240\u6709\u76F4\u63A5\u548C\u95F4\u63A5\u4F9D\u8D56\u7684\u5305\u6570\u636E\u3002</p>`,48),t=[p];function l(i,c){return n(),s("div",null,t)}const d=a(e,[["render",l],["__file","go-module.html.vue"]]);export{d as default};