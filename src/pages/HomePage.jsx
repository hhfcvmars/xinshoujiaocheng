import React, { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import ToolSection from '../components/ToolSection'
import ArticleSection from '../components/ArticleSection'
import ScrollToTop from '../components/ScrollToTop'
import MobileHeader from '../components/MobileHeader'
import { toolsData, navItems } from '../data/tools'

function HomePage() {
    const [activeSection, setActiveSection] = useState('articles')
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [showScrollTop, setShowScrollTop] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300)

            // 检查是否接近页面底部
            const scrollHeight = document.documentElement.scrollHeight
            const scrollTop = window.scrollY
            const clientHeight = window.innerHeight
            const isNearBottom = scrollHeight - scrollTop - clientHeight < 100

            const sections = [{ id: 'articles' }, ...Object.values(toolsData)]

            // 如果接近底部，激活最后一个区域
            if (isNearBottom && sections.length > 0) {
                const lastSection = sections[sections.length - 1]
                setActiveSection(lastSection.id)
                return
            }

            // 正常的滚动检测逻辑
            for (const section of sections) {
                const element = document.getElementById(section.id)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    // 调整检测阈值，使其更灵敏
                    if (rect.top <= 200 && rect.bottom >= 100) {
                        setActiveSection(section.id)
                        break
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
        setSidebarOpen(false)
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen)
    }

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            {/* 移动端头部 */}
            <MobileHeader toggleSidebar={toggleSidebar} />

            {/* 遮罩层 */}
            {sidebarOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/50 z-40"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* 侧边栏 */}
            <Sidebar
                navItems={navItems}
                activeSection={activeSection}
                scrollToSection={scrollToSection}
                sidebarOpen={sidebarOpen}
            />

            {/* 主内容区 */}
            <main className="lg:ml-60 pt-20 lg:pt-0 px-5 lg:px-10 pb-10">
                <div className="max-w-6xl mx-auto py-6 space-y-10">
                    {/* 文章板块 */}
                    <ArticleSection />

                    {/* 工具分类 */}
                    {Object.entries(toolsData).map(([key, section], index) => (
                        <ToolSection
                            key={section.id}
                            section={section}
                            index={index}
                        />
                    ))}
                </div>
            </main>

            {/* 返回顶部按钮 */}
            <ScrollToTop
                visible={showScrollTop}
                onClick={scrollToTop}
            />
        </div>
    )
}

export default HomePage
