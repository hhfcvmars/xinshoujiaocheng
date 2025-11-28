import React from 'react'
import ToolCard from './ToolCard'

function ToolSection({ section, index }) {
  return (
    <section
      id={section.id}
      className="opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${(index + 1) * 0.1}s` }}
    >
      {/* 标题栏 */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="flex items-center gap-3 text-xl font-semibold text-slate-800">
          <span 
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-base"
            style={{ background: section.color }}
          >
            {section.icon}
          </span>
          {section.title}
        </h2>
        <a href="#" className="view-more">
          查看更多 <span>→</span>
        </a>
      </div>

      {/* 工具网格 */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {section.tools.map((tool, toolIndex) => (
          <ToolCard key={toolIndex} tool={tool} />
        ))}
      </div>
    </section>
  )
}

export default ToolSection
