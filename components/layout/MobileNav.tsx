/**
 * 移动端底部固定导航栏
 * 5 个主要入口：首页、发现、VIP、客服、我的
 * 仅在移动端（lg 以下）显示
 */
'use client';

import { Home, Compass, Crown, Headphones, UserCircle } from 'lucide-react';
import { mobileBottomNav } from '@/lib/data/navigation';

/** 图标名称到 Lucide 组件的映射 */
const iconMap: Record<string, React.ElementType> = {
  home: Home,
  discover: Compass,
  vip: Crown,
  service: Headphones,
  user: UserCircle,
};

export default function MobileNav() {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-[var(--color-border-light)] bg-[var(--color-bg-white)] lg:hidden"
      aria-label="移动端底部导航"
    >
      <div className="flex items-center justify-around">
        {mobileBottomNav.map((item, index) => {
          const Icon = iconMap[item.icon] || Home;
          return (
            <a
              key={index}
              href={item.href}
              className={`flex flex-1 flex-col items-center gap-0.5 py-2 text-[10px] transition-colors ${
                item.active
                  ? 'text-[var(--color-primary)]'
                  : 'text-[var(--color-text-muted)] hover:text-[var(--color-primary)]'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
