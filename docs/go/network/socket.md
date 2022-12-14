# socket

![image.png](/img/1660314051482-5850f853-3236-441f-8a04-6739f41c6185.png)

## 用法

main.go

```go
package main

func main() {
	server := NewSocketServer("127.0.0.1", 8888)
	server.Start()
}
```



server.go

```go
package main

import (
	"fmt"
	"net"
)

type Server struct {
	Ip   string
	Prot int
}

// 实例化 socket
func NewSocketServer(ip string, port int) *Server {
	server := &Server{
		Ip:   ip,
		Prot: port,
	}
	return server
}

// 处理连接
func (this *Server) Hander(conn net.Conn) {
	fmt.Println("连接成功")
}

// 启动 socket
func (this *Server) Start() {
	listener, err := net.Listen("tcp", fmt.Sprintf("%s:%d", this.Ip, this.Prot))
	if err != nil {
		fmt.Println("net.Listen err", err)
		return
	}
	// 关闭连接
	defer listener.Close()

	for {
		// accept
		conn, err := listener.Accept()
		if err != nil {
			fmt.Println("listen accept err:", err)
			continue
		}
		// do hander
		go this.Hander(conn)
	}
}
```

