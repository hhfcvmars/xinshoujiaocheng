// 工具数据配置
export const toolsData = {
  code: {
    id: 'code-tools',
    title: 'AI编程工具',
    icon: '💻',
    color: 'linear-gradient(135deg, #10b981, #34d399)',
    tools: [
      { name: 'ChatGPT', desc: 'OpenAI最强AI助手', icon: 'https://logo.clearbit.com/openai.com', gradient: 'linear-gradient(135deg, #10a37f, #0d8c6d)', url: 'https://chat.openai.com' },
      { name: 'Gemini', desc: 'Google最强多模态AI', icon: 'https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg', gradient: 'linear-gradient(135deg, #4285f4, #34a853)', url: 'https://gemini.google.com' },
      { name: '通义千问', desc: '阿里超强AI模型', icon: '/icons/qianwen.jpeg', gradient: 'linear-gradient(135deg, #6039f5, #b399ff)', url: 'https://www.qianwen.com' },
      { name: '腾讯元宝', desc: '腾讯AI智能助手', icon: 'https://logo.clearbit.com/tencent.com', gradient: 'linear-gradient(135deg, #0052d9, #0066ff)', url: 'https://yuanbao.tencent.com' },
      { name: 'DeepSeek', desc: '深度求索AI大模型', icon: '/icons/deepseek.png', gradient: 'linear-gradient(135deg, #1e40af, #3b82f6)', url: 'https://www.deepseek.com' },
      { name: 'Kimi', desc: '月之暗面长文本AI', icon: '/icons/kimi.png', gradient: 'linear-gradient(135deg, #7c3aed, #a78bfa)', url: 'https://kimi.moonshot.cn' },
      { name: 'GitHub Copilot', desc: 'AI代码助手', icon: '/icons/github-copilot-1.png', gradient: 'linear-gradient(135deg, #000000, #434343)', url: 'https://github.com/features/copilot' },
      { name: 'Claude Code', desc: 'Anthropic编程助手', icon: '/icons/claude-code-2.png', gradient: 'linear-gradient(135deg, #da7b4f, #c85a32)', url: 'https://claude.ai' },
      { name: 'Cursor', desc: 'AI代码编辑器', icon: '/icons/cursor-3.png', gradient: 'linear-gradient(135deg, #1e3c72, #2a5298)', url: 'https://cursor.sh' },
      { name: 'Codex', desc: 'OpenAI代码生成', icon: '/icons/codex-4.png', gradient: 'linear-gradient(135deg, #11998e, #38ef7d)', url: 'https://openai.com/blog/openai-codex' },
      { name: 'Replit AI', desc: '在线AI编程', icon: '/icons/replit-ai-5.png', gradient: 'linear-gradient(135deg, #f46b45, #eea849)', url: 'https://replit.com' },
      { name: 'Tabnine', desc: '智能代码补全', icon: '/icons/tabnine-6.png', gradient: 'linear-gradient(135deg, #8e2de2, #4a00e0)', url: 'https://tabnine.com' },
      { name: 'Codeium', desc: '免费AI编程助手', icon: '/icons/codeium-7.png', gradient: 'linear-gradient(135deg, #00b09b, #96c93d)', url: 'https://codeium.com' },
      { name: 'Bolt.new', desc: 'StackBlitz AI开发', icon: '/icons/bolt-new-8.png', gradient: 'linear-gradient(135deg, #f857a6, #ff5858)', url: 'https://bolt.new' },
      { name: 'Windsurf', desc: 'Codeium AI IDE', icon: '/icons/windsurf-9.png', gradient: 'linear-gradient(135deg, #4776e6, #8e54e9)', url: 'https://codeium.com/windsurf' },
      { name: 'Lovable', desc: '全栈AI编程工具', icon: '/icons/lovable-10.png', gradient: 'linear-gradient(135deg, #ff6a88, #ff99ac)', url: 'https://lovable.dev' }

    ]
  },
  image: {
    id: 'image-tools',
    title: 'AI图像工具',
    icon: '🖼️',
    color: 'linear-gradient(135deg, #ec4899, #f472b6)',
    tools: [
      { name: 'Midjourney', desc: 'AI绘画神器', icon: '/icons/midjourney-12.png', gradient: 'linear-gradient(135deg, #ff6b6b, #ffa07a)', url: 'https://midjourney.com' },
      { name: 'Stable Diffusion', desc: '开源AI绘画', icon: '/icons/stable-diffusion-13.png', gradient: 'linear-gradient(135deg, #4ecdc4, #44a08d)', url: 'https://stability.ai' },
      { name: 'DALL·E 3', desc: 'OpenAI图像生成', icon: '/icons/sora-22.png', gradient: 'linear-gradient(135deg, #667eea, #764ba2)', url: 'https://openai.com/dall-e-3' },
      { name: 'Leonardo.ai', desc: 'AI艺术创作平台', icon: '/icons/leonardo-ai-15.png', gradient: 'linear-gradient(135deg, #f093fb, #f5576c)', url: 'https://leonardo.ai' },
      { name: 'Remove.bg', desc: 'AI一键抠图', icon: '/icons/remove-bg-16.png', gradient: 'linear-gradient(135deg, #11998e, #38ef7d)', url: 'https://remove.bg' },
      { name: 'Upscale.media', desc: 'AI图片放大', icon: '/icons/upscale-media-17.png', gradient: 'linear-gradient(135deg, #fc4a1a, #f7b733)', url: 'https://upscale.media' },
      { name: 'Civitai', desc: 'AI模型社区', icon: '/icons/civitai-18.png', gradient: 'linear-gradient(135deg, #654ea3, #eaafc8)', url: 'https://civitai.com' },
      { name: 'Canva AI', desc: '智能设计工具', icon: '/icons/canva-ai-19.png', gradient: 'linear-gradient(135deg, #00b4db, #0083b0)', url: 'https://canva.com' },
    ]
  },
  video: {
    id: 'video-tools',
    title: 'AI视频工具',
    icon: '🎬',
    color: 'linear-gradient(135deg, #f59e0b, #fbbf24)',
    tools: [
      { name: 'Runway', desc: 'AI视频生成编辑', icon: '/icons/runway-20.png', gradient: 'linear-gradient(135deg, #f12711, #f5af19)', url: 'https://runway.ml' },
      { name: 'Pika Labs', desc: '文字生成视频', icon: '/icons/pika-labs-21.png', gradient: 'linear-gradient(135deg, #834d9b, #d04ed6)', url: 'https://pika.art' },
      { name: 'Sora', desc: 'OpenAI视频生成', icon: '/icons/sora-22.png', gradient: 'linear-gradient(135deg, #0f0c29, #302b63)', url: 'https://openai.com/sora' },
      { name: 'HeyGen', desc: 'AI数字人视频', icon: '/icons/heygen-23.png', gradient: 'linear-gradient(135deg, #ee0979, #ff6a00)', url: 'https://heygen.com' },
      { name: 'Synthesia', desc: 'AI虚拟主播', icon: '/icons/synthesia-24.png', gradient: 'linear-gradient(135deg, #1a2980, #26d0ce)', url: 'https://synthesia.io' },
      { name: '剪映', desc: '字节跳动视频编辑', icon: '/icons/tool-25.png', gradient: 'linear-gradient(135deg, #ff416c, #ff4b2b)', url: 'https://jianying.com' },
      { name: 'D-ID', desc: 'AI换脸视频', icon: '/icons/d-id-26.png', gradient: 'linear-gradient(135deg, #5433ff, #20bdff)', url: 'https://d-id.com' },
      { name: '可灵AI', desc: '快手AI视频生成', icon: '/icons/ai-27.png', gradient: 'linear-gradient(135deg, #c33764, #1d2671)', url: 'https://klingai.com' },
    ]
  },
  design: {
    id: 'design-tools',
    title: 'AI设计工具',
    icon: '🎨',
    color: 'linear-gradient(135deg, #8b5cf6, #a78bfa)',
    tools: [
      { name: 'Figma AI', desc: '智能设计协作', icon: '/icons/figma-ai-28.png', gradient: 'linear-gradient(135deg, #667eea, #764ba2)', url: 'https://figma.com' },
      { name: '堆友AI', desc: '专为设计师打造', icon: '/icons/ai-29.png', gradient: 'linear-gradient(135deg, #ff512f, #f09819)', url: 'https://d.design' },
      { name: '绘蛙', desc: 'AI电商设计工具', icon: '/icons/tool-30.png', gradient: 'linear-gradient(135deg, #11998e, #38ef7d)', url: 'https://ihuiwa.com' },
      { name: '稿定AI', desc: '一站式AI创作', icon: '/icons/ai-31.png', gradient: 'linear-gradient(135deg, #ee0979, #ff6a00)', url: 'https://gaoding.com' },
      { name: '墨刀AI', desc: 'AI秒生原型稿', icon: '/icons/ai-32.png', gradient: 'linear-gradient(135deg, #1a2980, #26d0ce)', url: 'https://modao.cc' },
      { name: 'Pic Copilot', desc: '阿里国际推出', icon: '/icons/pic-copilot-33.png', gradient: 'linear-gradient(135deg, #c471ed, #f64f59)', url: 'https://www.piccopilot.com' },
      { name: 'Framer AI', desc: 'AI网页设计', icon: '/icons/framer-ai-34.png', gradient: 'linear-gradient(135deg, #00c6ff, #0072ff)', url: 'https://framer.com' },
      { name: '即时设计AI', desc: '国产Figma替代', icon: '/icons/ai-35.png', gradient: 'linear-gradient(135deg, #f5af19, #f12711)', url: 'https://js.design' },
    ]
  }
}

// 导航项配置
export const navItems = [
  { id: 'articles', icon: '📰', label: '精选文章' },
  { id: 'code-tools', icon: '💻', label: 'AI编程工具' },
  { id: 'image-tools', icon: '🖼️', label: 'AI图像工具' },
  { id: 'video-tools', icon: '🎬', label: 'AI视频工具' },
  { id: 'design-tools', icon: '🎨', label: 'AI设计工具' },
]

// 广告配置
export const adConfig = {
  url: 'https://curl.qcloud.com/vCKt0beq',
  title: '云产品精选',
  highlight: '福利',
  subtitle: '云服务器、数据库等多款产品特惠',
  buttonText: '立即选购',
  tag: '免费产品体验',
  description: '60+款免费云产品，服务器最长体验1个月',
  freeTrialText: '新人免费体验一个月'
}
