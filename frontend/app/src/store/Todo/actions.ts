import { TodosState, TodoPost, Todo } from '@/types/todo'
import { ActionTree } from 'vuex'
import { RootState } from '..'
import { readTodo, createTodo, deleteTodo, putTodo } from '@/api/todos'

const actions: ActionTree<TodosState, RootState> = {
  get: async (context, userId: number) => {
    const todos = await readTodo(userId)
    context.commit('set', todos)
  },
  post: async (context, todoData: TodoPost) => {
    await createTodo(todoData.userId, todoData)
  },
  delete: async (context, todoData: Todo) => {
    await deleteTodo(todoData)
  },
  put: async (context, todoData: Todo) => {
    await putTodo(todoData)
  },
}

export default actions
