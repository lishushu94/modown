/**
 * 页脚数据
 * 包含底部链接分组、友情链接、统计数据、优势特性
 */

import type { FooterLinkGroup, StatItem, AdvantageItem } from '@/lib/types';

/** 底部链接分组 */
export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: '关于',
    links: [
      { label: '关于我们', href: '#' },
      { label: '免责申明', href: '#' },
      { label: '关于隐私', href: '#' },
      { label: '联系我们', href: '#' },
      { label: '广告合作', href: '#' },
      { label: 'wordpress开发', href: '#' },
    ],
  },
  {
    title: '其他',
    links: [
      { label: '建站优势', href: '#' },
      { label: '网站案例', href: '#' },
      { label: '主题作品', href: '#' },
      { label: '主题安装教程', href: '#' },
      { label: '前端工具', href: '#' },
      { label: 'WordPress APP/小程序开发', href: '#' },
    ],
  },
];

/** 底部描述区快捷链接 */
export const footerQuickLinks = [
  { label: '关于我们', href: '#' },
  { label: '免责申明', href: '#' },
  { label: '联系我们', href: '#' },
];

/** 底部联系方式/工单 */
export const footerContactLinks = [
  { label: '提交工单', href: '#' },
  { label: '联系客服 (说明需求，勿问在否)', href: '#' },
  { label: '加入QQ一群 （验证: mobantu）', href: '#' },
  { label: '加入QQ二群 （验证: mobantu）', href: '#' },
];

/** 友情链接 */
export const friendlyLinks = [
  { label: 'Wordpress主题', href: '#' },
];

/** 站点统计数字（计数器） */
export const statItems: StatItem[] = [
  { value: 52049, label: '总资源数' },
  { value: 35213, label: 'VIP资源数' },
  { value: 26421, label: '总用户数' },
  { value: 2001, label: 'VIP用户数' },
];

/** 我们的优势（4 项特性） */
export const advantageItems: AdvantageItem[] = [
  {
    icon: 'update',
    title: '更新及时',
    description: '专人上传，每天更新',
  },
  {
    icon: 'resource',
    title: '精选资源',
    description: '各类资源，满足需求',
  },
  {
    icon: 'speed',
    title: '高速下载',
    description: '专属网盘，极速体验',
  },
  {
    icon: 'service',
    title: '7x24h服务',
    description: '专人客服，随时联系',
  },
];
