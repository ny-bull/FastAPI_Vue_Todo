import { TodosState } from '@/types/todo'
import { GetterTree } from 'vuex'
import { RootState } from '..'

const getters: GetterTree<TodosState, RootState> = {
  size: (state: TodosState) => {
    return state.todos.length
  },
  all_todo:(state:TodosState) => {
    return state.todos
  }
}

export default getters
