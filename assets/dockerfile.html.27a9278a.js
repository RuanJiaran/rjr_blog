import{_ as n,o as e,c as s,a}from"./app.908a3111.js";const i={},l=a(`<h1 id="dockerfile" tabindex="-1"><a class="header-anchor" href="#dockerfile" aria-hidden="true">#</a> Dockerfile</h1><p><strong>Dockerfile \u6587\u4EF6</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>FROM node:14.15.0

RUN <span class="token function">npm</span> <span class="token function">install</span> node-sass

WORKDIR /www/react-admin

COPY <span class="token builtin class-name">.</span> /www/react-admin

RUN <span class="token function">npm</span> <span class="token function">install</span>

CMD <span class="token function">npm</span> run start:mock

EXPOSE <span class="token number">3000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>build \u955C\u50CF</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-f</span> f:/www/react-admin-home-h5/Dockerfile <span class="token parameter variable">-t</span> react-admin:1.0 <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>run \u542F\u52A8\u5BB9\u5668</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">-p</span> <span class="token number">3000</span>:3000 <span class="token parameter variable">-v</span> /f/www/react-admin-home-h5:/www/react-admin react-admin:1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7),r=[l];function c(d,t){return e(),s("div",null,r)}const p=n(i,[["render",c],["__file","dockerfile.html.vue"]]);export{p as default};
