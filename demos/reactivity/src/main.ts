// 运行 demo 前，先查看 README.md 文件按照步骤进行初始化
import { reactive, effect, computed } from '@vue/reactivity'

const state = reactive({ a: 1, b: 2 })
const getA = computed(() => state.a)

effect(() => {
  const nextA = state.a + 1
  console.log(nextA, getA.value)
})

state.a += 1
