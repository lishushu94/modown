/**
 * Banner / 轮播 / 快捷入口数据
 * 包含首页轮播图、教程链接、设计师工具、热门频道、域名推荐
 */

import type {
  BannerItem,
  TutorialLinkItem,
  DesignerToolItem,
  HotChannelItem,
  DomainItem,
  ArticleCarouselItem,
} from '@/lib/types';

/** 首页轮播 Banner 图片列表 */
export const bannerItems: BannerItem[] = [
  {
    id: 1,
    image: '/static/image/8c512b194dad495934218a3d0b5193fb4332f7a0.png',
    href: '#',
    alt: 'Modown 资源下载主题',
  },
  {
    id: 2,
    image: '/static/image/346e74f2a57d0f0a45bc609a21d2845de1e0abcb.png',
    href: '#',
    alt: 'Modown 主题特性展示',
  },
  {
    id: 3,
    image: '/static/image/35c787b7882f4eb1a90b64a6965d801de44f49ec.png',
    href: '#',
    alt: 'Modown 功能介绍',
  },
];

/** 软件教程快捷入口（2x4 图标网格） */
export const tutorialLinks: TutorialLinkItem[] = [
  { label: 'WP教程', icon: '/static/image/e71073e90ff83fb2d8f3e7678150ec98552ea250.png', href: '#' },
  { label: 'PHP教程', icon: '/static/image/cc0db57e1fa3260493dc2af5b8288b3a369ae1ae.png', href: '#' },
  { label: 'HTML教程', icon: '/static/image/24f3516b78953eb30801f7dc842f7ae29d0dd81b.png', href: '#' },
  { label: '前端教程', icon: '/static/image/97b3863ddde9c049e40742056cea000092d5697d.png', href: '#' },
  { label: 'Sketch', icon: '/static/image/5159709947aa4a0d7d4288e90e006a63b8e7a6fd.png', href: '#' },
  { label: '视频剪辑', icon: '/static/image/766e602064590d6637aa16ddb399b6cf85cb73dc.png', href: '#' },
  { label: 'Lr教程', icon: '/static/image/6532c72785825e17ad45e03551b5863fb23d8c43.png', href: '#' },
  { label: '手绘教程', icon: '/static/image/0d54b1266f9d396bba7d46f948b7cf26d6440279.png', href: '#' },
];

/** 设计师必备工具推荐（横向滚动） */
export const designerTools: DesignerToolItem[] = [
  { label: '购买主题', icon: '/static/image/fe47ec617507e9ce5f6ce7ac9b179a3c9231882b.png', href: '#' },
  { label: '一键抠图', icon: '/static/image/89bc0825de1c5f6a6309ebd61bb7e004509bcd5b.png', href: '#' },
  { label: '模板兔', icon: '/static/image/fe47ec617507e9ce5f6ce7ac9b179a3c9231882b.png', href: '#' },
  { label: '配色神器', icon: '/static/image/89bc0825de1c5f6a6309ebd61bb7e004509bcd5b.png', href: '#' },
  { label: '自学好课', icon: '/static/image/fe47ec617507e9ce5f6ce7ac9b179a3c9231882b.png', href: '#' },
  { label: 'PS 2020', icon: '/static/image/89bc0825de1c5f6a6309ebd61bb7e004509bcd5b.png', href: '#' },
  { label: 'Sketch', icon: '/static/image/fe47ec617507e9ce5f6ce7ac9b179a3c9231882b.png', href: '#' },
  { label: '免费字体', icon: '/static/image/89bc0825de1c5f6a6309ebd61bb7e004509bcd5b.png', href: '#' },
];

/** 热门频道（2x2 卡片网格） */
export const hotChannels: HotChannelItem[] = [
  { label: '细节猎人', image: '/static/picture/ba62c6cc6d5a5d5565285d61e891342fc80734c6.jpeg', href: '#' },
  { label: '神仙画画', image: '/static/picture/ba62c6cc6d5a5d5565285d61e891342fc80734c6.jpeg', href: '#' },
  { label: '设计专题', image: '/static/picture/ba62c6cc6d5a5d5565285d61e891342fc80734c6.jpeg', href: '#' },
  { label: '设计读报', image: '/static/picture/ba62c6cc6d5a5d5565285d61e891342fc80734c6.jpeg', href: '#' },
];

/** 域名推荐（2x2 卡片） */
export const domainItems: DomainItem[] = [
  { title: '各种域名转让', subtitle: 'mac域名', href: '#' },
  { title: '各种域名转让', subtitle: 'cad域名', href: '#' },
  { title: '各种域名转让', subtitle: '建站域名', href: '#' },
  { title: '各种域名转让', subtitle: '建站域名', href: '#' },
];

/** WordPress 教程文章轮播数据 */
export const articleCarouselItems: ArticleCarouselItem[] = [
  { title: 'WordPress 自定义分类、标签、页面的URL伪静态格式', date: '2020-03-14', href: '#' },
  { title: 'WordPress资源下载主题 Modown 使用教程', date: '2018-12-07', href: '#' },
  { title: '如何在WordPress后台的某个页面里添加上传按钮', date: '2018-12-07', href: '#' },
];
