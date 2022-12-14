# Nginx 代理匹配规则

#### location配置规则

1. **匹配模式及顺序举例**

- location = /uri = 开头表示精确匹配，只有完全匹配上才能生效
- location ^~ /uri ^~ 开头对 URL 路径进行前缀匹配，并且在正则之前
- location ~ pattern ~ 开头表示区分大小写的正则匹配
- location /uri 不带任何修饰符，也表示前缀匹配，但是在正则匹配之后，如果没有正则命中，命中最长的规则
- location / 通用匹配，任何未匹配到其它 location 的请求都会匹配到，相当于 switch 中的 default

2. **location 是否以“／”结尾**

- 在 ngnix 中 location 进行的是模糊匹配
- 没有“/”结尾时，location /abc/def 可以匹配 /abc/defghi 请求，也可以匹配 /abc/def/ghi 等
- 而有“/”结尾时，location /abc/def/ 不能匹配 /abc/defghi 请求，只能匹配 /abc/def/anything 这样的请求


#### proxy_pass配置规则
- 配置 proxy_pass 时，当在后面的 url 加上了 /，相当于是绝对路径，则 Nginx 不会把 location 中匹配的路径部分加入代理 uri。

- 如果配置 proxy_pass 时，后面没有 /，Nginx 则会把匹配的路径部分加入代理 uri。

```shell
server {
        listen       8081;
        server_name  localhost;
  
        location / {
            root   html;
            index  index.html index.htm;
        }
#情景1:proxy_pass后有/ ，表绝对路径，不把匹配部分加入最终代理路径（location 和proxy_pass结尾一致）
        #访问地址：http://localhost:8081/WCP.Service/wcp/modeladapter/download/asc.shtml
        #最终代理：http://10.194.171.7:13082/modeladapter/download/asc.shtml
        location /WCP.Service/wcp/modeladapter/download/ {
            proxy_pass   http://10.194.171.7:13082/modeladapter/download/;
        }
        #访问地址：http://localhost:8081/model/asc.shtml
        #最终代理：http://127.0.0.1:8082/model/asc.shtml
        location /model/ {
            proxy_pass   http://127.0.0.1:8082/model/;
        }
        #情景2:proxy_pass后有/ ，表绝对路径，不把匹配部分加入最终代理路径（location 和proxy_pass结尾不一致）
        #访问地址：http://localhost:8081/model/asc.shtml
        #最终代理：http://127.0.0.1:8082/asc.shtml
        location /model/ {
            proxy_pass   http://127.0.0.1:8082/;
        }
#情景3：proxy_pass后没有 / ，Nginx会把匹配部分带到代理的url
        #访问地址：http://localhost:8081/model/asc.shtml
        #最终代理：http://127.0.0.1:8082/model/asc.shtml
        location /model/ {
            proxy_pass   http://127.0.0.1:8082;
        }
  
#情景4
        #访问地址：http://localhost:8081/model/asc.shtml
        #最终代理：http://127.0.0.1:8082/AAAmodel/asc.shtml
        location /model/ {
            proxy_pass   http://127.0.0.1:8082/AAA;
        }
#情景5
        #访问地址：http://localhost:8081/model/asc.shtml
        #最终代理：http://127.0.0.1:8082/asc.shtml
        location /model {
            proxy_pass   http://127.0.0.1:8082/;
        }
#情景6
        #访问地址：http://localhost:8081/modelBBB/asc.shtml
        #最终代理：http://127.0.0.1:8082/asc.shtml
        location /model {
            proxy_pass   http://127.0.0.1:8082/;
        }
  
  
        location /opus-front-sso {
            proxy_pass   http://10.194.170.94/opus-front-sso;
        }
        location /awater {
            proxy_pass   http://10.194.170.94/awater;
        }
}
```

