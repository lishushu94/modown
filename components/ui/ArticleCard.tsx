/**
 * 文章资源卡片组件
 * 标准卡片布局：缩略图 + 分类 + 标题(含前缀) + 摘要 + 元数据(日期/阅读量/评论) + 价格/标签
 * 支持拼团进度条显示
 */

import type { Article } from '@/lib/types';
import { Eye, MessageCircle } from 'lucide-react';
import Badge from './Badge';
import PriceTag from './PriceTag';
import GroupBuyProgress from './GroupBuyProgress';

interface ArticleCardProps {
  /** 文章数据 */
  article: Article;
  /** 自定义缩略图高度（如自定义高度区块使用） */
  thumbnailHeight?: string;
}

export default function ArticleCard({ article, thumbnailHeight }: ArticleCardProps) {
  const {
    title,
    titlePrefix,
    excerpt,
    category,
    date,
    views,
    comments,
    price,
    badges,
    thumbnail,
    groupBuy,
  } = article;

  return (
    <article className="group overflow-hidden rounded-lg bg-[var(--color-bg-card)] shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-hover)]">
      {/* ===== 缩略图区域 ===== */}
      <a href="#" className="relative block overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
            thumbnailHeight || 'h-40 md:h-44'
          }`}
        />
        {/* 分类标签（左上角） */}
        <span className="absolute left-2 top-2 rounded bg-black/50 px-2 py-0.5 text-[10px] text-white">
          {category}
        </span>
      </a>

      {/* ===== 内容区域 ===== */}
      <div className="p-3">
        {/* 文章标题 */}
        <h3 className="line-clamp-2 text-sm font-medium text-[var(--color-text-primary)] transition-colors group-hover:text-[var(--color-primary)]">
          <a href="#">
            {titlePrefix && (
              <span className="mr-1 text-[var(--color-primary)]">
                {titlePrefix}
              </span>
            )}
            {title}
          </a>
        </h3>

        {/* 文章摘要 */}
        <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-[var(--color-text-muted)]">
          {excerpt}
        </p>

        {/* 拼团进度条 */}
        {groupBuy && (
          <div className="mt-2">
            <GroupBuyProgress groupBuy={groupBuy} />
          </div>
        )}

        {/* ===== 底部元数据栏 ===== */}
        <div className="mt-2.5 flex items-center justify-between">
          {/* 左侧：日期 + 阅读量 + 评论数 */}
          <div className="flex items-center gap-2 text-[10px] text-[var(--color-text-muted)]">
            {date && <span>{date}</span>}
            {views && (
              <span className="flex items-center gap-0.5">
                <Eye className="h-3 w-3" />
                {views}
              </span>
            )}
            {comments > 0 && (
              <span className="flex items-center gap-0.5">
                <MessageCircle className="h-3 w-3" />
                {comments}
              </span>
            )}
            {/* 价格 */}
            <PriceTag price={price} />
          </div>

          {/* 右侧：标签 */}
          <div className="flex items-center gap-1">
            {badges.map((badge, index) => (
              <Badge key={index} type={badge} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
