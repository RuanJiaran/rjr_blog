import{_ as n,o as s,c as a,a as i}from"./app.8ca4d959.js";const l={},e=i(`<h1 id="nginx-\u4EE3\u7406\u5339\u914D\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#nginx-\u4EE3\u7406\u5339\u914D\u89C4\u5219" aria-hidden="true">#</a> Nginx \u4EE3\u7406\u5339\u914D\u89C4\u5219</h1><h4 id="location\u914D\u7F6E\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#location\u914D\u7F6E\u89C4\u5219" aria-hidden="true">#</a> location\u914D\u7F6E\u89C4\u5219</h4><ol><li><strong>\u5339\u914D\u6A21\u5F0F\u53CA\u987A\u5E8F\u4E3E\u4F8B</strong></li></ol><ul><li>location = /uri = \u5F00\u5934\u8868\u793A\u7CBE\u786E\u5339\u914D\uFF0C\u53EA\u6709\u5B8C\u5168\u5339\u914D\u4E0A\u624D\u80FD\u751F\u6548</li><li>location ^~ /uri ^~ \u5F00\u5934\u5BF9 URL \u8DEF\u5F84\u8FDB\u884C\u524D\u7F00\u5339\u914D\uFF0C\u5E76\u4E14\u5728\u6B63\u5219\u4E4B\u524D</li><li>location ~ pattern ~ \u5F00\u5934\u8868\u793A\u533A\u5206\u5927\u5C0F\u5199\u7684\u6B63\u5219\u5339\u914D</li><li>location /uri \u4E0D\u5E26\u4EFB\u4F55\u4FEE\u9970\u7B26\uFF0C\u4E5F\u8868\u793A\u524D\u7F00\u5339\u914D\uFF0C\u4F46\u662F\u5728\u6B63\u5219\u5339\u914D\u4E4B\u540E\uFF0C\u5982\u679C\u6CA1\u6709\u6B63\u5219\u547D\u4E2D\uFF0C\u547D\u4E2D\u6700\u957F\u7684\u89C4\u5219</li><li>location / \u901A\u7528\u5339\u914D\uFF0C\u4EFB\u4F55\u672A\u5339\u914D\u5230\u5176\u5B83 location \u7684\u8BF7\u6C42\u90FD\u4F1A\u5339\u914D\u5230\uFF0C\u76F8\u5F53\u4E8E switch \u4E2D\u7684 default</li></ul><ol start="2"><li><strong>location \u662F\u5426\u4EE5\u201C\uFF0F\u201D\u7ED3\u5C3E</strong></li></ol><ul><li>\u5728 ngnix \u4E2D location \u8FDB\u884C\u7684\u662F\u6A21\u7CCA\u5339\u914D</li><li>\u6CA1\u6709\u201C/\u201D\u7ED3\u5C3E\u65F6\uFF0Clocation /abc/def \u53EF\u4EE5\u5339\u914D /abc/defghi \u8BF7\u6C42\uFF0C\u4E5F\u53EF\u4EE5\u5339\u914D /abc/def/ghi \u7B49</li><li>\u800C\u6709\u201C/\u201D\u7ED3\u5C3E\u65F6\uFF0Clocation /abc/def/ \u4E0D\u80FD\u5339\u914D /abc/defghi \u8BF7\u6C42\uFF0C\u53EA\u80FD\u5339\u914D /abc/def/anything \u8FD9\u6837\u7684\u8BF7\u6C42</li></ul><h4 id="proxy-pass\u914D\u7F6E\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#proxy-pass\u914D\u7F6E\u89C4\u5219" aria-hidden="true">#</a> proxy_pass\u914D\u7F6E\u89C4\u5219</h4><ul><li><p>\u914D\u7F6E proxy_pass \u65F6\uFF0C\u5F53\u5728\u540E\u9762\u7684 url \u52A0\u4E0A\u4E86 /\uFF0C\u76F8\u5F53\u4E8E\u662F\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u5219 Nginx \u4E0D\u4F1A\u628A location \u4E2D\u5339\u914D\u7684\u8DEF\u5F84\u90E8\u5206\u52A0\u5165\u4EE3\u7406 uri\u3002</p></li><li><p>\u5982\u679C\u914D\u7F6E proxy_pass \u65F6\uFF0C\u540E\u9762\u6CA1\u6709 /\uFF0CNginx \u5219\u4F1A\u628A\u5339\u914D\u7684\u8DEF\u5F84\u90E8\u5206\u52A0\u5165\u4EE3\u7406 uri\u3002</p></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
        listen       <span class="token number">8081</span><span class="token punctuation">;</span>
        server_name  localhost<span class="token punctuation">;</span>
  
        location / <span class="token punctuation">{</span>
            root   html<span class="token punctuation">;</span>
            index  index.html index.htm<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
<span class="token comment">#\u60C5\u666F1:proxy_pass\u540E\u6709/ \uFF0C\u8868\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u4E0D\u628A\u5339\u914D\u90E8\u5206\u52A0\u5165\u6700\u7EC8\u4EE3\u7406\u8DEF\u5F84\uFF08location \u548Cproxy_pass\u7ED3\u5C3E\u4E00\u81F4\uFF09</span>
        <span class="token comment">#\u8BBF\u95EE\u5730\u5740\uFF1Ahttp://localhost:8081/WCP.Service/wcp/modeladapter/download/asc.shtml</span>
        <span class="token comment">#\u6700\u7EC8\u4EE3\u7406\uFF1Ahttp://10.194.171.7:13082/modeladapter/download/asc.shtml</span>
        location /WCP.Service/wcp/modeladapter/download/ <span class="token punctuation">{</span>
            proxy_pass   http://10.194.171.7:13082/modeladapter/download/<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">#\u8BBF\u95EE\u5730\u5740\uFF1Ahttp://localhost:8081/model/asc.shtml</span>
        <span class="token comment">#\u6700\u7EC8\u4EE3\u7406\uFF1Ahttp://127.0.0.1:8082/model/asc.shtml</span>
        location /model/ <span class="token punctuation">{</span>
            proxy_pass   http://127.0.0.1:8082/model/<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">#\u60C5\u666F2:proxy_pass\u540E\u6709/ \uFF0C\u8868\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u4E0D\u628A\u5339\u914D\u90E8\u5206\u52A0\u5165\u6700\u7EC8\u4EE3\u7406\u8DEF\u5F84\uFF08location \u548Cproxy_pass\u7ED3\u5C3E\u4E0D\u4E00\u81F4\uFF09</span>
        <span class="token comment">#\u8BBF\u95EE\u5730\u5740\uFF1Ahttp://localhost:8081/model/asc.shtml</span>
        <span class="token comment">#\u6700\u7EC8\u4EE3\u7406\uFF1Ahttp://127.0.0.1:8082/asc.shtml</span>
        location /model/ <span class="token punctuation">{</span>
            proxy_pass   http://127.0.0.1:8082/<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
<span class="token comment">#\u60C5\u666F3\uFF1Aproxy_pass\u540E\u6CA1\u6709 / \uFF0CNginx\u4F1A\u628A\u5339\u914D\u90E8\u5206\u5E26\u5230\u4EE3\u7406\u7684url</span>
        <span class="token comment">#\u8BBF\u95EE\u5730\u5740\uFF1Ahttp://localhost:8081/model/asc.shtml</span>
        <span class="token comment">#\u6700\u7EC8\u4EE3\u7406\uFF1Ahttp://127.0.0.1:8082/model/asc.shtml</span>
        location /model/ <span class="token punctuation">{</span>
            proxy_pass   http://127.0.0.1:8082<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
  
<span class="token comment">#\u60C5\u666F4</span>
        <span class="token comment">#\u8BBF\u95EE\u5730\u5740\uFF1Ahttp://localhost:8081/model/asc.shtml</span>
        <span class="token comment">#\u6700\u7EC8\u4EE3\u7406\uFF1Ahttp://127.0.0.1:8082/AAAmodel/asc.shtml</span>
        location /model/ <span class="token punctuation">{</span>
            proxy_pass   http://127.0.0.1:8082/AAA<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
<span class="token comment">#\u60C5\u666F5</span>
        <span class="token comment">#\u8BBF\u95EE\u5730\u5740\uFF1Ahttp://localhost:8081/model/asc.shtml</span>
        <span class="token comment">#\u6700\u7EC8\u4EE3\u7406\uFF1Ahttp://127.0.0.1:8082/asc.shtml</span>
        location /model <span class="token punctuation">{</span>
            proxy_pass   http://127.0.0.1:8082/<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
<span class="token comment">#\u60C5\u666F6</span>
        <span class="token comment">#\u8BBF\u95EE\u5730\u5740\uFF1Ahttp://localhost:8081/modelBBB/asc.shtml</span>
        <span class="token comment">#\u6700\u7EC8\u4EE3\u7406\uFF1Ahttp://127.0.0.1:8082/asc.shtml</span>
        location /model <span class="token punctuation">{</span>
            proxy_pass   http://127.0.0.1:8082/<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
  
  
        location /opus-front-sso <span class="token punctuation">{</span>
            proxy_pass   http://10.194.170.94/opus-front-sso<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        location /awater <span class="token punctuation">{</span>
            proxy_pass   http://10.194.170.94/awater<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),t=[e];function o(c,p){return s(),a("div",null,t)}const u=n(l,[["render",o],["__file","nginx_proxy.html.vue"]]);export{u as default};
