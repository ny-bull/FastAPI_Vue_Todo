import { TodosState } from '@/types/todo'
import { ActionTree } from 'vuex'
import { RootState } from '..'
import {readTodo} from "@/api/todos"

const actions: ActionTree<TodosState, RootState> = {
  get:async (state) => {
    const res = await readTodo()
  }
  //   add: async ({ commit }, todo: Todo) => {
  //     if (await someAsyncAddMethod(todo)) {
  //       commit('add', todo);
  //       // 成功
  //       return true;
  //     }
  //     // 失敗
  //     return false;
  //   },
  //   remove: async ({ commit }, id: string ) => {
  //     if (await someAsyncRemoveMethod(id)) {
  //       commit('remove', id);
  //       return true;
  //     }
  //     return false;
  //   },
}

export default actions
