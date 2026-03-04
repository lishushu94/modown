/**
 * Modown 全局类型定义
 * 定义项目中所有数据模型的 TypeScript 接口
 */

/* ========== 文章相关类型 ========== */

/** 文章标签类型枚举 */
export type ArticleBadge =
  | 'VIP'      // VIP 专享资源
  | '荐'       // 推荐资源
  | '免费'     // 免费资源
  | '独家'     // 独家资源
  | '正版'     // 正版资源
  | '免登录'   // 免登录下载
  | '拼团';    // 拼团购买

/** 文章数据结构 */
export interface Article {
  /** 文章唯一标识 */
  id: number;
  /** 文章标题 */
  title: string;
  /** 标题前缀（如"独家"、"免登录"、"正版"等显示在标题前的文字） */
  titlePrefix?: string;
  /** 文章摘要 */
  excerpt: string;
  /** 所属分类名称 */
  category: string;
  /** 发布日期（格式: YYYY-MM-DD） */
  date: string;
  /** 阅读量（已格式化的字符串，如 "2.76w"、"10w+"） */
  views: string;
  /** 评论数 */
  comments: number;
  /** 价格（数字或特殊字符串如 "免费"、"VIP"） */
  price: string | number;
  /** 文章标签列表 */
  badges: ArticleBadge[];
  /** 缩略图路径 */
  thumbnail: string;
  /** 拼团信息（可选） */
  groupBuy?: GroupBuyInfo;
}

/** 拼团购买信息 */
export interface GroupBuyInfo {
  /** 拼团进度百分比 (0-100) */
  progress: number;
  /** 已参与人数 */
  participants: number;
}

/* ========== 导航相关类型 ========== */

/** 导航菜单项 */
export interface NavMenuItem {
  /** 菜单显示文字 */
  label: string;
  /** 链接地址 */
  href: string;
  /** 子菜单列表 */
  children?: NavMenuItem[];
  /** 是否高亮/特殊样式 */
  highlight?: boolean;
}

/** 移动端底部导航项 */
export interface MobileNavItem {
  /** 导航文字 */
  label: string;
  /** 链接地址 */
  href: string;
  /** 图标名称 */
  icon: string;
  /** 是否激活状态 */
  active?: boolean;
}

/* ========== 分类相关类型 ========== */

/** 分类数据 */
export interface Category {
  /** 分类唯一标识 */
  id: string;
  /** 分类名称 */
  name: string;
  /** 分类描述 */
  description?: string;
  /** 子分类列表 */
  subCategories?: SubCategory[];
}

/** 子分类 */
export interface SubCategory {
  /** 子分类标识 */
  id: string;
  /** 子分类名称 */
  name: string;
}

/* ========== Banner / 轮播相关类型 ========== */

/** 轮播 Banner 数据 */
export interface BannerItem {
  /** Banner 唯一标识 */
  id: number;
  /** 图片路径 */
  image: string;
  /** 链接地址 */
  href: string;
  /** 替代文字 */
  alt: string;
}

/** 教程快捷入口项 */
export interface TutorialLinkItem {
  /** 显示文字 */
  label: string;
  /** 图标路径 */
  icon: string;
  /** 链接地址 */
  href: string;
}

/** 设计师工具推荐项 */
export interface DesignerToolItem {
  /** 工具名称 */
  label: string;
  /** 图标路径 */
  icon: string;
  /** 链接地址 */
  href: string;
}

/** 热门频道项 */
export interface HotChannelItem {
  /** 频道名称 */
  label: string;
  /** 封面图路径 */
  image: string;
  /** 链接地址 */
  href: string;
}

/** 域名推荐项 */
export interface DomainItem {
  /** 域名描述 */
  title: string;
  /** 副标题 */
  subtitle: string;
  /** 链接地址 */
  href: string;
}

/* ========== 文章轮播教程类型 ========== */

/** 文章轮播项（WordPress 教程滚动区） */
export interface ArticleCarouselItem {
  /** 标题 */
  title: string;
  /** 发布日期 */
  date: string;
  /** 链接地址 */
  href: string;
}

