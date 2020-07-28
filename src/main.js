import Vue from 'vue'
import App from './App.vue'
// 导入bootstrap
import "bootstrap"
import "bootstrap/dist/css/bootstrap.css"
// font
import "font-awesome/css/font-awesome.min.css"


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
