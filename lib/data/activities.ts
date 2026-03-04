/**
 * 用户活动动态数据
 * 首页顶部用户行为滚动通知条
 */

import type { ActivityItem, PurchaseNotice, PurchaseActivityItem } from '@/lib/types';

/** 用户活动动态列表（10 条循环滚动） */
export const activityItems: ActivityItem[] = [
  { username: '1*******', action: '登录了本站', time: '2周前' },
  { username: 'u*******', action: '签到打卡，获得1积分奖励', time: '3周前' },
  { username: 'w*****1', action: '登录了本站', time: '3周前' },
  { username: 'a****3', action: '登录了本站', time: '3周前' },
  { username: '3***0', action: '购买了资源 演示收费观看视频，支持视频列表', time: '3周前' },
  { username: '3***0', action: '签到打卡，获得1积分奖励', time: '3周前' },
  { username: '3***0', action: '加入了本站', time: '3周前' },
  { username: 'j****i', action: '签到打卡，获得1积分奖励', time: '3周前' },
  { username: '1*******', action: '登录了本站', time: '2天前' },
  { username: 'c*******', action: '加入了本站', time: '3天前' },
];

/** 购买弹窗通知（右下角浮窗） */
export const purchaseNotice: PurchaseNotice = {
  title: '演示收费查看文章部分内容',
  time: '10分钟前',
  href: '#',
};

/** 底部购买记录滚动列表 */
export const purchaseActivities: PurchaseActivityItem[] = [
  { action: '购买了', title: '演示收费观看视频，支持视频列表', href: '#' },
  { action: '购买了', title: '演示免登录付费下载', href: '#' },
  { action: '购买了', title: '演示多附件多价格收费下载', href: '#' },
  { action: '购买了', title: '演示收费查看文章部分内容', href: '#' },
];
