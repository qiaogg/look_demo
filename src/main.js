// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Viewer from 'v-viewer'

import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'    //english
import 'element-ui/lib/theme-chalk/index.css'
import $ from 'jquery'
Vue.use(ElementUI,{locale},Viewer)
Vue.prototype.$ajax = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
Viewer.setDefaults({
  zIndexInline: 9999
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
