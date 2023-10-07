import { reactive, effect } from '@vue/reactivity'

const state = reactive({
  name: 'kelie',
  age: 24
})

effect(() => {
  console.log(state.age)
})
