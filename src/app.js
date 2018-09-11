// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import Vuex from 'vuex'
// import VTooltip from 'v-tooltip'
import App from './App.vue'
import store from './store/index.js'


// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

console.log("app.js logging:")
console.dir(store)

// Vue.use(Vuex)
// Vue.use(VTooltip)

// const store = new Vuex.Store({
//   modules: {

//   }
// })


