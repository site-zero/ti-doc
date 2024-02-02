---
title: 表单控件
author: zozoh
---

# 表单控件

<script setup lang="ts">
import {updateInstalledComponentsLangs, TiPlayground} from "@site0/tijs"
updateInstalledComponentsLangs("zh-cn")
</script>

<TiPlayground comType="TiForm" style="width:100%; height:400px"/>

[[toc]]

# 字段组的布局

表单的逻辑结构为：

```bash
表单
|-- 字段组-1
|   |-- 字段 A
|   |-- 字段 B
|   |-- ...
|-- 字段组-2
|   |-- 字段 X
|   |-- 字段 Y
|   |-- ...
```

因此表单的布局最主要就是字段组内的字段布局，我们称为*字段组布局*。
在表单层面字段组之间是怎么布局则相对简单，基本上，我们只有横向、纵向两种排布方式。
如果采用 `css flex` 布局模型是很容易做的。

*字段组布局*采用 `css grid` 布局模型。 我们有下面两种布局策略：

::: tip 字段组布局策略

1. *自动策略* : 分析字段和表单整体宽度，来决定如何排布字段，
适用于大多数使用场景，主打一个配置简便省力。
2. *精确策略* : 可以允许调用者精确指定如何布局。
适用于对字段排版要求非常高，并希望最大限度的节省空间

:::

无论哪种策略，实际上都要依次回答下面的问题：

1. 格子布局的流向 `grid-auto-flow`
2. 行列轨道数 `grid-template-columns/grid-template-rows`
3. 每个字段所在的行和列以及跨度
   - *自动策略* 采用 `grid-column/grid-row` 自动排布
   - *精确策略* 采用 `grid-area` 来指定

在*自动策略*下，我们会根据字段组



# 控件属性

## 数据

### `data`

### `vars`

### `fixed`

## 字段

### `fields`

### `readonly`

### `fieldStatus`

### `defaultFieldType`

### `defaultComType`

### `defaultComConf`

### `statusIcons`

### `batchHint`

### `batchMode`

### `batchReadonly`

## 行为

### `onlyFields`

### `omitHiddenFields`

### `dataMode`

### `notifyMode`

### `autoShowBlank`

## 外观&布局

### `title`

### `layout`

### `blankAs`

### `gridColumnHint`
