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
      <button onClick={toggleSidebar} className="p-2">
        <div className="space-y-1.5">
          <span className="block w-6 h-0.5 bg-slate-800"></span>
          <span className="block w-6 h-0.5 bg-slate-800"></span>
          <span className="block w-6 h-0.5 bg-slate-800"></span>
        </div>
      </button>
    </div>
  )
}

export default MobileHeader
