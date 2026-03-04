/**
 * 工具函数
 * 项目通用的辅助函数
 */

/**
 * 格式化数字为带单位的字符串
 * @param num - 原始数字
 * @returns 格式化后的字符串（如 "1.2w"、"8.1k"）
 */
export function formatNumber(num: number): string {
  if (num >= 10000) {
    return `${(num / 10000).toFixed(1).replace(/\.0$/, '')}w`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1).replace(/\.0$/, '')}k`;
  }
  return num.toString();
}

/**
 * 数字递增动画
 * 用于统计数字区块的计数器动画效果
 * @param target - 目标数字
 * @param duration - 动画持续时间（毫秒）
 * @param callback - 每一帧的回调函数，接收当前值
 */
export function animateCounter(
  target: number,
  duration: number,
  callback: (value: number) => void
): void {
  const startTime = Date.now();
  const step = () => {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    /** 使用 easeOutQuart 缓动函数实现减速效果 */
    const eased = 1 - Math.pow(1 - progress, 4);
    callback(Math.floor(eased * target));
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };
  requestAnimationFrame(step);
}

/**
 * 条件拼接 CSS 类名（简版 clsx）
 * @param classes - 类名数组，支持 false/undefined/null 值
 * @returns 拼接后的类名字符串
 */
export function cx(...classes: (string | false | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}
