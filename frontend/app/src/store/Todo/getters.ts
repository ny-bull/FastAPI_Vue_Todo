import { GetterTree } from 'vuex'
import { TodosState, RootState } from '../types'

const getters: GetterTree<TodosState, RootState> = {
  size: (state: TodosState) => {
    return state.todos.length
  },
}

export default getters
