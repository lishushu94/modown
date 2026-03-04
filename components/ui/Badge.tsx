/**
 * 标签徽章组件
 * 用于文章卡片上的标签显示：VIP / 荐 / 免费 / 独家 / 正版 / 拼团 / 免登录
 * 不同类型使用不同配色方案
 */

import type { ArticleBadge } from '@/lib/types';

interface BadgeProps {
  /** 标签类型 */
  type: ArticleBadge;
}

/** 各标签类型对应的样式映射 */
const badgeStyles: Record<ArticleBadge, string> = {
  VIP: 'bg-[var(--color-accent)] text-[var(--color-text-white)]',
  '荐': 'bg-[var(--color-primary)] text-[var(--color-text-white)]',
  '免费': 'bg-[var(--color-accent-green)] text-[var(--color-text-white)]',
  '独家': 'bg-[#9c27b0] text-[var(--color-text-white)]',
  '正版': 'bg-[var(--color-accent-blue)] text-[var(--color-text-white)]',
  '拼团': 'bg-[var(--color-primary)] text-[var(--color-text-white)]',
  '免登录': 'bg-[#607d8b] text-[var(--color-text-white)]',
};

export default function Badge({ type }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded px-1.5 py-0.5 text-[10px] font-medium leading-none ${badgeStyles[type]}`}
    >
      {type}
    </span>
  );
}
