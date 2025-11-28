# React 项目打包部署完整指南

React 是目前最流行的前端框架之一，本文将详细介绍如何打包和部署 React 项目到生产环境。

## 一、项目打包

### 1.1 使用 npm 打包

在项目根目录下运行以下命令：

```bash
npm run build
```

这个命令会：
- 将所有 JavaScript 和 CSS 文件进行压缩和优化
- 生成生产环境的静态文件
- 输出到 `build` 或 `dist` 目录（取决于你的配置）

### 1.2 使用 yarn 打包

如果你使用 yarn 作为包管理器：

```bash
yarn build
```

### 1.3 打包优化建议

**代码分割**
```javascript
// 使用 React.lazy 进行代码分割
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
```

**环境变量配置**
```bash
# .env.production
REACT_APP_API_URL=https://api.example.com
REACT_APP_ENV=production
```

## 二、部署方式

### 2.1 部署到 Nginx

**步骤 1：安装 Nginx**
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install nginx

# CentOS/RHEL
sudo yum install nginx
```

**步骤 2：配置 Nginx**

创建配置文件 `/etc/nginx/sites-available/myapp`：

```nginx
server {
    listen 80;
    server_name example.com;
    root /var/www/myapp/build;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # 静态资源缓存
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

**步骤 3：上传文件并启动**
```bash
# 上传 build 文件夹到服务器
scp -r build/* user@server:/var/www/myapp/build/

# 启用配置
sudo ln -s /etc/nginx/sites-available/myapp /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 2.2 部署到 Vercel

Vercel 是最简单的部署方式之一，特别适合 React 项目。

**步骤 1：安装 Vercel CLI**
```bash
npm i -g vercel
```

**步骤 2：登录并部署**
```bash
vercel login
vercel
```

**步骤 3：配置文件（可选）**

创建 `vercel.json`：
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

### 2.3 部署到 GitHub Pages

**步骤 1：安装 gh-pages**
```bash
npm install --save-dev gh-pages
```

**步骤 2：修改 package.json**
```json
{
  "homepage": "https://yourusername.github.io/your-repo-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

**步骤 3：部署**
```bash
npm run deploy
```

### 2.4 部署到宝塔面板

如果你使用宝塔面板管理服务器：

1. **创建网站**
   - 登录宝塔面板
   - 点击"网站" → "添加站点"
   - 填写域名和根目录

2. **上传文件**
   - 将 `build` 文件夹内容上传到网站根目录
   - 或使用 FTP/SFTP 工具上传

3. **配置伪静态**
   
   在宝塔面板的网站设置中，添加以下伪静态规则：
   ```nginx
   location / {
       try_files $uri $uri/ /index.html;
   }
   ```

4. **配置 SSL（推荐）**
   - 在网站设置中点击 SSL
   - 选择 Let's Encrypt 免费证书
   - 点击申请并部署

## 三、常见问题

### 3.1 路由刷新 404 问题

**问题**：使用 React Router 时，刷新页面出现 404 错误。

**解决方案**：
- Nginx：使用 `try_files $uri $uri/ /index.html;`
- Apache：创建 `.htaccess` 文件
  ```apache
  <IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
  </IfModule>
  ```

### 3.2 环境变量不生效

确保环境变量以 `REACT_APP_` 开头：
```javascript
// ✅ 正确
const apiUrl = process.env.REACT_APP_API_URL;

// ❌ 错误
const apiUrl = process.env.API_URL;
```

### 3.3 打包后文件过大

**优化建议**：
1. 使用代码分割（Code Splitting）
2. 启用 Tree Shaking
3. 压缩图片资源
4. 使用 CDN 加载第三方库
5. 分析打包体积：
   ```bash
   npm install --save-dev webpack-bundle-analyzer
   ```

## 四、性能优化

### 4.1 启用 Gzip 压缩

在 Nginx 配置中添加：
```nginx
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/javascript;
```

### 4.2 配置缓存策略

```nginx
# HTML 文件不缓存
location ~* \.html$ {
    expires -1;
}

# 静态资源长期缓存
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

### 4.3 使用 CDN

将静态资源上传到 CDN，修改 `package.json`：
```json
{
  "homepage": "https://cdn.example.com"
}
```

## 五、持续集成/持续部署 (CI/CD)

### 5.1 使用 GitHub Actions

创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
    
    - name: Deploy to Server
      uses: easingthemes/ssh-deploy@main
      env:
        SSH_PRIVATE_KEY: ${{ secrets.SSH_PRIVATE_KEY }}
        REMOTE_HOST: ${{ secrets.REMOTE_HOST }}
        REMOTE_USER: ${{ secrets.REMOTE_USER }}
        TARGET: /var/www/myapp/build
```

## 六、总结

React 项目的打包和部署流程可以总结为：

1. **开发阶段**：使用 `npm start` 进行本地开发
2. **打包阶段**：使用 `npm run build` 生成生产文件
3. **部署阶段**：选择合适的部署平台（Nginx、Vercel、GitHub Pages 等）
4. **优化阶段**：配置缓存、压缩、CDN 等优化策略
5. **自动化**：使用 CI/CD 实现自动部署

选择合适的部署方式取决于你的项目需求、预算和技术栈。对于个人项目，推荐使用 Vercel 或 GitHub Pages；对于企业项目，建议使用自己的服务器配合 Nginx 和 CI/CD 流程。
