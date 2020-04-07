// with polyfills
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import singleSpaVue from 'single-spa-vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import { VueAxios } from './utils/request'

// mock
// WARNING: `mockjs` NOT SUPPORT `IE` PLEASE DO NOT USE IN `production` ENV.
import './mock'

import bootstrapConfig from './core/bootstrap'
import './core/lazy_use'
import './permission' // permission control
import './utils/filter' // global filter
import './components/global.less'
import { Dialog } from '@/components'

Vue.config.productionTip = false

// mount axios Vue.$http and this.$http
Vue.use(VueAxios)
Vue.use(Dialog)

// new Vue({
//   router,
//   store,
//   created: bootstrapConfig,
//   render: h => h(App)
// }).$mount('#app')
const vueOptions = {
  el: '#vue',
  router,
  store,
  created: bootstrapConfig,
  render: h => h(App)
}
if (!window.singleSpaNavigate) { // 如果不是single-spa模式
  delete vueOptions.el
  new Vue(vueOptions).$mount('#app')
}
// singleSpaVue包装一个vue微前端服务对象
const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: vueOptions
})
// 导出生命周期对象
export const bootstrap = vueLifecycles.bootstrap // 启动时
export const mount = vueLifecycles.mount // 挂载时
export const unmount = vueLifecycles.unmount // 卸载时
export default vueLifecycles
