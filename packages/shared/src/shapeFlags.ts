export enum ShapeFlags {
  ELEMENT = 1,
  /** 函数组件 */
  FUNCTIONAL_COMPONENT = 1 << 1,
  /** 有状态的组件 */
  STATEFUL_COMPONENT = 1 << 2,
  /** 文本子节点 */
  TEXT_CHILDREN = 1 << 3,
  /** 数组子节点 */
  ARRAY_CHILDREN = 1 << 4,
  /** 插槽子节点 */
  SLOTS_CHILDREN = 1 << 5,
  /** 内置组件 teleport */
  TELEPORT = 1 << 6,
  /** 内置组件 suspense */
  SUSPENSE = 1 << 7,
  /** 应该 keep alive 的组件 */
  COMPONENT_SHOULD_KEEP_ALIVE = 1 << 8,
  /** 已经 keep alive 的组件 */
  COMPONENT_KEPT_ALIVE = 1 << 9,
  /** 组件（函数组件 或 有状态组件） */
  COMPONENT = ShapeFlags.STATEFUL_COMPONENT | ShapeFlags.FUNCTIONAL_COMPONENT,
}
