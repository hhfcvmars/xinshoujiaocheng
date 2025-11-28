在 **腾讯云 CentOS 7.9** 上搭建 **宝塔（BT）面板环境**，按下面步骤操作即可：

---

## ✅ 1. 连接服务器

用 SSH 连接服务器（终端）：

```bash
ssh root@你的服务器IP
```

---

## ✅ 2. 关闭 SELinux（必须）

```bash
sed -i 's/SELINUX=enforcing/SELINUX=disabled/g' /etc/selinux/config
setenforce 0
```

---

## ✅ 3. 允许宝塔端口（默认 8888，可改）

腾讯云服务器需要在 **云控制台防火墙、安全组** 放行端口：

| 端口    | 作用        |
| ----- | --------- |
| 8888  | 宝塔面板访问    |
| 80    | 网站        |
| 443   | HTTPS     |
| 20/21 | FTP       |
| 3306  | MySQL（按需） |
| 6379  | Redis（按需） |

🛑 **特别注意：**
除了系统防火墙外，还要在 **腾讯云安全组里手动放行**，否则访问不了宝塔！

---

## ✅ 4. 安装宝塔 CentOS 版

运行官方一键安装脚本：

```bash
yum install -y wget && wget -O install.sh https://download.bt.cn/install/install_6.0.sh && bash install.sh ed8484bec
```

安装过程会自动：

* 安装宝塔面板
* 打开防火墙端口
* 生成初始账号密码

---

## ✅ 5. 安装完成后记录登录信息

安装完成终端会输出类似：

```
Bt-Panel: http://你的服务器IP:8888
username: xxxxx
password: xxxxx
```

访问面板登录：

```
http://你的服务器IP:8888
```

输入账号密码即可进入宝塔环境 🎉

---

## ✅ 6. 进入宝塔后推荐安装环境（Web 软件）

建议在面板里一键安装：

| 软件      | 推荐选择                      |
| ------- | ------------------------- |
| Web 服务器 | Nginx 或 Apache（推荐Nginx）   |
| 数据库     | MySQL 5.7 或 8.0           |
| PHP     | 7.4 / 8.0 / 8.2（按需）       |
| 缓存      | Redis / Memcached（按需）     |
| 其他      | Pure-FTPd、Docker、Node.js等 |

宝塔提供图形界面直接安装，无需手动编译。

---

## 可选优化

### ① 关闭系统默认 Firewalld（使用宝塔管理）

```bash
systemctl stop firewalld
systemctl disable firewalld
```

### ② 更新系统软件

```bash
yum update -y
```

### ③ 服务器重启

```bash
reboot
```

---

## 可能遇到的问题

| 问题                   | 解决方式                  |
| -------------------- | --------------------- |
| 访问 8888 无法打开         | 腾讯云安全组放行 8888         |
| 404 / installed page | Web 软件中安装 Nginx / PHP |
| MySQL 连不上            | 安全组放行 3306（不建议直接公网访问） |

---

## ✅ 结果

你的腾讯CentOS 7.9 服务器将具备：

✔ 宝塔 GUI 管理
✔ 网站部署
✔ 数据库、PHP、FTP、Docker、监控、防火墙等一站式管理
