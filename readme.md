# django_celery 项目前端

[TOC]

## 使用的构建工具、框架：vite  

```bash
# 安装node
# 版本：>14.17.0
# 安装vite
npm init @vitejs/app
# 依照提示创建项目
# 启动项目
npm run dev
# 构建项目
npm run dev
```



```js
export default defineConfig({
  // 配置base public path
  base: "/static/", 
  build: {
    // 配置项目构建的生产文件夹
    outDir: '../django_celery/dist/'
  },
  plugins: [vue()]
})
```

