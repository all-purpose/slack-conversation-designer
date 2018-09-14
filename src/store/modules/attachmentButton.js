import { getField, updateField } from 'vuex-map-fields'

// Initial State
const state = {
  button: {
    id: 0,
    content: {
      name: '',
      text: '',
      type: 'button',
      value: '',
      style: ''
    }
  }
}

/********************
 * Getters
 *
 * name: (state, getters, rootState) => (...arguments) => { return }
 ********************/
const getters = {
  getField,
  localButton: (state) => {
    return state.button
  }
}

/********************
 * Mutations
 *
 * name (state, payload) {}
 ********************/
const mutations = {
  updateField,
  loadButton (state, button) {
    state.button = button
  }
}

/********************
 * Actions
 *
 * Uses destructured arguments
 * name ({state, commit, getters, rootGetters}, payload) {}
 ********************/
const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
