import { GetterTree } from 'vuex'
import {  RootState } from '../types'
import { AuthInfo } from '@/types/user'

const getters: GetterTree<AuthInfo, RootState> = {
  email: (state: AuthInfo) => {
    return state.email
  },
  password:(state:AuthInfo) => {
    return state.password
  }
}

export default getters
