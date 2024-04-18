---
title: 表格控件
author: zozoh
---

# 表格控件

<script setup lang="ts">
import {updateInstalledComponentsLangs, TiPlayground} from "@site0/tijs"
updateInstalledComponentsLangs("zh-cn")
</script>

<TiPlayground comType="TiTable" style="width:100%; height:500px"/>

[[toc]]

# 表格的选中模式

1. 不选
2. 单选
3. 多选

表格会维持一个激活的单元格，如果配置了激活控件的列，则会在激活的时候展示激活控件。

# 表格的属性

```bash
# 显示样式
className?: any;
mainStyle?: Vars; 
rowGap?: number;  # 行间距，即水平表格线的尺寸
colGap?: number;  # 列间距，即垂直表格线的尺寸
# 如果不指定表格行最小高度，则无法计算滚动渲染区。
# 单位为`px`
# ！！！！！！！ 这个需要删除，以后可以自动计算
rowMinHeight?: number;
#----------------------------------------------
# 行为属性
columns: TableCell[];
vars?: Vars;  # 传入的上下文变量字段

# 一个缩进块的缩进尺寸，数字表示 px，也可以是 css 的尺寸
# 会变成 calc($indentSize * $indent)
indentSize?: string | number;

showCheckbox?: boolean;
showRowIndex?: boolean;

canHover?: boolean;
canCheck?: boolean;
canSelect?: boolean;

columnResizable?: boolean;  # 表格的列是否可以被调整大小
columnResizeInTime: 50

showHeader   # 是否显示表头
#----------------------------------------------
# 持久状态
keepColumns: string | {keepAt, keepMode} 
#----------------------------------------------
# 选择
data: Vars[];  # 传入的数据对象
# 从指定的对象获取 ID
#
# - `string` : 表示一个数据键，将通过 `_.get` 获取值，这个值必须是 `T`
#              或者可以被 `anyConvertor` 转换的值
# - `Function` : 一个获取 ID 的函数
getId: Convertor<Vars, ID | undefined> | string;
multi?: boolean;   # 是否支持多重选择
convertToId: (any)=>ID|undefined  # 将任何值转换为 `ID`;
currentId?: ID;
checkedIds?: Record<ID, boolean> | Map<ID, boolean>;
#----------------------------------------------
# 其他属性
vars?: Vars;    # 传入的上下文变量字段
#----------------------------------------------
defaultCellComType?: string;
defaultCellComConf?: Vars;
defaultCellActivatedComType?: string;
defaultCellActivatedComConf?: Vars;
```






