import { RootState, TokenState } from '../types'
import { Module } from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const state: TokenState = {
  token: '',
}

export const token: Module<TokenState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
