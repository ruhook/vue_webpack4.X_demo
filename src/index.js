import Vue from 'vue'
import App from './app.vue'

// var app = new Vue({
//   el: '#app',
//   data: {
//     message: 'Hello Vue!'
//   },
//   template: '<App/>',
//   components: { App }
// })

new Vue({
  render: h => h(App)
}).$mount("#app")