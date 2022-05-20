import { MutationTree } from 'vuex'
import { TokenState } from '../types'

const mutations: MutationTree<TokenState> = {
  add: (state, token: String) => {
    state.token = token
  },
  remove: (state) => {
    state.token = ""
  },
}

export default mutations
