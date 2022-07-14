import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import store from './store'
import router from "./router"
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(router)
new Vue({
    store,
    vuetify,
    router,
    render: h => h(App)
}).$mount('#app')