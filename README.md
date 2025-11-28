# 新手教程 - AI工具导航

一个精美的AI工具导航页面，使用 React + Vite + TailwindCSS 构建。

## 功能特性

- 🎨 精美的UI设计，支持响应式布局
- 📱 移动端友好，侧边栏可收缩
- 🔍 四大分类：AI图像、视频、编程、设计工具
- 📢 顶部广告位支持
- ⬆️ 返回顶部按钮
- 🎯 滚动时导航自动高亮

## 环境要求

- Node.js >= 18.0.0 (推荐 v22.17.1)
- npm >= 9.0.0

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000 查看效果

### 3. 构建生产版本

```bash
npm run build
```

构建产物在 `dist` 目录

### 4. 预览生产版本

```bash
npm run preview
```

## 项目结构

```
ai-tools-nav/
├── public/
│   └── favicon.svg          # 网站图标
├── src/
│   ├── components/           # React组件
│   │   ├── AdBanner.jsx      # 广告横幅
│   │   ├── MobileHeader.jsx  # 移动端头部
│   │   ├── ScrollToTop.jsx   # 返回顶部
│   │   ├── Sidebar.jsx       # 侧边栏
│   │   ├── ToolCard.jsx      # 工具卡片
│   │   ├── ToolSection.jsx   # 工具分类
│   │   └── index.js          # 组件导出
│   ├── data/
│   │   └── tools.js          # 工具数据配置
│   ├── App.jsx               # 主应用组件
│   ├── index.css             # 全局样式
│   └── main.jsx              # 入口文件
├── index.html                # HTML模板
├── package.json              # 项目配置
├── postcss.config.js         # PostCSS配置
├── tailwind.config.js        # Tailwind配置
└── vite.config.js            # Vite配置
```

## 自定义配置

### 修改工具数据

编辑 `src/data/tools.js` 文件，可以添加、修改或删除工具项目。

### 修改广告配置

在 `src/data/tools.js` 中修改 `adConfig` 对象：

```javascript
export const adConfig = {
  url: 'https://your-ad-link.com',
  title: '广告标题',
  highlight: '高亮文字',
  subtitle: '副标题描述',
  buttonText: '按钮文字'
}
```

### 修改主题颜色

编辑 `tailwind.config.js` 中的 `colors` 配置。

## 技术栈

- [React 18](https://react.dev/)
- [Vite 6](https://vitejs.dev/)
- [TailwindCSS 3](https://tailwindcss.com/)

## License

MIT
