/**
 * 页脚组件
 * 包含底部信息描述区、多列链接、友情链接、版权信息
 */

import { Search } from 'lucide-react';
import {
  footerLinkGroups,
  footerQuickLinks,
  footerContactLinks,
  friendlyLinks,
} from '@/lib/data/footer';
import { siteConfig } from '@/lib/data/site';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg-dark)] text-[var(--color-text-white)]">
      {/* ===== 主要内容区 ===== */}
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* 第一列：站点描述 + 快捷链接 */}
          <div>
            <p className="mb-4 text-sm leading-relaxed text-gray-400">
              底部小工具可设置显示4列或者5列
            </p>
            <div className="flex flex-wrap gap-3">
              {footerQuickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm text-gray-400 transition-colors hover:text-[var(--color-primary)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* 第二列、第三列：链接分组 */}
          {footerLinkGroups.map((group, groupIdx) => (
            <div key={groupIdx}>
              <h4 className="mb-4 text-base font-medium text-gray-200">
                {group.title}
              </h4>
              <ul className="flex flex-col gap-2">
                {group.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 transition-colors hover:text-[var(--color-primary)]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* 第四列：搜索框 */}
          <div>
            <h4 className="mb-4 text-base font-medium text-gray-200">搜索</h4>
            <div className="flex overflow-hidden rounded-md bg-[#3a3a3a]">
              <input
                type="text"
                placeholder="搜索..."
                className="flex-1 bg-transparent px-3 py-2 text-sm text-gray-300 outline-none placeholder:text-gray-500"
              />
              <button
                className="flex items-center justify-center px-3 text-gray-400 transition-colors hover:text-[var(--color-primary)]"
                aria-label="搜索"
              >
                <Search className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ===== 联系方式区 ===== */}
      <div className="border-t border-gray-700">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <p className="mb-3 text-sm text-gray-300">
            承接WordPress等系统建站仿站、二次开发、主题插件定制等！！
          </p>
          <div className="flex flex-wrap gap-4">
            {footerContactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="rounded-md border border-gray-600 px-3 py-1.5 text-xs text-gray-400 transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ===== 底部版权区 ===== */}
      <div className="border-t border-gray-700">
        <div className="mx-auto max-w-7xl px-4 py-4">
          {/* 友情链接 */}
          {friendlyLinks.length > 0 && (
            <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-gray-500">
              <span>友情链接：</span>
              {friendlyLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-500 transition-colors hover:text-gray-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
          <p className="text-xs text-gray-500">{siteConfig.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
