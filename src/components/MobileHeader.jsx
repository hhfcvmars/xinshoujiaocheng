import React from 'react'

function MobileHeader({ toggleSidebar }) {
  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg"
          style={{ background: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)' }}
        >
          📚
        </div>
        <span
          className="text-xl font-bold bg-clip-text text-transparent"
          style={{ backgroundImage: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' }}
        >
          新手教程
        </span>
      </div>
      <div className="flex items-center gap-3">
        <a
          href="https://github.com/hhfcvmars"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-slate-600 hover:text-slate-900 transition-colors"
        >
          <svg height="24" width="24" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>
        <button onClick={toggleSidebar} className="p-2">
          <div className="space-y-1.5">
            <span className="block w-6 h-0.5 bg-slate-800"></span>
            <span className="block w-6 h-0.5 bg-slate-800"></span>
            <span className="block w-6 h-0.5 bg-slate-800"></span>
          </div>
        </button>
      </div>
    </div>
  )
}

export default MobileHeader
