# XYJ's Blog

基于 [vuepress-theme-plume](https://theme-plume.vuejs.press/) 搭建。

## 环境要求

- Node.js `^18.20.0` 或 `>=20.0.0`
- pnpm（推荐）

> **重要**：项目路径不能含单引号 `'`。原目录 `XYJ's Blog` 会导致 Vite 解析 import 失败，请始终在 `e:\WebProject\XYJ-Blog` 下开发。

## 快速启动

```bash
pnpm install
pnpm docs:dev
```

浏览器访问 `http://localhost:8080`

```bash
pnpm docs:build      # 构建
pnpm docs:preview    # 预览构建产物
pnpm vp-update       # 更新 vuepress 和主题
```

## 项目指南

配置、内容填写与部署说明见 [GUIDE.md](./GUIDE.md)。
