import Vue from 'vue'
import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields'
import msgDesigner from './modules/msgDesigner'
// import template from './modules/template'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    msgDesigner
  }
})