/**
 * 站点基础配置
 * 包含站点名称、描述、Logo、公告、版权等全局信息
 */

import type { SiteConfig } from '@/lib/types';

/** Modown 站点配置 */
export const siteConfig: SiteConfig = {
  /** 站点名称 */
  name: 'Modown',
  /** 站点 SEO 描述 */
  description: '资源下载wordpress主题_付费下载资源wordpress模板',
  /** Logo 图片路径 */
  logo: '/static/image/0db88f93c18c09edffacff3fab69df2a11293790.png',
  /** 站点公告内容 */
  announcement:
    '2021.06.09起演示站暂时不再提供在线支付测试，仅演示功能，如测试付费下载可联系模板兔。',
  /** 版权声明 */
  copyright: '©2013-2018 模板兔 站内大部分资源收集于网络，若侵犯了您的合法权益，请联系我们删除！',
};
