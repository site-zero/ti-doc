---
title: 提示框
author: zozoh
---

# 动机与场景

搭建界面的时候，我们总是需要给用户比较友好的提示。 同时我们也希望开发者能用最少
的力气实现功能丰富的提示框。

**提示的时机**

- 鼠标 Hover 将展示提示
- 每个提示都可以选择【不再提示】
- 有一个配置界面，可以将【不再提示】的项目改成【询问提示/永远提示】
- 在提示位置，按住 `ALT+CTRL+SHIFT+Mouse Hover`将会强制打开提示

**提示的尺寸**

与*模式框*一样，提示框也可以指定下面三对属性，来限制提示框的大小:

- `width/height`
- `maxWidth/maxHeight`
- `minWidth/minHeight`

默认的，提示尺寸为 `maxWidth:500px,minWidth:20px,minHeight:20px`

**提示的位置**

根据参考元素所在的矩形（窗口坐标系），提示框将有下面`8`个可能的位置

```
[left-top]       [top]      [right-top]
          +-----------------+
          |                 |
[left]    |  Refer Element  | [right]
          |                 |
          +-----------------+
[bottom-left]   [bottom]    [right-top]
```

> 如果没有给定参考元素，理论上是不可能有提示框的

因此，提示框的位置有下面`10`个可能的输入值

- `left/right-top/bottom` 上述 8 个位置
- `x-auto` 根据参考对象所在位置，自动决定是 `left` 还是 `right`
- `y-auto` 根据参考对象所在位置，自动决定是 `top` 还是 `bottom`

默认的，提示位置为 `y-auto`

**提示的内容**

- 普通文字提示
- HTML 富文本提示
- Markdown 提示

# 解决方案

我们需要支持使用者在 `DOM` 里，直接通过 `data-xxx` 属性来声明 `tip`，也可以通过
`JS-API` 的方式注册 `tip`

整个 APP 将缓存一个 tip 的全局实例集合，它是下面的逻辑结构

```bash
<TipManager>
|-- [APP 1]
|   |-- {TipSet 1}                  # 每个控件实例都会分配一个集合
|   |-- {TipSet 2}                  # 控件注销时，会自动删除这个集合
|   |   |-- {id,type,content...}    # Tip对象，后面章节有设计细节
|   |   |-- ...                     # 每个集合可以有多个 tip对象
|   |-- {TipSet 3}
|-- [APP 2]
|   |-- {TipSet 1}
|   |-- {TipSet 2}
|-- [APP 3]
|   |-- {TipSet 1}
#------------------------------
|-- <Settings>            # 针对每个带有 ID 的 tip，可以有本地行为配置
|   |-- ID: {...}         # 也就是一个针对 ID 的散列表
```

因此，每个控件大概会经过下面的过程管理自己的 Tips

```bash
# ------------------- Setup
# 1. 获取一个 TipSet
const tipset = useTipSet();

# 主动注册 Tip, 被 selector 选中的元素会被标识 `data-tip` 属性
# 同时如果你没有指定 tip.id， 它会为这个 tip 对象，自动分配一个
tipset.add({selector, ...})

# -------------------- Mounted
# 从根元素，向下递归查找`data-tip`元素，并根据其详细配置
# 记录到集合中,
# 同时它也是让 tipset 真正生效的时刻，
# 也就是说，这个时刻才是标记 `data-tip` 到各个参考元素的时候
# 同时它会为 $el 添加一个监听函数
tipset.watch($el)

# -------------------- Unmounted
# 移除整个 tipset
tipset.remove()
```

当然，如果在 useTipSet 的时候，你传递了 `{mounted, unmounted}` 选项
你就不用显式的在对应回调里调用 `watch` 或 `remove` 方法了

# 设计细节

## useTipSet

```ts
const tipset = useTipSet({
})
```
