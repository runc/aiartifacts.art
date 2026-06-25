export const site = {
  domain: "aiartifacts.art",
  url: "https://aiartifacts.art",
  title: "aiartifacts.art — 一个 AI 信徒的 artifact 集结地",
  description:
    "aiartifacts.art 是一个 AI 信徒的个人站点。这里产出可被复用的 artifact：日常观察、工具、作品与课程，全部围绕 AI。",
  keywords: "AI, artifact, 个人作品, 课程, daily, 工具, slide studio",
  dailyUrl: "https://daily.aiartifacts.art/",
  toolsUrl: "https://tools.aiartifacts.art/",
  contactEmail: "hi@aiartifacts.art",
  rssPath: "/feed.xml",
  license: "CC BY-NC 4.0",
  buildDate: "2026-06-25"
} as const;

export const nav = [
  { idx: "01", label: "daily", href: site.dailyUrl, external: true },
  { idx: "02", label: "tools", href: "#tools", external: false },
  { idx: "03", label: "artifacts", href: "#artifacts", external: false },
  { idx: "04", label: "about", href: "#about", external: false },
  { idx: "05", label: "courses", href: "#courses", external: false }
] as const;

export const artifacts = [
  {
    id: "artifact_01",
    title: "slide-studio",
    desc: "纯浏览器端的 slide 工具，无需登录、无需后端，打开即用。把幻灯片做成可被复用的 artifact。",
    status: "live",
    href: "https://ss.aiartifacts.art/"
  },
  {
    id: "artifact_02",
    title: "prompt-atlas",
    desc: "一套面向中文场景的 prompt 模式库，按场景与失败模式分类，可作为 agent 调用的基础。",
    status: "live",
    href: "#"
  },
  {
    id: "artifact_03",
    title: "agent-runbook",
    desc: "在真实工作流里部署 agent 的操作手册：从任务拆分、上下文设计到失败回滚。",
    status: "wip",
    href: "#"
  },
  {
    id: "artifact_04",
    title: "ai-glossary",
    desc: "一个为中文使用者整理的 AI 术语对照表：每条带最小可工作定义与一个真实用法。",
    status: "planned",
    href: "#"
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
