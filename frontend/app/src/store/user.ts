import Auth from '@/api/auth'
import { AuthInfo, User, UserState } from '@/types/user'
import { ActionTree, GetterTree, Module, MutationTree } from 'vuex'
import { RootState } from '.'

const state: UserState = {
  userId: 0,
}

const getters: GetterTree<UserState, RootState> = {
  userId: (state: UserState) => {
    return state
  },
}

const actions: ActionTree<UserState, RootState> = {
  login: async (context, authInfo: AuthInfo) => {
    const res: User = await new Auth().login(authInfo)
    context.commit('set', res.id)
  },
}

const mutations: MutationTree<UserState> = {
  set(state, userId: number) {
    state.userId = userId
  },
  reset(state) {
    state.userId = 0
  },
}

export const UserModule: Module<UserState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
