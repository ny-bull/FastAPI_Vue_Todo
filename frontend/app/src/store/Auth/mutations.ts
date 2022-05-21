import { MutationTree } from 'vuex'
import { AuthInfo } from '@/types/user'

const mutations: MutationTree<AuthInfo> = {
  add: (state, auth: AuthInfo) => {
    state = auth
  },
  remove: (state) => {
    state = {
      email:"",
      password:""
    }
  },
}

export default mutations
