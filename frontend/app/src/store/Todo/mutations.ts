import { MutationTree } from 'vuex'
import { Todo, TodosState } from '@/types/todo'

const mutations: MutationTree<TodosState> = {
  add: (state, todo: Todo) => {
    state.todos.push(todo)
  },
  remove: (state, id: number) => {
    state.todos = state.todos.filter((e: Todo) => e.id !== id)
  },
}

export default mutations
