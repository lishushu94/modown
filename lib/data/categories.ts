/**
 * 分类数据
 * 搜索下拉分类列表、默认样式区块子分类筛选
 */

import type { Category } from '@/lib/types';

/** 搜索栏下拉分类列表 */
export const searchCategories: Category[] = [
  { id: 'all', name: '所有分类' },
  { id: 'uncategorized', name: '未分类' },
  { id: 'startup', name: '初创' },
  { id: 'app', name: '应用' },
];

/** 默认样式区块子分类筛选标签 */
export const defaultStyleSubCategories = [
  { id: 'all', name: '全部' },
  { id: 'sub1', name: '子分类1' },
  { id: 'sub2', name: '子分类2' },
  { id: 'sub3', name: '子分类3' },
];
