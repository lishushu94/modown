/**
 * 区块标题组件
 * 每个首页区块的标准标题格式：主标题 + 副标题（可选） + 右侧操作区
 */

interface SectionHeaderProps {
  /** 区块主标题 */
  title: string;
  /** 区块副标题描述 */
  subtitle?: string;
  /** 右侧自定义内容（如"查看更多"按钮） */
  extra?: React.ReactNode;
  /** 自定义类名 */
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  extra,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`mb-5 flex items-end justify-between ${className}`}>
      <div>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)] md:text-xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-1 text-xs text-[var(--color-text-muted)] md:text-sm">
            {subtitle}
          </p>
        )}
      </div>
      {extra && <div className="shrink-0">{extra}</div>}
    </div>
  );
}
