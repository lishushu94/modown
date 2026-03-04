/**
 * 价格标签组件
 * 显示文章资源的价格信息
 * 支持：数字价格、"免费"、"VIP" 等特殊标识
 */

interface PriceTagProps {
  /** 价格值（数字或特殊字符串） */
  price: string | number;
}

export default function PriceTag({ price }: PriceTagProps) {
  /** 空价格不显示 */
  if (price === '' || price === undefined || price === null) return null;

  /** 根据价格类型决定显示样式 */
  if (price === '免费') {
    return (
      <span className="text-xs font-medium text-[var(--color-accent-green)]">
        免费
      </span>
    );
  }

  if (price === 'VIP') {
    return (
      <span className="text-xs font-medium text-[var(--color-accent)]">
        VIP
      </span>
    );
  }

  /** 数字价格，显示积分单位 */
  return (
    <span className="text-xs font-medium text-[var(--color-primary)]">
      {price}积分
    </span>
  );
}
