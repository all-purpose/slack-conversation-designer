import { getField, updateField } from 'vuex-map-fields'

// Initial State
const state = {
}

/********************
 * Getters
 *
 * name: (state, getters, rootState) => (...arguments) => {}
 ********************/
const getters = {
  getField,
  getMessage: (state, getters, rootState, rootGetters) => {
    return rootGetters[ 'msgDesigner/localMessage' ]
  }
}

/********************
 * Mutations
 *
 * name (state, payload) {}
 ********************/
const mutations = {
  updateField
}

/********************
 * Actions
 *
 * Uses destructured arguments
 * name ({state, commit, getters, rootGetters}, payload) {}
 ********************/
const actions = {
}

// Modules
// const modules = {
//   msgAttachment
// }

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
