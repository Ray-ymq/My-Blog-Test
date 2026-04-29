# My Blog

基于 Astro 的个人静态博客。文章使用 Markdown 管理，构建产物输出到 `dist/`，后续可以部署到云服务器 Nginx、对象存储、GitHub Pages、Vercel 等静态托管环境。

## 常用命令

```bash
npm install
npm run dev
npm run build
npm run preview
```

## 写文章

在 `src/content/blog/` 下新增 Markdown 文件：

```md
---
title: "文章标题"
description: "文章简介"
pubDate: 2026-04-29
updatedDate: 2026-04-29
tags: ["Astro", "博客"]
draft: false
---

正文内容。
```

`draft: true` 的文章不会出现在构建后的页面中。

## 个性化

站点名称、作者、简介、社交链接和头像路径集中配置在 `src/config/site.ts`。

正式绑定域名后，把 `astro.config.mjs` 里的 `site` 改为你的真实域名，例如：

```js
site: 'https://your-domain.com'
```
