import React from 'react'
import { Link } from 'react-router-dom'
import { articlesData } from '../data/articles'

function ArticleSection() {
    if (!articlesData || articlesData.length === 0) return null

    return (
        <div id="articles" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">📰</span>
                <h2 className="text-2xl font-bold text-gray-800">
                    精选文章
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articlesData.map((article) => (
                    <Link
                        key={article.id}
                        to={`/article/${article.id}`}
                        className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col h-full"
                    >
                        {/* Cover Image */}
                        <div className="relative h-48 overflow-hidden bg-gray-100">
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        {/* Content */}
                        <div className="p-5 flex flex-col flex-1">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-600">
                                    {article.tags[0]}
                                </span>
                                <span className="text-xs text-gray-400">
                                    {article.date}
                                </span>
                            </div>

                            <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                {article.title}
                            </h3>

                            <p className="text-sm text-gray-500 line-clamp-3 mb-4 flex-1">
                                {article.description}
                            </p>

                            <div className="flex items-center text-sm font-medium text-blue-600 group-hover:translate-x-1 transition-transform">
                                阅读全文
                                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ArticleSection
