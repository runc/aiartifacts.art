export const site = {
  domain: "aiartifacts.art",
  url: "https://aiartifacts.art",
  title: "aiartifacts.art — 一个 AI 信徒的 artifact 集结地",
  description:
    "aiartifacts.art 是一个 AI 信徒的个人站点。这里产出可被复用的 artifact：日常观察、工具、作品与课程，全部围绕 AI。",
  keywords: "AI, artifact, 个人作品, 课程, daily, 工具, slide studio, doc agent, tick note",
  dailyUrl: "https://daily.aiartifacts.art/",
  toolsUrl: "https://tools.aiartifacts.art/",
  contactEmail: "hi@aiartifacts.art",
  rssPath: "/feed.xml",
  license: "CC BY-NC 4.0",
  buildDate: "2026-07-02"
} as const;

export const nav = [
  { idx: "01", label: "daily", href: site.dailyUrl, external: true },
  { idx: "02", label: "tools", href: "#tools", external: false },
  { idx: "03", label: "artifacts", href: "/artifacts", external: false },
  { idx: "04", label: "about", href: "#about", external: false },
  { idx: "05", label: "courses", href: "#courses", external: false }
] as const;

export const artifacts = [
  {
    id: "artifact_01",
    title: "slide-studio",
    slug: "slide-studio",
    desc: "纯浏览器端的 slide 工具，无需登录、无需后端，打开即用。把幻灯片做成可被复用的 artifact。",
    longDesc:
      "一个完全运行在浏览器里的 slide 工具：不依赖任何后端服务，不需要登录，所有数据存放在本地。它把『做一份幻灯片』从一次性产物变成可以被反复调用、版本化、复用的 artifact——和这个站点的理念一致。",
    tags: ["slide", "browser-only", "no-backend", "local-first"],
    status: "live",
    external: true,
    href: "https://ss.aiartifacts.art/"
  },
  {
    id: "artifact_02",
    title: "doc-agent",
    slug: "doc-agent",
    desc: "空间型知识文档 AI 编辑助手：像软件工程一样来写文档，知识工作者的新选择。",
    longDesc:
      "把软件工程的方法论搬进文档世界：版本化、可组合、可复用、可被 agent 接管。doc-agent 把零散的知识沉淀进一个可演化的空间，让文档像代码一样被工程化管理——这是知识工作者的新选择，也是 AI 时代文档该有的形态。",
    tags: ["doc", "knowledge", "agent", "spatial", "engineering"],
    status: "live",
    external: true,
    href: "https://da.aiartifacts.art/"
  },
  {
    id: "artifact_03",
    title: "cowart",
    slug: "cowart",
    desc: "纯浏览器无限画布 + AI 图像生成：tldraw 画布 × 多 provider AI 绘图，BYOK、无后端。",
    longDesc:
      "一个完全运行在浏览器里的无限画布 + AI 图像生成工具。基于 tldraw 提供可视化画布，用 Vercel AI SDK 驱动多步智能体工作流，支持 OpenAI / 字节 Seedream / 通义万相 / Gemini Nano Banana 多图像 provider（BYOK）。数据全部存放在浏览器 IndexedDB，无后端、无需登录。在画布上构思、标注、生成、迭代——把图像创作从一次性产物变成可演化的 artifact。",
    tags: ["canvas", "tldraw", "image-gen", "byok", "browser-only", "no-backend"],
    status: "live",
    external: true,
    href: "https://cw.aiartifacts.art/"
  },
  {
    id: "artifact_04",
    title: "tick-note",
    slug: "tick-note",
    desc: "浏览器即战场，逻辑即持仓。A 股全流程分析兵器库——Notebook 实验场 + Agent 副驾驶，本地协议直连行情，无云端黑箱。",
    longDesc:
      "Tick Note 是一套在浏览器内跑满全流程的 A 股分析兵器库——不绑券商终端，不依赖云端黑箱；每一行 Cell、每一次 Agent 推理，都在你自己的机器上完成。双模态作战：Notebook 是类 Jupyter 的 Cell 实验场（JS/TS 原生内核或 Pyodide Python，Wickra WASM 扛指标计算，Lightweight Charts 即时出图）；Agent 是自然语言驱动的分析副驾驶（Tool Loop 或 Deep Agents 双引擎，Skills 渐进披露，行情 / 财务 / 图表工具一键调度）。数据命脉：easy-tdx 本地协议直连通达信行情站，A 股 K 线、财务、盘口实时接入。API Key 仅存 localStorage，IndexedDB 本地持久化，断网也能复盘。开源 MIT，逻辑可审计——你掌控自己的 alpha。",
    tags: ["trading", "a-share", "notebook", "agent", "browser-only", "local-first", "byok"],
    status: "live",
    external: true,
    href: "https://ticknote.aiartifacts.art/"
  }
] as const;

export const writing = [
  { date: "2026-06-22", title: "为什么我把笔记叫做 artifact", href: site.dailyUrl },
  { date: "2026-06-15", title: "AI agent 失败的三个常见模式", href: site.dailyUrl },
  { date: "2026-06-08", title: "成为 AI 信徒的一年", href: site.dailyUrl },
  { date: "2026-05-30", title: "把工具当作品来写", href: site.dailyUrl },
  { date: "2026-05-21", title: "静态站点的长期主义", href: site.dailyUrl }
] as const;

export const tools = [
  { id: "tool_01", title: "prompt-linter — 在本地检查 prompt 的常见坏味道", where: "cli", ext: "oss", href: "#" },
  { id: "tool_02", title: "ai-snippet — 把一段对话沉淀成可复用的 prompt 片段", where: "web", ext: "free", href: "#" },
  { id: "tool_03", title: "artifact-init — 一键生成 artifact 目录结构", where: "cli", ext: "oss", href: "#" }
] as const;

export const courses = [
  {
    title: "AI artifact 工作流",
    desc: "从想法到可被复用的产物：怎么把日常的 AI 实践沉淀成长期资产。12 节，含实战项目。",
    badge: "报名中",
    meta: ["第 2 期 · 2026-09 开课", "已招 38 / 60"],
    cta: "查看大纲",
    href: "#"
  },
  {
    title: "和 AI 一起写作",
    desc: "把 AI 当成协作者而非工具：从上下文设计到审美判断，一门关于人机共创的写作课。",
    badge: "候补",
    meta: ["第 1 期 · 2026-11 开课"],
    cta: "加入候补",
    href: "#"
  }
] as const;
