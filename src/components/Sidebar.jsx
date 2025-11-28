import React from 'react'

function Sidebar({ navItems, activeSection, scrollToSection, sidebarOpen }) {
  return (
    <aside className={`fixed top-0 left-0 h-full w-60 bg-white border-r border-slate-200 z-50 transform transition-transform duration-200 hide-scrollbar overflow-y-auto
      ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
      <div className="p-6">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-8">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-11 h-11 rounded-xl object-cover shadow-sm shrink-0"
          />
          <div className="flex flex-col justify-center gap-0.5">
            <span
              className="text-lg font-bold bg-clip-text text-transparent leading-tight"
              style={{ backgroundImage: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' }}
            >
              AI编程新手教程
            </span>
            <span className="text-xs font-semibold text-slate-500 tracking-wide">
              xinshoujiaocheng.com
            </span>
          </div>
        </div>

        {/* 导航菜单 */}
        <nav className="space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar
