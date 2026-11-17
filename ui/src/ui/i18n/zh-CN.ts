export const zhCN: Record<string, string> = {
  // Tab groups
  "tab.group.chat": "聊天",
  "tab.group.control": "控制",
  "tab.group.agent": "代理",
  "tab.group.settings": "设置",

  // Tab titles
  "tab.chat": "聊天",
  "tab.overview": "概览",
  "tab.channels": "频道",
  "tab.instances": "实例",
  "tab.sessions": "会话",
  "tab.cron": "定时任务",
  "tab.skills": "技能",
  "tab.nodes": "节点",
  "tab.config": "配置",
  "tab.debug": "调试",
  "tab.logs": "日志",
  "tab.control": "控制",

  // Tab subtitles
  "tab.subtitle.overview": "网关状态、入口点和快速健康检查。",
  "tab.subtitle.channels": "管理频道和设置。",
  "tab.subtitle.instances": "来自已连接客户端和节点的存在信标。",
  "tab.subtitle.sessions": "检查活动会话并调整每会话默认值。",
  "tab.subtitle.cron": "安排唤醒和定期代理运行。",
  "tab.subtitle.skills": "管理技能可用性和 API 密钥注入。",
  "tab.subtitle.nodes": "配对设备、功能和命令暴露。",
  "tab.subtitle.chat": "直接网关聊天会话，用于快速干预。",
  "tab.subtitle.config": "安全编辑 ~/.clawdbot/moltbot.json。",
  "tab.subtitle.debug": "网关快照、事件和手动 RPC 调用。",
  "tab.subtitle.logs": "网关文件日志的实时跟踪。",

  // Common actions
  "action.connect": "连接",
  "action.disconnect": "断开",
  "action.refresh": "刷新",
  "action.save": "保存",
  "action.cancel": "取消",
  "action.delete": "删除",
  "action.edit": "编辑",
  "action.add": "添加",
  "action.remove": "移除",
  "action.enable": "启用",
  "action.disable": "禁用",
  "action.start": "启动",
  "action.stop": "停止",
  "action.run": "运行",
  "action.copy": "复制",
  "action.close": "关闭",
  "action.apply": "应用",
  "action.reload": "重新加载",

  // Status
  "status.connected": "已连接",
  "status.disconnected": "已断开",
  "status.connecting": "连接中...",
  "status.loading": "加载中...",
  "status.saving": "保存中...",
  "status.error": "错误",
  "status.success": "成功",
  "status.online": "在线",
  "status.offline": "离线",
  "status.unknown": "未知",
  "status.enabled": "已启用",
  "status.disabled": "已禁用",
  "status.active": "活动",
  "status.inactive": "非活动",
  "status.pending": "待处理",
  "status.running": "运行中",
  "status.stopped": "已停止",
  "status.ready": "就绪",
  "status.busy": "忙碌",
  "status.idle": "空闲",

  // Overview page
  "overview.uptime": "运行时间",
  "overview.tick": "心跳间隔",
  "overview.gateway": "网关",
  "overview.gateway.url": "网关地址",
  "overview.gateway.token": "令牌",
  "overview.gateway.password": "密码",
  "overview.gateway.access": "网关访问",
  "overview.gateway.access.desc": "控制面板连接位置及认证方式。",
  "overview.ws.url": "WebSocket 地址",
  "overview.password": "密码（不存储）",
  "overview.session.key": "默认会话键",
  "overview.connect.hint": "点击连接以应用连接更改。",
  "overview.snapshot": "快照",
  "overview.snapshot.desc": "最新网关握手信息。",
  "overview.auth.required": "此网关需要认证。添加令牌或密码，然后点击连接。",
  "overview.auth.failed": "认证失败。请重新复制令牌化 URL 或更新令牌，然后点击连接。",
  "overview.docs.auth": "文档：控制台认证",
  "overview.insecure.hint": "此页面为 HTTP，浏览器阻止设备身份验证。请使用 HTTPS（Tailscale Serve）或在网关主机上打开 http://127.0.0.1:18789。",
  "overview.insecure.config": "如必须使用 HTTP，请设置 gateway.controlUi.allowInsecureAuth: true（仅限令牌）。",
  "overview.docs.tailscale": "文档：Tailscale Serve",
  "overview.docs.insecure": "文档：不安全 HTTP",
  "overview.presence": "在线设备",
  "overview.sessions": "会话",
  "overview.cron.next": "下次定时任务",
  "overview.cron.disabled": "定时任务已禁用",
  "overview.channels.refresh": "上次刷新频道",
  "overview.channels.hint": "使用频道连接 WhatsApp、Telegram、Discord、Signal 或 iMessage。",
  "overview.instances.desc": "过去 5 分钟内的存在信标。",
  "overview.sessions.desc": "网关追踪的近期会话键。",
  "overview.notes": "备注",
  "overview.notes.desc": "远程控制设置的快速提醒。",
  "overview.notes.tailscale": "Tailscale Serve",
  "overview.notes.tailscale.desc": "推荐使用 Serve 模式，保持网关在回环地址并使用 tailnet 认证。",
  "overview.notes.session": "会话维护",
  "overview.notes.session.desc": "使用 /new 或 sessions.patch 重置上下文。",
  "overview.notes.cron": "定时任务提醒",
  "overview.notes.cron.desc": "使用隔离会话进行定期运行。",
  "status.label": "状态",

  // Channels page
  "channels.title": "频道",
  "channels.status": "状态",
  "channels.config": "配置",
  "channels.accounts": "账户",
  "channels.noAccounts": "暂无账户",
  "channels.probe": "探测",
  "channels.probeAll": "探测全部",
  "channels.health": "频道健康",
  "channels.health.desc": "来自网关的频道状态快照。",

  // WhatsApp
  "whatsapp.title": "WhatsApp",
  "whatsapp.start": "启动",
  "whatsapp.startForce": "强制启动",
  "whatsapp.wait": "等待扫码",
  "whatsapp.logout": "退出登录",
  "whatsapp.scanQr": "请扫描二维码",
  "whatsapp.connected": "已连接",

  // Telegram
  "telegram.title": "Telegram",
  "telegram.botToken": "Bot Token",
  "telegram.webhook": "Webhook",

  // Discord
  "discord.title": "Discord",
  "discord.botToken": "Bot Token",
  "discord.guilds": "服务器",

  // Signal
  "signal.title": "Signal",
  "signal.number": "号码",

  // Slack
  "slack.title": "Slack",
  "slack.workspace": "工作区",

  // Sessions page
  "sessions.title": "会话",
  "sessions.key": "会话键",
  "sessions.created": "创建时间",
  "sessions.updated": "更新时间",
  "sessions.messages": "消息数",
  "sessions.delete": "删除会话",
  "sessions.deleteConfirm": "确定要删除此会话吗？",
  "sessions.desc": "活动会话键及每会话覆盖设置。",
  "sessions.activeMinutes": "活跃时间（分钟）",

  // Skills page
  "skills.title": "技能",
  "skills.available": "可用技能",
  "skills.enabled": "已启用",
  "skills.disabled": "已禁用",
  "skills.install": "安装",
  "skills.uninstall": "卸载",
  "skills.apiKey": "API 密钥",
  "skills.setApiKey": "设置 API 密钥",
  "skills.desc": "内置、托管和工作区技能。",
  "skills.search": "搜索技能",
  "skills.notFound": "未找到技能。",

  // Nodes page
  "nodes.title": "节点",
  "nodes.devices": "设备",
  "nodes.capabilities": "功能",
  "nodes.commands": "命令",
  "nodes.pair": "配对",
  "nodes.unpair": "取消配对",

  // Config page
  "config.title": "配置",
  "config.save": "保存配置",
  "config.reload": "重新加载",
  "config.apply": "应用",
  "config.dirty": "有未保存的更改",
  "config.saved": "配置已保存",

  // Cron page
  "cron.title": "定时任务",
  "cron.jobs": "任务",
  "cron.addJob": "添加任务",
  "cron.schedule": "调度",
  "cron.lastRun": "上次运行",
  "cron.nextRun": "下次运行",
  "cron.enable": "启用",
  "cron.disable": "禁用",
  "cron.run": "立即运行",
  "cron.delete": "删除",
  "cron.scheduler": "调度器",
  "cron.scheduler.desc": "网关拥有的定时调度器状态。",
  "cron.nextWake": "下次唤醒",
  "cron.newJob": "新建任务",
  "cron.newJob.desc": "创建定时唤醒或代理运行。",
  "cron.jobsList": "任务列表",
  "cron.jobsList.desc": "网关中存储的所有定时任务。",
  "cron.runHistory": "运行历史",
  "cron.runHistory.desc": "最近运行记录",
  "cron.selectJob": "（选择任务）",
  "cron.noJobs": "暂无任务。",
  "cron.noRuns": "暂无运行记录。",
  "cron.selectJobHint": "选择任务以查看运行历史。",
  "common.yes": "是",
  "common.no": "否",

  // Logs page
  "logs.title": "日志",
  "logs.level": "级别",
  "logs.time": "时间",
  "logs.message": "消息",
  "logs.filter": "过滤",
  "logs.clear": "清除",
  "logs.download": "下载",
  "logs.tail": "实时跟踪",
  "logs.desc": "网关文件日志 (JSONL)。",
  "logs.search": "搜索日志",

  // Debug page
  "debug.title": "调试",
  "debug.snapshot": "快照",
  "debug.events": "事件",
  "debug.rpc": "手动 RPC",
  "debug.rpc.desc": "发送带 JSON 参数的原始网关方法。",
  "debug.method": "方法",
  "debug.params": "参数",
  "debug.execute": "执行",
  "debug.snapshots": "快照",
  "debug.snapshots.desc": "状态、健康和心跳数据。",

  // Common
  "common.shown": "项显示",
  "action.filter": "过滤",

  // Instances page
  "instances.title": "实例",
  "instances.presence": "存在",
  "instances.clients": "客户端",
  "instances.nodes": "节点",
  "instances.connected": "已连接实例",
  "instances.desc": "来自网关和客户端的存在信标。",
  "instances.none": "暂无实例上报。",

  // Chat page
  "chat.title": "聊天",
  "chat.send": "发送",
  "chat.placeholder": "输入消息...",
  "chat.clear": "清除历史",
  "chat.export": "导出",
  "chat.refresh": "刷新聊天数据",
  "chat.thinking.toggle": "切换显示助手思考/工作输出",
  "chat.thinking.disabled": "引导期间禁用",
  "chat.focus.toggle": "切换专注模式（隐藏侧边栏和页面标题）",
  "chat.focus.disabled": "引导期间禁用",

  // Settings panel
  "settings.title": "设置",
  "settings.theme": "主题",
  "settings.theme.light": "浅色",
  "settings.theme.dark": "深色",
  "settings.theme.system": "跟随系统",
  "settings.language": "语言",

  // Navigation
  "nav.resources": "资源",
  "nav.docs": "文档",
  "nav.docs.title": "文档（新标签页打开）",

  // App render
  "nav.expandSidebar": "展开侧边栏",
  "nav.collapseSidebar": "收起侧边栏",

  // Sessions
  "sessions.noSessions": "未找到会话。",

  // Debug
  "debug.models": "模型",
  "debug.models.desc": "来自 models.list 的目录。",
  "debug.eventLog": "事件日志",
  "debug.eventLog.desc": "最近的网关事件。",
  "debug.noEvents": "暂无事件。",

  // Logs
  "logs.noEntries": "暂无日志条目。",

  // Nodes (additional)
  "nodes.desc": "配对设备和实时链接。",
  "nodes.noNodes": "未找到节点。",
  "nodes.devices.desc": "配对请求和角色令牌。",
  "nodes.noPairedDevices": "暂无配对设备。",
  "nodes.execBinding": "Exec 节点绑定",
  "nodes.execBinding.desc": "使用 exec host=node 时将代理固定到特定节点。",
  "nodes.loadConfigHint": "加载配置以编辑绑定。",
  "nodes.noNodesWithExec": "没有可用 system.run 的节点。",
  "nodes.noAgents": "未找到代理。",
  "nodes.execApprovals": "Exec 审批",
  "nodes.execApprovals.desc": "exec host=gateway/node 的允许列表和审批策略。",
  "nodes.loadApprovalsHint": "加载 exec 审批以编辑允许列表。",
  "nodes.noExecApprovals": "暂无节点提供 exec 审批。",
  "nodes.allowlist": "允许列表",
  "nodes.allowlist.desc": "不区分大小写的 glob 模式。",
  "nodes.noAllowlistEntries": "暂无允许列表条目。",
  "action.loadConfig": "加载配置",
  "action.loadApprovals": "加载审批",

  // Config
  "config.noChanges": "无更改",
  "config.noItems": "暂无项目。点击「添加」创建一个。",
  "config.noCustomEntries": "暂无自定义条目。",
  "config.form": "表单",
  "config.raw": "原始",
  "config.unsavedChanges": "未保存的更改",
  "config.unsavedChange": "{n} 个未保存的更改",

  // Channels
  "channels.statusAndConfig": "频道状态和配置。",
  "channels.noSnapshot": "暂无快照。",
  "channels.configured": "已配置",
  "channels.linked": "已链接",
  "channels.running": "运行中",
  "channels.connected": "已连接",
  "channels.lastConnect": "最后连接",
  "channels.lastMessage": "最后消息",
  "channels.authAge": "认证时长",
  "channels.showQr": "显示二维码",
  "channels.relink": "重新链接",
  "channels.waitForScan": "等待扫描",
  "channels.logout": "注销",
  
  // WhatsApp
  "channels.whatsapp.title": "WhatsApp",
  "channels.whatsapp.desc": "链接 WhatsApp Web 并监控连接状态。",
  
  // Telegram
  "channels.telegram.title": "Telegram",
  "channels.telegram.desc": "Bot 状态和频道配置。",
  
  // Slack
  "channels.slack.title": "Slack",
  "channels.slack.desc": "Socket 模式状态和频道配置。",
  
  // Signal
  "channels.signal.title": "Signal",
  "channels.signal.desc": "signal-cli 状态和频道配置。",
  
  // Discord
  "channels.discord.title": "Discord",
  "channels.discord.desc": "Bot 状态和频道配置。",
  
  // iMessage
  "channels.imessage.title": "iMessage",
  "channels.imessage.desc": "macOS 桥接状态和频道配置。",
  
  // Google Chat
  "channels.googlechat.title": "Google Chat",
  "channels.googlechat.desc": "Chat API webhook 状态和频道配置。",
  
  // Nostr
  "channels.nostr.title": "Nostr",
  "channels.nostr.desc": "通过 Nostr 中继的去中心化私信 (NIP-04)。",

  // Markdown sidebar
  "sidebar.noContent": "暂无内容",

  // Errors
  "error.connection": "连接失败",
  "error.timeout": "请求超时",
  "error.unauthorized": "未授权",
  "error.notFound": "未找到",
  "error.server": "服务器错误",
  "error.unknown": "未知错误",

  // Time
  "time.now": "刚刚",
  "time.seconds": "{n} 秒前",
  "time.minutes": "{n} 分钟前",
  "time.hours": "{n} 小时前",
  "time.days": "{n} 天前",
  "time.never": "从未",
};
