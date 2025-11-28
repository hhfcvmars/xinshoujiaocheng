import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

function ArticleModal({ article, onClose }) {
    const [content, setContent] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (article) {
            setLoading(true)
            fetch(article.contentPath)
                .then(res => res.text())
                .then(text => {
                    setContent(text)
                    setLoading(false)
                })
                .catch(err => {
                    console.error('Failed to load article:', err)
                    setContent('加载文章失败，请稍后重试。')
                    setLoading(false)
                })
        }
    }, [article])

    if (!article) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-scale-in">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white z-10">
                    <h2 className="text-xl font-bold text-gray-800 truncate pr-4">
                        {article.title}
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6 sm:p-10">
                    {loading ? (
                        <div className="flex items-center justify-center h-64">
                            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
                        </div>
                    ) : (
                        <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-img:rounded-xl prose-img:shadow-lg">
                            <ReactMarkdown
                                components={{
                                    img: ({ node, ...props }) => (
                                        <img
                                            {...props}
                                            className="w-full max-w-2xl mx-auto rounded-xl shadow-md my-8"
                                            loading="lazy"
                                        />
                                    )
                                }}
                            >
                                {content}
                            </ReactMarkdown>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ArticleModal
