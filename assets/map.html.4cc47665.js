import{_ as n,o as i,c as e,a as l}from"./app.86304890.js";const s={},d=l(`<h2 id="\u904D\u5386\u6570\u636E\u7684\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u904D\u5386\u6570\u636E\u7684\u65B9\u6CD5" aria-hidden="true">#</a> \u904D\u5386\u6570\u636E\u7684\u65B9\u6CD5</h2><ul><li><strong>\u904D\u5386\u6570\u7EC4\uFF1Amap &amp;&amp; forEach</strong></li></ul><div class="language-JS ext-JS line-numbers-mode"><pre class="language-JS"><code>import React from &#39;react&#39;;

class App extends React.Component {
  render() {
    let arr = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;];
    return (
      &lt;ul&gt;
        {
          arr.map((item, index) =&gt; {
            return &lt;li key={index}&gt;{item}&lt;/li&gt;
          })
        }
      &lt;/ul&gt;
    )
  }
}

class App extends React.Component {
  render() {
    let arr = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;];
    return (
      &lt;ul&gt;
        {
          arr.forEach((item, index) =&gt; {
            return &lt;li key={index}&gt;{item}&lt;/li&gt;
          })
        }
      &lt;/ul&gt;
    )
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>\u904D\u5386\u5BF9\u8C61\uFF1Amap &amp;&amp; for in</strong></li></ul><div class="language-JS ext-JS line-numbers-mode"><pre class="language-JS"><code>class App extends React.Component {
  render() {
    let obj = {
      a: 1,
      b: 2,
      c: 3
    }
    return (
      &lt;ul&gt;
        {
          (() =&gt; {
            let domArr = [];
            for(const key in obj) {
              if(obj.hasOwnProperty(key)) {
                const value = obj[key]
                domArr.push(&lt;li key={key}&gt;{value}&lt;/li&gt;)
              }
            }
            return domArr;
          })()
        }
      &lt;/ul&gt;
    )
  }
}

// Object.entries() \u628A\u5BF9\u8C61\u8F6C\u6362\u6210\u6570\u7EC4
class App extends React.Component {
  render() {
    let obj = {
      a: 1,
      b: 2,
      c: 3
    }
    return (
      &lt;ul&gt;
        {
          Object.entries(obj).map(([key, value], index) =&gt; {   // item\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u628Aitem\u89E3\u6784\uFF0C\u5199\u6CD5\u662F[key, value]
            return &lt;li key={key}&gt;{value}&lt;/li&gt;
          })
        }
      &lt;/ul&gt;
    )
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),v=[d];function r(a,c){return i(),e("div",null,v)}const m=n(s,[["render",r],["__file","map.html.vue"]]);export{m as default};
