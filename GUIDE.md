# 项目指南

## 项目结构

```
.
├── package.json
├── docs/
│   ├── README.md                 # 首页（type: Custom）
│   ├── about.md                  # 关于页
│   ├── friends.md                # 友链页
│   ├── blog/                     # 博客文章
│   ├── notes/                    # 笔记（doc 集合）
│   └── .vuepress/
│       ├── config.ts             # 站点配置（改后需重启）
│       ├── plume.config.ts       # 主题配置（支持热更新）
│       ├── navbar.ts             # 导航栏
│       ├── client.ts             # 注册自定义组件
│       ├── public/               # 静态资源
│       └── theme/
│           ├── components/       # 首页自定义组件
│           └── data/friends.json # 友链数据
```

## 填写指南

全局搜索 `YOUR_` 替换为你的真实信息。

### 1. 全局配置

| 文件 | 字段 | 说明 |
|------|------|------|
| `docs/.vuepress/config.ts` | `title` | 站点标题 |
| | `head` favicon | 站点图标路径 |
| | `hostname` | 部署域名（SEO） |
| | `contributors.info` | GitHub 用户名 |
| `docs/.vuepress/plume.config.ts` | `logo` | 导航栏 Logo |
| | `profile.name` | 昵称 |
| | `profile.description` | 座右铭 |
| | `profile.avatar` | 头像 URL |
| | `profile.location` | 地区 |
| | `collections[].social` | 社交链接 |
| | `footer.message` | 页脚文字 |

### 2. 首页组件

| 文件 | 填写内容 |
|------|----------|
| `theme/components/Custom.vue` | 顶部 GitHub 链接、头像、邮箱；座右铭两行；GitHub 贡献图用户名 |
| `theme/components/AboutMeName.vue` | 问候语、昵称、一句话介绍 |
| `theme/components/AboutMeSkill.vue` | `technology` / `tools` 数组，每项 `{ type, icon }` |
| `theme/components/AboutMeLife.vue` | `lifeData` 饼图数据（生活/学习/工作占比） |
| `theme/components/AboutMeCharacter.vue` | MBTI 标题与类型；替换 `public/ISFJ-A.png` |
| `theme/data/friends.json` | 友链列表 `name/link/avatar/desc` |

技能图标在 [Iconify](https://icon-sets.iconify.design/) 查找，格式如 `logos:vue`、`devicon:java`。

### 3. 友链页 `docs/friends.md`

- 友链卡片由 `friends.json` 驱动，通过 `<AllFriendContent/>` 渲染
- 修改「我的友链信息」yaml 块和申请说明

### 4. 关于页 `docs/about.md`

- 个人介绍段落
- 技术栈表格
- 网站运营表格
- 可嵌入 GitHub 贡献图、打字机动画等

### 5. 博客文章 `docs/blog/*.md`

中文写在 `docs/blog/`，英文写在 `docs/en/blog/`，目录结构保持一致，不要混在同一文件：

```yaml
---
title: 文章标题
createTime: 2025/01/01 12:00:00
tags: [标签1, 标签2]
permalink: /blog/slug/
---
```

英文 permalink 须以 `/en/` 开头，例如 `/en/blog/slug/`。

标签页 `/blog/tags/`、归档页 `/blog/archives/` 自动生成。

### 6. 笔记 `docs/notes/`

中文写在 `docs/notes/`，英文写在 `docs/en/notes/`，permalink 分别用 `/notes/` 与 `/en/notes/` 前缀。

导航栏「笔记」下拉在 `navbar.ts` 的 `items` 中配置。

新增笔记分类：在 `plume.config.ts` 的 `collections` 中已有 `type: 'doc'` 配置，目录结构即侧边栏。

### 7. 静态资源 `docs/.vuepress/public/`

| 文件 | 用途 |
|------|------|
| `plume.svg` | 默认头像/Logo（替换为你的） |
| `ISFJ-A.png` | 首页性格配图 |
| `bg-3.jpg` | 首页背景图 |
| `images/hello.png` | 关于页头图 |

### 8. 可选功能

**Umami 统计** — `config.ts` 的 `head` 中取消注释并填写 `data-website-id` 和 `src`。

**Twikoo 评论** — `config.ts` 的 `comment` 中取消注释并填写 `envId`。

## 部署

```bash
pnpm docs:build
```

产物目录：`docs/.vuepress/dist/`，上传至任意静态托管即可。
