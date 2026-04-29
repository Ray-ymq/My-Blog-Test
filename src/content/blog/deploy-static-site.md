---
title: "静态博客部署思路"
description: "梳理 Astro 静态博客未来接入云服务器和域名时的基本路径。"
pubDate: 2026-04-28
tags: ["部署", "Nginx", "Astro"]
draft: false
---

Astro 默认可以生成静态站点。执行构建命令后，所有产物都会放在 `dist/` 目录里。

```bash
npm run build
```

未来接入云服务器和域名时，常见做法是把 `dist/` 上传到服务器，再由 Nginx 对外提供访问。

## 基础路径

1. 购买云服务器并配置安全组。
2. 安装 Nginx。
3. 把域名解析到服务器公网 IP。
4. 上传 `dist/` 到 Nginx 配置的站点目录。
5. 配置 HTTPS 证书。

这个项目会保持静态输出，因此也可以部署到对象存储、CDN、GitHub Pages、Vercel 或 Netlify。
