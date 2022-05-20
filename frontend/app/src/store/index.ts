import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from './types'
import { todos } from './Todo'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0',
  },
  modules: {
    todos,
  },
}
export default new Vuex.Store<RootState>(store)
