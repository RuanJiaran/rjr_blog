import{_ as n,o as s,c as a,a as t}from"./app.8ca4d959.js";const e="/rjr_blog/img/1660314051482-5850f853-3236-441f-8a04-6739f41c6185.png",p={},o=t('<h1 id="socket" tabindex="-1"><a class="header-anchor" href="#socket" aria-hidden="true">#</a> socket</h1><p><img src="'+e+`" alt="image.png"></p><h2 id="\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7528\u6CD5" aria-hidden="true">#</a> \u7528\u6CD5</h2><p>main.go</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	server <span class="token operator">:=</span> <span class="token function">NewSocketServer</span><span class="token punctuation">(</span><span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span> <span class="token number">8888</span><span class="token punctuation">)</span>
	server<span class="token punctuation">.</span><span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>server.go</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;net&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Server <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Ip   <span class="token builtin">string</span>
	Prot <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5B9E\u4F8B\u5316 socket</span>
<span class="token keyword">func</span> <span class="token function">NewSocketServer</span><span class="token punctuation">(</span>ip <span class="token builtin">string</span><span class="token punctuation">,</span> port <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>Server <span class="token punctuation">{</span>
	server <span class="token operator">:=</span> <span class="token operator">&amp;</span>Server<span class="token punctuation">{</span>
		Ip<span class="token punctuation">:</span>   ip<span class="token punctuation">,</span>
		Prot<span class="token punctuation">:</span> port<span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> server
<span class="token punctuation">}</span>

<span class="token comment">// \u5904\u7406\u8FDE\u63A5</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>Server<span class="token punctuation">)</span> <span class="token function">Hander</span><span class="token punctuation">(</span>conn net<span class="token punctuation">.</span>Conn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8FDE\u63A5\u6210\u529F&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u542F\u52A8 socket</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>Server<span class="token punctuation">)</span> <span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	listener<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Listen</span><span class="token punctuation">(</span><span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;%s:%d&quot;</span><span class="token punctuation">,</span> this<span class="token punctuation">.</span>Ip<span class="token punctuation">,</span> this<span class="token punctuation">.</span>Prot<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;net.Listen err&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// \u5173\u95ED\u8FDE\u63A5</span>
	<span class="token keyword">defer</span> listener<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		<span class="token comment">// accept</span>
		conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> listener<span class="token punctuation">.</span><span class="token function">Accept</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;listen accept err:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
			<span class="token keyword">continue</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// do hander</span>
		<span class="token keyword">go</span> this<span class="token punctuation">.</span><span class="token function">Hander</span><span class="token punctuation">(</span>conn<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),c=[o];function i(l,u){return s(),a("div",null,c)}const k=n(p,[["render",i],["__file","socket.html.vue"]]);export{k as default};
