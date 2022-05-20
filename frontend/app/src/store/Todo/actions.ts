import { ActionTree } from 'vuex'
import { TodosState, RootState } from '../types'

const actions: ActionTree<TodosState, RootState> = {
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
