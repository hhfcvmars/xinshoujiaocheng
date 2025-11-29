import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { articlesData } from '../data/articles'

function ArticlePage() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [content, setContent] = useState('')
    const [loading, setLoading] = useState(true)

    const article = articlesData.find(a => a.id === id)

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

    if (!article) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">文章未找到</h1>
                    <button
                        onClick={() => navigate('/')}
                        className="text-blue-600 hover:text-blue-800 underline"
                    >
                        返回首页
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            {/* 顶部导航栏 - 固定在顶部 */}
            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <button
                        onClick={() => navigate('/')}
                        className="group flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-all duration-300"
                    >
                        <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span className="font-medium">返回首页</span>
                    </button>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {article.date}
                    </div>
                </div>
            </header>

            {/* 主内容区 */}
            <main className="max-w-4xl mx-auto px-6 py-8">
                {/* 文章内容卡片 */}
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    {/* 文章头部信息 */}
                    <div className="mb-10 pb-8 border-b border-gray-100">
                        {/* 标签 */}
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            {article.tags.map(tag => (
                                <span
                                    key={tag}
                                    className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* 标题 */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            {article.title}
                        </h1>

                        {/* 描述 */}
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {article.description}
                        </p>
                    </div>

                    {/* 文章正文 */}
                    {loading ? (
                        <div className="flex items-center justify-center h-64">
                            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
                        </div>
                    ) : (
                        <article className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-img:rounded-xl prose-img:shadow-lg prose-pre:bg-gray-900 prose-pre:shadow-lg">
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                components={{
                                    code({ node, inline, className, children, ...props }) {
                                        const match = /language-(\w+)/.exec(className || '')
                                        return !inline && match ? (
                                            <SyntaxHighlighter
                                                style={vscDarkPlus}
                                                language={match[1]}
                                                PreTag="div"
                                                {...props}
                                            >
                                                {String(children).replace(/\n$/, '')}
                                            </SyntaxHighlighter>
                                        ) : (
                                            <code className={className} {...props}>
                                                {children}
                                            </code>
                                        )
                                    },
                                    img: ({ node, ...props }) => (
                                        <img
                                            {...props}
                                            className="w-full max-w-3xl mx-auto rounded-xl shadow-md my-8"
                                            loading="lazy"
                                        />
                                    ),
                                    table: ({ node, ...props }) => (
                                        <div className="overflow-x-auto my-8">
                                            <table className="min-w-full divide-y divide-gray-200 border border-gray-200" {...props} />
                                        </div>
                                    ),
                                    th: ({ node, ...props }) => (
                                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200" {...props} />
                                    ),
                                    td: ({ node, ...props }) => (
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-b border-gray-200" {...props} />
                                    )
                                }}
                            >
                                {content}
                            </ReactMarkdown>
                        </article>
                    )}
                </div>
            </main>
        </div>
    )
}

export default ArticlePage
