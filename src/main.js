import Vue from 'vue'
import './filters/filters.js'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import App from './App.vue'
 



new Vue({
  el: '#app',
  render: h => h(App)
})
