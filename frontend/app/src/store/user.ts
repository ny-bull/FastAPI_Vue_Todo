import Auth from '@/api/auth'
import { AuthInfo, User, UserState } from '@/types/user'
import { ActionTree, GetterTree, Module, MutationTree } from 'vuex'
import { RootState } from '.'

const state: UserState = {
  userId: 0,
}

const getters: GetterTree<UserState, RootState> = {
  userId: (state: UserState) => {
    return state.userId
  },
}

const actions: ActionTree<UserState, RootState> = {
  login: async (context, authInfo: AuthInfo) => {
    const res: User = await new Auth().login(authInfo)

    context.commit('set', res.id)
  },
  register: async (context, authInfo: AuthInfo) => {
    const auth = new Auth()
    const _ = await auth.register(authInfo)
    const res: User = await auth.login(authInfo)
    context.commit('set', res.id)
  },
  logout: async (context) => {
    const auth = new Auth()
    auth.logout()
    context.commit('reset')
    context.commit('TodosModule/reset', null, { root: true })
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
