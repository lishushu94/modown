/**
 * 右侧浮动工具栏
 * 包含：在线客服、升级VIP、每日签到、夜间模式、繁简切换、返回顶部
 * 桌面端固定在右侧，移动端隐藏
 */
'use client';

import { useState, useCallback } from 'react';
import {
  Headphones,
  Crown,
  CalendarCheck,
  Moon,
  Sun,
  Languages,
  ArrowUp,
} from 'lucide-react';

export default function Sidebar() {
  /** 夜间模式状态 */
  const [darkMode, setDarkMode] = useState(false);

  /** 切换夜间模式 */
  const toggleDarkMode = useCallback(() => {
    setDarkMode((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle('dark', next);
      return next;
    });
  }, []);

  /** 返回顶部 */
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  /** 工具按钮列表 */
  const tools = [
    { icon: Headphones, label: '在线客服', onClick: () => {} },
    { icon: Crown, label: '升级VIP', onClick: () => {} },
    { icon: CalendarCheck, label: '每日签到', onClick: () => {} },
    {
      icon: darkMode ? Sun : Moon,
      label: darkMode ? '日间模式' : '夜间模式',
      onClick: toggleDarkMode,
    },
    { icon: Languages, label: '繁简切换', onClick: () => {} },
    { icon: ArrowUp, label: '返回顶部', onClick: scrollToTop },
  ];

  return (
    <aside
      className="fixed right-2 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-1 lg:flex"
      aria-label="侧边工具栏"
    >
      {tools.map((tool, index) => {
        const Icon = tool.icon;
        return (
          <button
            key={index}
            onClick={tool.onClick}
            className="group relative flex h-10 w-10 items-center justify-center rounded-md bg-[var(--color-bg-white)] text-[var(--color-text-muted)] shadow-sm transition-all hover:bg-[var(--color-primary)] hover:text-[var(--color-text-white)] hover:shadow-md"
            aria-label={tool.label}
          >
            <Icon className="h-4 w-4" />
            {/* 悬浮提示文字 */}
            <span className="pointer-events-none absolute right-full mr-2 whitespace-nowrap rounded-md bg-[var(--color-bg-dark)] px-2 py-1 text-xs text-[var(--color-text-white)] opacity-0 transition-opacity group-hover:opacity-100">
              {tool.label}
            </span>
          </button>
        );
      })}
    </aside>
  );
}
