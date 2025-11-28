import React from 'react'
import { adConfig } from '../data/tools'

function AdBanner() {
  return (
    <a
      href={adConfig.url}
      target="_blank"
      rel="noopener noreferrer"
      className="ad-banner"
    >
      <div
        className="relative w-full overflow-hidden flex flex-col justify-center px-6 py-6 min-h-[160px]"
        style={{
          background: 'linear-gradient(135deg, #e8eeff 0%, #f0f4ff 30%, #eef2ff 60%, #e5eaff 100%)'
        }}
      >
        {/* 背景光效 */}
        <div
          className="absolute top-0 left-1/3 w-96 h-96 rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)'
          }}
        />

        <div className="relative z-10 flex flex-col md:block">
          <div className="md:pr-48">
            {/* 腾讯云Logo */}
            <div className="flex items-center gap-2 mb-2">
              <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none">
                <path
                  d="M20 4C13.5 4 8 8.5 6 14.5C2.5 15.5 0 18.5 0 22c0 4.5 3.5 8 8 8h24c3.5 0 6.5-3 6.5-6.5 0-3-2-5.5-5-6.5C32.5 10 27 4 20 4z"
                  fill="url(#cloud-gradient)"
                />
                <defs>
                  <linearGradient id="cloud-gradient" x1="0" y1="0" x2="40" y2="30">
                    <stop offset="0%" stopColor="#60A5FA" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-blue-600 font-semibold text-sm">腾讯云</span>
            </div>

            {/* 文本内容 */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight">
                <span className="text-slate-800">{adConfig.title}</span>
                <span className="text-orange-500">{adConfig.highlight}</span>
              </h2>
              <p className="text-slate-500 mt-1 text-sm">{adConfig.subtitle}</p>

              <div className="mt-2 flex flex-wrap items-center gap-3">
                <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-red-50 text-red-600 border border-red-100 shrink-0">
                  {adConfig.tag}
                </span>
                <p className="text-xs text-slate-700 font-medium">
                  {adConfig.description}
                </p>
              </div>
            </div>
          </div>

          {/* 按钮 */}
          <div className="mt-4 md:mt-0 md:absolute md:right-10 md:top-1/2 md:-translate-y-1/2 z-20">
            <span className="group relative inline-flex items-center gap-1.5 px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-bold text-sm shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 cursor-pointer">
              <span>{adConfig.buttonText}</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </div>
        </div>

        {/* 右侧3D装饰元素 */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden md:block">
          <div className="relative w-40 h-40">
            {/* 主球体 */}
            <div
              className="absolute w-32 h-32 rounded-full"
              style={{
                background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.4) 0%, rgba(59, 130, 246, 0.7) 100%)',
                boxShadow: 'inset -8px -8px 24px rgba(255,255,255,0.4), inset 8px 8px 24px rgba(59, 130, 246, 0.3), 0 8px 32px rgba(59, 130, 246, 0.2)',
                transform: 'rotate(-10deg)',
                top: '10px',
                left: '10px'
              }}
            />

            {/* 次球体 */}
            <div
              className="absolute w-24 h-24 rounded-full"
              style={{
                background: 'linear-gradient(135deg, rgba(147, 197, 253, 0.5) 0%, rgba(96, 165, 250, 0.6) 100%)',
                boxShadow: 'inset -5px -5px 15px rgba(255,255,255,0.5), 0 4px 16px rgba(96, 165, 250, 0.2)',
                transform: 'rotate(15deg)',
                top: '-5px',
                right: '0'
              }}
            />

            {/* 光点装饰 */}
            <div className="absolute w-3 h-3 bg-white rounded-full opacity-80" style={{ top: '25px', left: '35px' }}></div>
            <div className="absolute w-2 h-2 bg-white rounded-full opacity-60" style={{ top: '15px', right: '20px' }}></div>
          </div>
        </div>

        {/* 底部渐变 */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 opacity-20"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(100,149,237,0.3) 100%)'
          }}
        />
      </div>
    </a>
  )
}

export default AdBanner
