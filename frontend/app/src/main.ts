import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faTrash, faPen, faArrowRightFromBracket)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
