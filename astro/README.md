# aiartifacts.art — Astro 主站

一个 AI 信徒的个人站点。基于 `designs/aiartifacts-home/` 的 hi-fi 原型生成，支持暗/亮双主题。

## 开发

```bash
cd astro
npm install
npm run dev      # http://localhost:4321
```

## 构建

```bash
npm run build    # 输出到 dist/
npm run preview  # 本地预览构建结果
```

部署到 Cloudflare Pages / Vercel / Netlify 时，把 `astro/` 作为根目录，构建命令 `npm run build`，输出目录 `dist`。

## 目录结构

```
astro/
├── astro.config.mjs        # 站点配置 + sitemap 集成
├── public/
│   ├── favicon.svg         # 内联 SVG favicon
│   └── robots.txt          # 指向 sitemap-index.xml
└── src/
    ├── styles/global.css   # 设计 token + 暗/亮主题（CSS 变量）
    ├── data/site.ts        # 所有内容数据（导航/作品/文章/工具/课程）
    ├── layouts/Layout.astro # SEO meta + JSON-LD + canonical + OG
    ├── components/         # Topbar / Hero / Section / ArtifactCard / Footer
    └── pages/index.astro   # 主页
```

## 内容修改

所有文本内容集中在 `src/data/site.ts`，改完即生效，无需触碰组件。

## 主题

- 默认：暗色终端风（`#0a0a0a` + 琥珀 `#c77d3a`）
- 亮色版：米白 `#f6f3ec` + 焦糖橙 `#a85a1a`
- 右上角 `~/light` / `~/dark` 按钮切换，选择记到 `localStorage`
- 首次访问跟随系统 `prefers-color-scheme`

## SEO

- 每页独立 title / description / canonical / OG / Twitter card
- `WebSite` + `Organization` JSON-LD（在 `Layout.astro`）
- `robots.txt` 允许全站抓取
- 部署：GitHub Action 自动构建并推送到 Cloudflare Pages（项目名 `aiartifacts.art`）

## 下一步

- [ ] 接入真实 daily 内容（从 `daily.aiartifacts.art` 的 RSS 拉取）
- [ ] 加 `/feed.xml`（用 `@astrojs/rss`）
- [ ] 作品/工具/课程单独详情页
