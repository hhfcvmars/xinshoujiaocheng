import React from 'react'
import { adConfig } from '../data/tools'

function Sidebar({ navItems, activeSection, scrollToSection, sidebarOpen }) {
  return (
    <aside className={`fixed top-0 left-0 h-full w-60 bg-white border-r border-slate-200 z-50 transform transition-transform duration-200 hide-scrollbar overflow-y-auto
      ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
      <div className="flex flex-col h-full">
        <div className="p-6 flex-shrink-0">
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

        {/* 底部广告区域 */}
        <div className="mt-auto p-4 flex-shrink-0">
          <a
            href={adConfig.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div
              className="relative overflow-hidden rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #e8eeff 0%, #f0f4ff 50%, #eef2ff 100%)'
              }}
            >
              {/* 背景光效 */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-30"
                style={{
                  background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)'
                }}
              />

              <div className="relative z-10">
                {/* 腾讯云Logo */}
                <div className="flex items-center gap-2 mb-3">
                  <svg viewBox="0 0 40 40" className="w-5 h-5" fill="none">
                    <path
                      d="M20 4C13.5 4 8 8.5 6 14.5C2.5 15.5 0 18.5 0 22c0 4.5 3.5 8 8 8h24c3.5 0 6.5-3 6.5-6.5 0-3-2-5.5-5-6.5C32.5 10 27 4 20 4z"
                      fill="url(#cloud-gradient-sidebar)"
                    />
                    <defs>
                      <linearGradient id="cloud-gradient-sidebar" x1="0" y1="0" x2="40" y2="30">
                        <stop offset="0%" stopColor="#60A5FA" />
                        <stop offset="100%" stopColor="#3B82F6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="text-blue-600 font-semibold text-xs">腾讯云</span>
                </div>

                {/* 醒目的免费体验文字 */}
                <div className="mb-3">
                  <div className="px-2 py-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-md shadow-md inline-block">
                    <p className="text-white font-bold text-sm">
                      {adConfig.freeTrialText}
                    </p>
                  </div>
                </div>

                {/* 描述 */}
                <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                  {adConfig.description}
                </p>

                {/* 按钮 */}
                <div className="flex items-center justify-center gap-1 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-bold text-xs shadow-md group-hover:shadow-lg group-hover:-translate-y-0.5 transition-all duration-300">
                  <span>{adConfig.buttonText}</span>
                  <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
