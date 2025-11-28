import React from 'react'

function ToolCard({ tool }) {
  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="tool-card"
    >
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center text-2xl overflow-hidden border border-slate-100 bg-white"
      >
        {typeof tool.icon === 'string' && (tool.icon.startsWith('http') || tool.icon.startsWith('/')) ? (
          <img src={tool.icon} alt={tool.name} className="w-full h-full object-cover" />
        ) : (
          tool.icon
        )}
      </div>
      <div className="min-w-0 w-full">
        <div className="font-semibold text-slate-800 text-sm truncate">{tool.name}</div>
        <div className="text-xs text-slate-400 truncate mt-1">{tool.desc}</div>
      </div>
    </a>
  )
}

export default ToolCard
