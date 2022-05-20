import { GetterTree } from 'vuex'
import { TokenState, RootState } from '../types'

const getters: GetterTree<TokenState, RootState> = {
  get: (state: TokenState) => {
    return state.token
  },
}

export default getters
