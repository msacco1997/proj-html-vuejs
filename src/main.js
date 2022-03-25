import Vue from 'vue'
import App from './App'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faWifi } from '@fortawesome/free-solid-svg-icons'
import { faLandmarkAlt } from '@fortawesome/free-solid-svg-icons'


/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faPhone)
library.add(faWifi)
library.add(faLandmarkAlt)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
