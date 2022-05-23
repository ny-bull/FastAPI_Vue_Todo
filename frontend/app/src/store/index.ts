import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { todos } from './Todo'
import { UserModule } from './user'

Vue.use(Vuex)

export interface RootState {
  version: string
}

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0',
  },
  modules: {
    todos,
    UserModule,
  },
}
export default new Vuex.Store<RootState>(store)
