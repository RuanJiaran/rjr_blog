import{_ as s,o as a,c as n,a as e}from"./app.832893c4.js";const t="/rjr_blog/assets/webp.9505062f.webp",p="/rjr_blog/assets/image-20230425160316462.ea5a1c4d.png",r="/rjr_blog/assets/image-20230425160341342.818c3b3a.png",o="/rjr_blog/assets/image-20230425160400067.8f02c7b8.png",i={},l=e(`<h1 id="\u81EA\u52A8\u683C\u5F0F\u5316\u4EE3\u7801-prettier" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u683C\u5F0F\u5316\u4EE3\u7801-prettier" aria-hidden="true">#</a> \u81EA\u52A8\u683C\u5F0F\u5316\u4EE3\u7801 Prettier</h1><h2 id="\u521B\u5EFA\u683C\u5F0F\u5316\u89C4\u5219\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u683C\u5F0F\u5316\u89C4\u5219\u6587\u4EF6" aria-hidden="true">#</a> \u521B\u5EFA\u683C\u5F0F\u5316\u89C4\u5219\u6587\u4EF6</h2><h4 id="\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u521B\u5EFA-prettierrc-js-\u548C-prettierignore-\u4E24\u4E2A\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u521B\u5EFA-prettierrc-js-\u548C-prettierignore-\u4E24\u4E2A\u6587\u4EF6" aria-hidden="true">#</a> \u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u521B\u5EFA <code>.prettierrc.js</code> \u548C <code>.prettierignore</code> \u4E24\u4E2A\u6587\u4EF6</h4><p><code>.prettierrc.js</code> \u914D\u7F6E\u683C\u5F0F\u5316\u89C4\u5219</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">printWidth</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  <span class="token literal-property property">tabWidth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token literal-property property">useTabs</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">semi</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u5728\u53E5\u5C3E\u6253\u5370\u5206\u53F7</span>
  <span class="token literal-property property">singleQuote</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//  \u662F\u5426\u4F7F\u7528\u5355\u5F15\u53F7</span>
  <span class="token literal-property property">quoteProps</span><span class="token operator">:</span> <span class="token string">&quot;as-needed&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u4EC5\u5728\u9700\u8981\u65F6\u5728\u5BF9\u8C61\u5C5E\u6027\u5468\u56F4\u6DFB\u52A0\u5F15\u53F7</span>
  <span class="token literal-property property">jsxSingleQuote</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//  jsx\u662F\u5426\u4F7F\u7528\u5355\u5F15\u53F7</span>
  <span class="token literal-property property">trailingComma</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u6CA1\u6709\u5C3E\u968F\u9017\u53F7</span>
  <span class="token literal-property property">bracketSpacing</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u5BF9\u8C61 {} \u662F\u5426\u7559\u7A7A\u683C \u4F8B\u5982\uFF1A true { foo: bar }  false {foo: bar}</span>
  <span class="token literal-property property">jsxBracketSameLine</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u5C06\u591A\u884C JSX \u5143\u7D20\u7684 /&gt; \u5355\u72EC\u653E\u4E00\u884C</span>
  <span class="token literal-property property">bracketSameLine</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u5C06\u591A\u884C HTML, JSX, Vue, Angular \u5143\u7D20\u7684 /&gt; \u5355\u72EC\u653E\u4E00\u884C</span>
  <span class="token literal-property property">arrowParens</span><span class="token operator">:</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5728\u7BAD\u5934\u51FD\u6570\u53C2\u6570\u5468\u56F4\u5305\u542B\u62EC\u53F7</span>
  <span class="token literal-property property">proseWrap</span><span class="token operator">:</span> <span class="token string">&quot;preserve&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">htmlWhitespaceSensitivity</span><span class="token operator">:</span> <span class="token string">&quot;css&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">vueIndentScriptAndStyle</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">endOfLine</span><span class="token operator">:</span> <span class="token string">&quot;lf&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>.prettierignore</code> \u5FFD\u7565\u4F60\u4E0D\u5E0C\u671B\u683C\u5F0F\u5316\u7684\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.DS_Store
node_modules
coverage
.vscode
.husky
.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u65B9\u5F0F\u4E00" tabindex="-1"><a class="header-anchor" href="#\u65B9\u5F0F\u4E00" aria-hidden="true">#</a> \u65B9\u5F0F\u4E00</h2><p>\u5728 Vscode \u7F16\u8F91\u5668\u6BCF\u6B21\u4FDD\u5B58\u4EE3\u7801\u65F6\u81EA\u52A8\u683C\u5F0F\u5316\u4EE3\u7801</p><h4 id="_1-\u5B89\u88C5-vscode-\u63D2\u4EF6-prettier-\u5E76\u542F\u7528\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-\u5B89\u88C5-vscode-\u63D2\u4EF6-prettier-\u5E76\u542F\u7528\u63D2\u4EF6" aria-hidden="true">#</a> 1.\u5B89\u88C5 Vscode \u63D2\u4EF6 Prettier\uFF0C\u5E76\u542F\u7528\u63D2\u4EF6</h4><p><img src="`+t+`" alt="img"></p><h4 id="_2-\u5728-vscode-\u914D\u7F6E\u6587\u4EF6\u5F00\u542F\u4FDD\u5B58\u4EE3\u7801\u81EA\u52A8\u683C\u5F0F\u5316\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-\u5728-vscode-\u914D\u7F6E\u6587\u4EF6\u5F00\u542F\u4FDD\u5B58\u4EE3\u7801\u81EA\u52A8\u683C\u5F0F\u5316\u914D\u7F6E" aria-hidden="true">#</a> 2.\u5728 Vscode \u914D\u7F6E\u6587\u4EF6\u5F00\u542F\u4FDD\u5B58\u4EE3\u7801\u81EA\u52A8\u683C\u5F0F\u5316\u914D\u7F6E</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&quot;editor.formatOnSave&quot;: true, // \u4FDD\u5B58\u4EE3\u7801\u65F6\u81EA\u52A8\u683C\u5F0F\u5316\u4EE3\u7801
&quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;, //\u914D\u7F6Ehtml css js\u7684\u9ED8\u8BA4\u683C\u5F0F\u5316\u7A0B\u5E8F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+p+'" alt="image-20230425160316462"></p><p><img src="'+r+'" alt="image-20230425160341342"></p><p><img src="'+o+`" alt="image-20230425160400067"></p><h2 id="\u65B9\u5F0F\u4E8C" tabindex="-1"><a class="header-anchor" href="#\u65B9\u5F0F\u4E8C" aria-hidden="true">#</a> \u65B9\u5F0F\u4E8C</h2><p>\u6BCF\u6B21\u63D0\u4EA4\u4EE3\u7801\u65F6\u81EA\u52A8\u5BF9\u63D0\u4EA4\u7684\u6587\u4EF6\u8FDB\u884C\u4EE3\u7801\u683C\u5F0F\u5316</p><h4 id="_1-\u5B89\u88C5-npm-\u5305" tabindex="-1"><a class="header-anchor" href="#_1-\u5B89\u88C5-npm-\u5305" aria-hidden="true">#</a> 1.\u5B89\u88C5 npm \u5305</h4><ul><li>prettier: \u529F\u80FD\u4F9D\u8D56\u5305</li><li>husky: \u63D0\u4F9B gitHook \u76F8\u5173\u529F\u80FD</li><li>lint-staged: \u8BA9\u547D\u4EE4\u53EA\u5BF9\u53D1\u751F\u66F4\u6539\u7684\u6587\u4EF6\u751F\u6548</li></ul><div class="language-cmd ext-cmd line-numbers-mode"><pre class="language-cmd"><code>npm install -D prettier
npx mrm@2 lint-staged
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4E24\u4E2A\u547D\u4EE4\u7684\u6267\u884C\u987A\u5E8F\u4E0D\u80FD\u98A0\u5012</p><p><code>npx mrm@2 lint-staged</code> \u547D\u4EE4\u5C06\u5B89\u88C5husky\u548Clint-stage\uFF0C\u7136\u540E\u5C06\u914D\u7F6E\u6DFB\u52A0\u5230 <code>package.json</code> \u4E2D\u3002\u5B83\u5C06\u81EA\u52A8\u683C\u5F0F\u5316\u9884\u63D0\u4EA4\u94A9\u5B50\u4E2D\u652F\u6301\u7684\u6587\u4EF6\u3002</p><h4 id="_2-\u4FEE\u6539-package-json-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-\u4FEE\u6539-package-json-\u6587\u4EF6" aria-hidden="true">#</a> 2.\u4FEE\u6539 <code>package.json</code> \u6587\u4EF6</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">...</span>
<span class="token string-property property">&quot;lint-staged&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&quot;src/**/*.{ts,tsx,js,jsx}&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;prettier --write&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token operator">...</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),c=[l];function d(u,v){return a(),n("div",null,c)}const k=s(i,[["render",d],["__file","prettier.html.vue"]]);export{k as default};