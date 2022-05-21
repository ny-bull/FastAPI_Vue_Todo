import { RootState } from '../types'
import { AuthInfo } from '@/types/user'
import { Module } from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const state: AuthInfo = {
  email: '',
  password:''
}

export const token: Module<AuthInfo, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
