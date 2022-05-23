import { Module } from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import { TodosState } from '@/types/todo'
import { RootState } from '..'

const state: TodosState = {
  todos: [],
}

export const todos: Module<TodosState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
