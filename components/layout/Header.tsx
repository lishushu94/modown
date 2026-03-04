/**
 * 顶部导航栏组件
 * 包含 Logo、主导航菜单（含多级下拉）、搜索图标、登录/注册按钮
 * 移动端显示汉堡菜单和快捷入口
 */
'use client';

import { useState } from 'react';
import { Search, Menu, X, ChevronDown, User } from 'lucide-react';
import { mainNavItems, mobileQuickLinks } from '@/lib/data/navigation';
import { siteConfig } from '@/lib/data/site';

/** Header 组件 Props */
interface HeaderProps {
  /** 点击登录按钮的回调 */
  onLoginClick: () => void;
  /** 点击注册按钮的回调 */
  onRegisterClick: () => void;
}

export default function Header({ onLoginClick, onRegisterClick }: HeaderProps) {
  /** 移动端菜单展开状态 */
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  /** 当前展开的下拉菜单索引 */
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-bg-white)] shadow-sm">
      {/* ===== 桌面端导航栏 ===== */}
      <div className="hidden lg:block">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-14 items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex shrink-0 items-center">
              <img
                src={siteConfig.logo}
                alt={siteConfig.name}
                className="h-8"
              />
            </a>

            {/* 主导航菜单 */}
            <nav className="ml-8 flex flex-1 items-center">
              {mainNavItems.map((item, index) => (
                <div
                  key={index}
                  className="group relative"
                  onMouseEnter={() => setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={item.href}
                    className={`flex items-center px-3 py-4 text-sm transition-colors hover:text-[var(--color-primary)] ${
                      item.highlight
                        ? 'text-[var(--color-primary)] font-medium'
                        : 'text-[var(--color-text-secondary)]'
                    }`}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown className="ml-1 h-3 w-3" />
                    )}
                  </a>

                  {/* 下拉子菜单 */}
                  {item.children && activeDropdown === index && (
                    <div className="absolute left-0 top-full z-50 min-w-[160px] rounded-md bg-[var(--color-bg-white)] py-2 shadow-[var(--shadow-dropdown)]">
                      {item.children.map((child, childIdx) => (
                        <a
                          key={childIdx}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg)] hover:text-[var(--color-primary)]"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* 右侧操作区：搜索 + 登录/注册 */}
            <div className="flex items-center gap-3">
              <button
                className="flex h-9 w-9 items-center justify-center rounded-full text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-bg)] hover:text-[var(--color-primary)]"
                aria-label="搜索"
              >
                <Search className="h-4 w-4" />
              </button>
              <button
                className="flex h-9 w-9 items-center justify-center rounded-full text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-bg)] hover:text-[var(--color-primary)]"
                aria-label="用户"
              >
                <User className="h-4 w-4" />
              </button>
              <button
                onClick={onLoginClick}
                className="rounded-md px-4 py-1.5 text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)]"
              >
                登录
              </button>
              <button
                onClick={onRegisterClick}
                className="rounded-md bg-[var(--color-primary)] px-4 py-1.5 text-sm text-[var(--color-text-white)] transition-colors hover:bg-[var(--color-primary-hover)]"
              >
                注册
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ===== 移动端导航栏 ===== */}
      <div className="lg:hidden">
        <div className="flex h-12 items-center justify-between px-4">
          {/* 汉堡菜单按钮 */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-md text-[var(--color-text-secondary)]"
            aria-label={mobileMenuOpen ? '关闭菜单' : '展开菜单'}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>

          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src={siteConfig.logo} alt={siteConfig.name} className="h-7" />
          </a>

          {/* 搜索按钮 */}
          <button
            className="flex h-9 w-9 items-center justify-center rounded-md text-[var(--color-text-secondary)]"
            aria-label="搜索"
          >
            <Search className="h-5 w-5" />
          </button>
        </div>

        {/* 移动端快捷入口行 */}
        <div className="flex items-center border-t border-[var(--color-border-light)] px-2">
          {mobileQuickLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="flex-1 py-2 text-center text-xs text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* 移动端展开菜单 */}
        {mobileMenuOpen && (
          <div className="border-t border-[var(--color-border-light)] bg-[var(--color-bg-white)] px-4 py-3">
            {mainNavItems.map((item, index) => (
              <div key={index} className="border-b border-[var(--color-border-light)] last:border-b-0">
                <a
                  href={item.href}
                  className="block py-3 text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)]"
                >
                  {item.label}
                </a>
              </div>
            ))}
            <div className="mt-3 flex gap-3">
              <button
                onClick={onLoginClick}
                className="flex-1 rounded-md border border-[var(--color-border)] py-2 text-sm text-[var(--color-text-secondary)]"
              >
                登录
              </button>
              <button
                onClick={onRegisterClick}
                className="flex-1 rounded-md bg-[var(--color-primary)] py-2 text-sm text-[var(--color-text-white)]"
              >
                注册
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
