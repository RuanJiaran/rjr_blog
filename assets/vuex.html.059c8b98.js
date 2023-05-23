import{_ as t,o as p,c as e,b as n,d as s,e as o,a as c,r as i}from"./app.832893c4.js";const l={},u=n("h1",{id:"vuex",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vuex","aria-hidden":"true"},"#"),s(" vuex")],-1),r=n("h2",{id:"vuex-\u662F\u4EC0\u4E48",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vuex-\u662F\u4EC0\u4E48","aria-hidden":"true"},"#"),s(" Vuex \u662F\u4EC0\u4E48")],-1),k={href:"https://vuex.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},d=c(`<h2 id="vuex-\u7531\u4E94\u90E8\u5206\u7EC4\u6210" tabindex="-1"><a class="header-anchor" href="#vuex-\u7531\u4E94\u90E8\u5206\u7EC4\u6210" aria-hidden="true">#</a> vuex \u7531\u4E94\u90E8\u5206\u7EC4\u6210</h2><ul><li>state: \u6570\u636E</li><li>actions: \u53EF\u4EE5\u5305\u542B\u5F02\u6B65\u64CD\u4F5C</li><li>mutations: \u552F\u4E00\u53EF\u4EE5\u4FEE\u6539 state \u6570\u636E\u7684\u573A\u6240</li><li>getters: \u7C7B\u4F3C\u4E8E vue \u7EC4\u4EF6\u4E2D\u7684\u8BA1\u7B97\u5C5E\u6027\uFF0C\u5BF9 state \u6570\u636E\u8FDB\u884C\u8BA1\u7B97\uFF08\u4F1A\u88AB\u7F13\u5B58\uFF09</li><li>modules: \u6A21\u5757\u5316\u7BA1\u7406 store\uFF08\u4ED3\u5E93\uFF09\uFF0C\u6BCF\u4E2A\u6A21\u5757\u62E5\u6709\u81EA\u5DF1\u7684 state\u3001mutation\u3001action\u3001getter</li></ul><h2 id="\u5982\u4F55\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u4F7F\u7528" aria-hidden="true">#</a> \u5982\u4F55\u4F7F\u7528</h2><p>store\u2014&gt;index.js</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>vuex<span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">state</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">token</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">set_token</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> commit <span class="token punctuation">}</span><span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;to_token&#39;</span><span class="token punctuation">,</span> val<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> mutations <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">to_token</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    state<span class="token punctuation">.</span>token <span class="token operator">=</span> val
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> getters <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">let</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  state<span class="token punctuation">,</span>
  actions<span class="token punctuation">,</span>
  mutations<span class="token punctuation">,</span>
  getters<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>export <span class="token operator">=</span> store
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>home.vue \u8C03\u7528</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        {{$store.state.token}}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span>
    export default={
        name: &#39;Home&#39;,
        data() {
            return {
                tel: &#39;&#39;,
            }
        },
        created(){
            //\u8C03\u7528acionts\u4E2D\u7684\u65B9\u6CD5
            this.$store.dispatch(&#39;set_token&#39;,12345);
            //\u8C03\u7528mutations\u4E2D\u7684\u65B9\u6CD5
            this.$store.commit(&#39;to_token&#39;,123456)
        }
    }
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6570\u636E\u6301\u4E45\u5316" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u6301\u4E45\u5316" aria-hidden="true">#</a> \u6570\u636E\u6301\u4E45\u5316</h2><p>\u95EE\u9898\uFF1A\u5B58\u50A8\u5728 vuex \u4E2D\u7684\u72B6\u6001\uFF0C\u5237\u65B0\u9875\u9762\uFF0C\u4F1A\u4E22\u5931\u3002 \u4E3A\u4E86\u89E3\u51B3\u5237\u65B0\u9875\u9762\u6570\u636E\u4E22\u5931\uFF0C\u624D\u6709\u4E86\u6570\u636E\u6301\u4E45\u5316\uFF0C\u6700\u7B80\u5355\u7684\u505A\u6CD5\u5C31\u662F\u5229\u7528\u63D2\u4EF6 <code>vuex-persistedState</code></p><p><strong>\u5B89\u88C5\u4F9D\u8D56</strong></p><p><code>cnpm install vuex-persistedState -S</code></p><p><strong>\u4F7F\u7528</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> createPersistedState <span class="token keyword">from</span> <span class="token string">&#39;vuex-persistedstate&#39;</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  state<span class="token punctuation">,</span>
  mutations<span class="token punctuation">,</span>
  actions<span class="token punctuation">,</span>
  getters<span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">createPersistedState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">storage</span><span class="token operator">:</span> sessionStorage<span class="token punctuation">,</span>
      <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;token&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//\u4F1A\u81EA\u52A8\u4FDD\u5B58\u521B\u5EFA\u7684\u72B6\u6001\u3002\u5237\u65B0\u8FD8\u5728</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>!&gt; storage:\u5B58\u50A8\u65B9\u5F0F\u3002\uFF08sessionStorage\uFF0ClocalStarage\uFF09 key: \u5B9A\u4E49\u672C\u5730\u5B58\u50A8\u4E2D\u7684 key</p><h2 id="\u6A21\u5757\u5316\u7BA1\u7406\u6570\u636E-modules" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5757\u5316\u7BA1\u7406\u6570\u636E-modules" aria-hidden="true">#</a> \u6A21\u5757\u5316\u7BA1\u7406\u6570\u636E \uFF08modules\uFF09</h2><p>\u9879\u76EE\u5E9E\u5927\uFF0C\u6570\u636E\u4FE1\u606F\u91CF\u7279\u522B\u5927\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8003\u8651\u5206\u6A21\u5757\u5F62\u5F0F\u7BA1\u7406\u6570\u636E\uFF0C\u6BD4\u5982 user \u6A21\u5757\u7BA1\u7406\u7528\u6237\u4FE1\u606F\u6570\u636E\uFF0Ccart \u6A21\u5757\u7BA1\u7406\u8D2D\u7269\u8F66\u6570\u636E\uFF0Cshop \u6A21\u5757\u7BA1\u7406\u5546\u54C1\u4FE1\u606F\u6570\u636E</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>vuex<span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">state</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">token</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">set_token</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> commit <span class="token punctuation">}</span><span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;to_token&#39;</span><span class="token punctuation">,</span> val<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> mutations <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">to_token</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    state<span class="token punctuation">.</span>token <span class="token operator">=</span> val
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> getters <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">//user\u6A21\u5757</span>
<span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">namespaced</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//\u4E00\u5B9A\u8981\u5F00\u59CB\u547D\u540D\u7A7A\u95F4\u3002</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">userid</span><span class="token operator">:</span> <span class="token number">1234</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token constant">SET_USERID</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>userid <span class="token operator">=</span> val
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u8D2D\u7269\u8F66\u6570\u636E\u7684\u6A21\u5757</span>
<span class="token keyword">let</span> cart <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">namespaced</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">userid</span><span class="token operator">:</span> <span class="token number">567</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  state<span class="token punctuation">,</span>
  mutations<span class="token punctuation">,</span>
  actions<span class="token punctuation">,</span>
  getters<span class="token punctuation">,</span>
  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    user<span class="token punctuation">,</span>
    cart<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">createPersistedState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">storage</span><span class="token operator">:</span> sessionStorage<span class="token punctuation">,</span>
      <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;token&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//\u4F1A\u81EA\u52A8\u4FDD\u5B58\u521B\u5EFA\u7684\u72B6\u6001\u3002\u5237\u65B0\u8FD8\u5728</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> store
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>!&gt; \u4E0A\u9762\u7684 user\uFF0Ccart \u6A21\u5757\u6211\u4EEC\u53EF\u4EE5\u653E\u5728\u5355\u72EC\u6587\u4EF6\u4E2D\uFF0C\u8FD9\u6837\u907F\u514D\u5355\u4E2A\u6587\u4EF6\u592A\u5927\u4E0D\u5229\u4E8E\u7EF4\u62A4</p><p>home.vue \u5982\u4F55\u4F7F\u7528</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u83B7\u53D6user\u6A21\u5757\u7684\`userid\`</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>user<span class="token punctuation">.</span>userid
<span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;user/SET_USERID&#39;</span><span class="token punctuation">,</span> <span class="token number">12345</span><span class="token punctuation">)</span> <span class="token comment">// \u524D\u9762\u662F\u6307\u5B9A\u6A21\u5757user \u4E2D\u7684SET_USERID \u65B9\u6CD5\uFF0C\u540E\u9762\u662F\u4F20\u53C2 \u53EF\u4EE5\u662F\u5BF9\u8C61\u3001\u6570\u7EC4\u3001\u5B57\u7B26\u4E32\u7B49</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8F85\u52A9\u51FD\u6570-\u8BED\u6CD5\u7CD6-\u9AD8\u7EA7\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8F85\u52A9\u51FD\u6570-\u8BED\u6CD5\u7CD6-\u9AD8\u7EA7\u7528\u6CD5" aria-hidden="true">#</a> \u8F85\u52A9\u51FD\u6570\uFF08\u8BED\u6CD5\u7CD6\uFF09\u9AD8\u7EA7\u7528\u6CD5</h2><p>\u8F85\u52A9\u51FD\u6570\u53EF\u4EE5\u628A<code>vuex</code>\u4E2D\u7684\u6570\u636E\u548C\u65B9\u6CD5\u6620\u5C04\u5230<code>vue\u7EC4\u4EF6</code>\u4E2D\u3002\u8FBE\u5230\u7B80\u5316\u64CD\u4F5C\u7684\u76EE\u7684</p><ul><li><code>mapState</code></li><li><code>mapActions</code></li><li><code>mapMutations</code></li><li><code>mapGetters</code></li></ul><p><strong>\u5982\u4F55\u4F7F\u7528</strong></p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    {{ token }}
    {{ token - x }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> mapActions<span class="token punctuation">,</span> mapGetters<span class="token punctuation">,</span> mapMutations<span class="token punctuation">,</span> mapState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createNamespacedHelpers <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mapState</span><span class="token operator">:</span> mapStateUser<span class="token punctuation">,</span>
  <span class="token literal-property property">mapActions</span><span class="token operator">:</span> mapActionUser<span class="token punctuation">,</span>
  <span class="token literal-property property">mapMutations</span><span class="token operator">:</span> mapMutaionuser<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">createNamespacedHelpers</span><span class="token punctuation">(</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mapState</span><span class="token operator">:</span> mapStateCart<span class="token punctuation">,</span>
  <span class="token literal-property property">mapActions</span><span class="token operator">:</span> mapActionCart<span class="token punctuation">,</span>
  <span class="token literal-property property">mapMutations</span><span class="token operator">:</span> mapMutaionCart<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">createNamespacedHelpers</span><span class="token punctuation">(</span><span class="token string">&#39;cart&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">token</span><span class="token operator">:</span> <span class="token string">&#39;token&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token operator">...</span><span class="token function">mapGetters</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;token-x&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token operator">...</span><span class="token function">mapSateUser</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;userid&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token operator">...</span><span class="token function">mapStateCart</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">cartid</span><span class="token operator">:</span> <span class="token string">&#39;userid&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">//\u751F\u547D\u5468\u671F - \u521B\u5EFA\u5B8C\u6210\uFF08\u8BBF\u95EE\u5F53\u524Dthis\u5B9E\u4F8B\uFF09</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setToken</span><span class="token punctuation">(</span><span class="token string">&#39;123456&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">//\u751F\u547D\u5468\u671F - \u6302\u8F7D\u5B8C\u6210\uFF08\u8BBF\u95EEDOM\u5143\u7D20\uFF09</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">setToken</span><span class="token operator">:</span> <span class="token string">&#39;setToken&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token operator">...</span><span class="token function">mapMutations</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;SET_TOKEN&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token operator">...</span><span class="token function">mapMutaionUser</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">setId</span><span class="token operator">:</span> <span class="token string">&#39;setToken&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25);function v(m,b){const a=i("ExternalLinkIcon");return p(),e("div",null,[u,r,n("p",null,[s("\u8FD9\u91CC\u4E0D\u505A\u4ECB\u7ECD\uFF0C\u76F4\u63A5\u53BB\u770B "),n("a",k,[s("\u5B98\u7F51"),o(a)])]),d])}const y=t(l,[["render",v],["__file","vuex.html.vue"]]);export{y as default};
