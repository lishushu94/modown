/**
 * 根布局组件
 * 全局字体、元数据、样式引入
 */

import type { Metadata, Viewport } from 'next';
import './globals.css';

/** SEO 元数据配置 */
export const metadata: Metadata = {
  title: 'Modown - 资源下载wordpress主题_付费下载资源wordpress模板',
  description:
    'Modown 是一个功能强大的 WordPress 资源下载主题，支持付费下载、VIP会员、团购等功能。',
  keywords: 'WordPress主题,资源下载,付费下载,VIP会员,模板兔',
};

/** 视口配置 */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ff4242',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
