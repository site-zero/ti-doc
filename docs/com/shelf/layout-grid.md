---
title: 格子布局
author: zozoh
---

# 格子布局控件

# TypeScript 支持

## LayoutGridProps

```bash
<LayoutGridProps>
#---------------------------------------------------
# 布局的必要信息, 主要是如何嵌入各个部分的显示控件
#---------------------------------------------------
|-- &<LayoutProps>
|    |-- &<CommonProps>
|    |   |-- className?: any;
|    |-- &Pick<LayoutBlock, 'name'|'blocks'|'itemStyle'|'itemClass'>
|    |   |-- name?: string;
|    |   |-- blocks?: LayoutBlock[];
|    |   |-- itemStyle?: Vars;
|    |   |-- itemClass?: BlockAspectClass;
|    |-- schema?: LayoutSchema;
#---------------------------------------------------
# 布局如何保持自定义尺寸
#---------------------------------------------------
|-- &<LayoutGridKeepProps>
|    |-- keepShown?: KeepInfo;
|    |-- keepSizes?: KeepInfo;
|    |-- shown?: Vars;
|    |-- sizes?: GridResizingState;
#---------------------------------------------------
# 布局包括哪些弹出性面板
#---------------------------------------------------
|-- &<LayoutPanelProps>
|    |-- panels?: LayoutPanel[];
|    |-- panelStyle?: Vars;
#---------------------------------------------------
# 如何具体进行格子布局
#---------------------------------------------------
|-- &<GridLayoutProps>
|    |-- layout?: CssGridLayout;
|    | # 如何动态指定列轨道数量
|    |-- layoutHint?: GridLayoutHint;
|    | # 如何动态指定列轨道宽度
|    |-- layoutGridTracks?: string | string[];
|    |-- customizedGridTracks?: GridLayoutTrackSizeCustomizedGetter;
#---------------------------------------------------
# 杂项配置
#---------------------------------------------------
|-- gridStyle?: Vars;
|-- resetLocalGridTracks?: boolean;
```

## LayoutBlock

```bash
<LayoutBlock>
#---------------------------------------------------
# 一个布局块块的呈现信息
#---------------------------------------------------
|-- &<BlockInfoProps>
|    |-- icon?: IconInput;
|    |-- title?: string;
|    |-- blockFit?: 'fit' | 'cover' | 'auto';
|    |-- name?: string;
|    | # 右上角菜单
|    |-- actions?: ActionBarItem[];
|    |-- actionVars?: Vars;
|    |-- actionClass?: any;
|    |-- actionStyle?: Vars;
|    | # 其他外观样式
|    |-- &<BlockAspectClass>
|    |    |-- blockClass?: any;
|    |    |-- headClass?: any;
|    |    |-- headStyle?: Vars;
|    |    |-- mainClass?: any;
|    |    |-- mainStyle?: Vars;
#---------------------------------------------------
# 布局块的基础信息
#---------------------------------------------------
# 标识
|-- uniqKey?: string;
# 行为
|-- bar?: LayoutBar | LayoutBar[];
|-- type?: LayoutItemType;  # (block|grid|tabs) 
# 外观
|-- conClass?: any;
# 无论在 tabs|grid 中作为一项，可以自定义自己包裹元素的样式
|-- style?: Vars;
|-- itemStyle?: Vars;
|   # 并非逐项融合，而是逐项设置默认值
|-- itemClass?: BlockAspectClass;
#........................................
# 仅当 type=block 指定 TiBlock 本身的 className
|-- bodyClass?: any;  
# 如果自己在 grid 布局中作为一个布局块项，自己的包裹元素与 grid 相关的样式
|-- grid?: CssGridItem;
# 仅当 type=grid，指定 TiLayoutGrid 本身的 className
|-- gridClass?: any;
#........................................
# 仅当 type=tabs 指定 TiLayoutTabs 本身的 className
|-- tabsClass?: any;
#........................................
# 递归嵌套：type=grid|tabs
|-- blocks?: LayoutBlock[];
#---------------------------------------------------
# 仅仅当 type=block
#---------------------------------------------------
|-- body?: string;
|-- comType?: string;
|-- comConf?: Vars;
#---------------------------------------------------
# 仅仅当 type=grid
#---------------------------------------------------
|-- layout?: CssGridLayout;
|-- keep?: KeepInfo;
#---------------------------------------------------
# 仅仅当 type=tabs
#---------------------------------------------------
|-- &<TabsAspect> 
|    |-- tabsAt?: TabsAt;
|    |-- tabsAlign?: TabsAlign;
|    |-- wrapTabs?: boolean;
|    |-- tabMaxWidth?: string | number;
|    |-- tabItemSpace?: AspectSize;
|    |-- defaultTab?: string | number;
|    |-- keepTab?: KeepInfo;
```

## LayoutSchema

```bash
<LayoutSchema> == Record<string:BlockSchema>
#---------------------------------------------------
# 每个配置具体信息
|-- <BlockSchema>
#---------------------------------------------------
# 使用什么控件
#---------------------------------------------------
|   |-- &<ComRef> 
|   |   |-- comType?: string;
|   |   |-- comConf?: Vars;
#---------------------------------------------------
# 如何适配控件的事件
#---------------------------------------------------
|   |-- &<EmitAdaptorProps>;
|   |   |-- events?: Record<string, EmitAdaptor>;
```