/** 分类标签轮播项 */
export interface CategoryTabItem {
  /** 分类名称 */
  name: string;
  /** 链接地址 */
  href: string;
}

/* ========== VIP 相关类型 ========== */

/** VIP 套餐数据 */
export interface VipPlan {
  /** 套餐唯一标识 */
  id: string;
  /** 套餐名称（如"体验VIP"、"包月VIP"） */
  name: string;
  /** 价格（积分） */
  price: number;
  /** 单位 */
  unit: string;
  /** 有效时长 */
  duration: string;
  /** 每日下载限制描述 */
  dailyLimit: string;
  /** 原价（积分） */
  originalPrice: string;
  /** 资源下载权限描述 */
  downloadAccess: string;
  /** 是否推荐套餐（高亮显示） */
  recommended?: boolean;
}

/* ========== 用户活动相关类型 ========== */

/** 用户活动动态 */
export interface ActivityItem {
  /** 用户名（脱敏后） */
  username: string;
  /** 活动描述 */
  action: string;
  /** 相对时间 */
  time: string;
}

/* ========== 页脚相关类型 ========== */

/** 页脚链接分组 */
export interface FooterLinkGroup {
  /** 分组标题 */
  title: string;
  /** 链接列表 */
  links: FooterLink[];
}

/** 页脚链接 */
export interface FooterLink {
  /** 链接文字 */
  label: string;
  /** 链接地址 */
  href: string;
}

/** 统计数字项 */
export interface StatItem {
  /** 数字值 */
  value: number;
  /** 统计项标签 */
  label: string;
}

/** 优势特性项 */
export interface AdvantageItem {
  /** 特性图标（SVG 路径或 CSS 类名） */
  icon: string;
  /** 特性标题 */
  title: string;
  /** 特性描述 */
  description: string;
}

/* ========== 站点配置类型 ========== */

/** 站点基础配置 */
export interface SiteConfig {
  /** 站点名称 */
  name: string;
  /** 站点描述 */
  description: string;
  /** Logo 路径 */
  logo: string;
  /** 站点公告 */
  announcement: string;
  /** 版权信息 */
  copyright: string;
}

/* ========== 首页区块相关类型 ========== */

/** 首页区块配置 */
export interface SectionConfig {
  /** 区块标题 */
  title: string;
  /** 区块副标题 */
  subtitle: string;
  /** 背景图片（可选） */
  backgroundImage?: string;
}

/** 教程文章项 */
export interface TutorialArticle {
  /** 文章标识 */
  id: number;
  /** 文章标题 */
  title: string;
  /** 发布日期 */
  date: string;
  /** 阅读量 */
  views: string;
  /** 评论数 */
  comments: number;
  /** 缩略图 */
  thumbnail: string;
  /** 链接地址 */
  href: string;
}

/** 列表文章项 */
export interface ListArticle {
  /** 文章标识 */
  id: number;
  /** 文章标题 */
  title: string;
  /** 文章摘要 */
  excerpt: string;
  /** 所属分类 */
  category: string;
  /** 发布日期 */
  date: string;
  /** 阅读量 */
  views: string;
  /** 评论数 */
  comments: number;
  /** 价格 */
  price?: string | number;
  /** 标签 */
  badges: ArticleBadge[];
  /** 缩略图 */
  thumbnail?: string;
}

/** 标题模式文章项 */
export interface TitleArticle {
  /** 排名序号 */
  rank: number;
  /** 文章标题 */
  title: string;
  /** 阅读量 */
  views: string;
  /** 链接地址 */
  href: string;
}

/** 购买通知数据 */
export interface PurchaseNotice {
  /** 文章标题 */
  title: string;
  /** 时间描述 */
  time: string;
  /** 链接地址 */
  href: string;
}

/** 侧边栏快速导航项（右侧目录） */
export interface SideNavItem {
  /** 导航文字 */
  label: string;
  /** 锚点 ID */
  anchorId: string;
}

/** 购买活动项（底部购买记录滚动） */
export interface PurchaseActivityItem {
  /** 活动描述 */
  action: string;
  /** 文章标题 */
  title: string;
  /** 链接 */
  href: string;
}
