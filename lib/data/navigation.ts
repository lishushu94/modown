/**
 * 导航数据
 * 包含顶部主导航菜单、移动端菜单快捷入口、移动端底部导航
 */

import type { NavMenuItem, MobileNavItem } from '@/lib/types';

/** 顶部主导航菜单 */
export const mainNavItems: NavMenuItem[] = [
  {
    label: '首页模板',
    href: '#',
    children: [
      { label: '模板兔Banner首页', href: '#' },
      { label: '大banner首页', href: '#' },
      { label: '普通首页', href: '#' },
      { label: '博客首页', href: '#' },
      { label: '纯标题首页', href: '#' },
    ],
  },
  {
    label: '页面模板',
    href: '#',
    children: [
      { label: '菜单页面', href: '#' },
      { label: '读者墙', href: '#' },
      { label: '瀑布流', href: '#' },
      { label: '留言板', href: '#' },
      { label: '分类展示', href: '#' },
      { label: '文章存档', href: '#' },
      { label: '标签存档', href: '#' },
      { label: '演示菜单', href: '#' },
      { label: '分类页面', href: '#' },
    ],
  },
  { label: '网址导航', href: '#' },
  { label: '问答', href: '#' },
  { label: '团购', href: '#', highlight: true },
  { label: '聚划算', href: '#' },
  { label: '抽奖', href: '#' },
  { label: '子主题', href: '#' },
  { label: '赠送', href: '#' },
];

/** 移动端顶部快捷菜单入口 */
export const mobileQuickLinks: NavMenuItem[] = [
  { label: '首页', href: '#' },
  { label: '团购', href: '#' },
  { label: '投稿', href: '#' },
  { label: '提问', href: '#' },
];

/** 移动端底部固定导航栏 */
export const mobileBottomNav: MobileNavItem[] = [
  { label: '首页', href: '#', icon: 'home', active: true },
  { label: '发现', href: '#', icon: 'discover' },
  { label: 'VIP', href: '#', icon: 'vip' },
  { label: '客服', href: '#', icon: 'service' },
  { label: '我的', href: '#', icon: 'user' },
];

/** 侧边栏页面快捷导航（右侧浮窗目录） */
export const sideNavItems = [
  { label: '首页', anchorId: 'top' },
  { label: '最新发布NEW', anchorId: 'latest' },
  { label: '默认样式', anchorId: 'default-style' },
  { label: '自定义高度', anchorId: 'custom-height' },
  { label: '标题模式', anchorId: 'title-mode' },
  { label: 'List列表演示', anchorId: 'list-demo' },
];
