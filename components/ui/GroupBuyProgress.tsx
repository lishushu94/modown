/**
 * 拼团进度条组件
 * 显示拼团购买的进度百分比和参与人数
 * 进度条颜色根据完成度变化
 */

import type { GroupBuyInfo } from '@/lib/types';

interface GroupBuyProgressProps {
  /** 拼团信息 */
  groupBuy: GroupBuyInfo;
}

export default function GroupBuyProgress({ groupBuy }: GroupBuyProgressProps) {
  const { progress, participants } = groupBuy;

  return (
    <div className="flex items-center gap-2">
      {/* 进度条容器 */}
      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-200">
        <div
          className={`h-full rounded-full transition-all ${
            progress >= 100
              ? 'bg-[var(--color-accent-green)]'
              : 'bg-[var(--color-primary)]'
          }`}
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
      {/* 进度百分比 */}
      <span className="text-[10px] text-[var(--color-text-muted)]">
        {progress}%
      </span>
      {/* 参与人数 */}
      <span className="text-[10px] text-[var(--color-text-muted)]">
        {participants}
      </span>
    </div>
  );
}
