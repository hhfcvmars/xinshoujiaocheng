import React from 'react'

function ScrollToTop({ visible, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`scroll-top-btn transition-opacity duration-200 ${visible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 15l-6-6-6 6"/>
      </svg>
    </button>
  )
}

export default ScrollToTop
