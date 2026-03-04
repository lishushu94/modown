/**
 * VIP 套餐定价数据
 * 包含 4 个 VIP 等级的完整信息
 */

import type { VipPlan } from '@/lib/types';

/** VIP 套餐列表（从左到右：体验 -> 包月 -> 包年 -> 终身） */
export const vipPlans: VipPlan[] = [
  {
    id: 'trial',
    name: '体验VIP',
    price: 1,
    unit: '积分',
    duration: '1天',
    dailyLimit: '每天可下载1个VIP资源',
    originalPrice: '原价30积分',
    downloadAccess: '部分资源免费下载',
    recommended: false,
  },
  {
    id: 'monthly',
    name: '包月VIP',
    price: 50,
    unit: '积分',
    duration: '30天',
    dailyLimit: '每天可下载5个VIP资源',
    originalPrice: '原价80积分',
    downloadAccess: '部分资源免费下载',
    recommended: false,
  },
  {
    id: 'yearly',
    name: '包年VIP',
    price: 200,
    unit: '积分',
    duration: '12个月',
    dailyLimit: '每天可下载15个VIP资源',
    originalPrice: '原价300积分',
    downloadAccess: '部分资源免费下载',
    recommended: true,
  },
  {
    id: 'lifetime',
    name: '终身VIP',
    price: 500,
    unit: '积分',
    duration: '永久',
    dailyLimit: '每天无限制下载VIP资源',
    originalPrice: '原价650积分',
    downloadAccess: '全站免费下载',
    recommended: false,
  },
];
