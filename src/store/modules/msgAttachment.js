import { getField, updateField } from 'vuex-map-fields'
import attachmentButton from './attachmentButton'

// Initial State
const state = {
  attachment: {
    id: 0,
    content: {
      title: '',
      fallback: '',
      callback_id: '',
      pretext: '',
      text: '',
      color: '#000000',
      actions: []
    }
  },
  nextActionID: '0'
}

/********************
 * Getters
 *
 * name: (state, getters, rootState) => (...arguments) => { return }
 ********************/
const getters = {
  getField,
  localAttach: (state) => {
    return state.attachment
  },

  // fullAttach: (state) => {
  //   return state.attachment
  // },

  getActionByID: (state, getters) => id => {
    return getters.localAttach.content.actions.find(action => action.id === id)
  },
}

/********************
 * Mutations
 *
 * name (state, payload) {}
 ********************/
const mutations = {
  updateField,
  loadAttachment (state, attachment) {
    state.attachment = attachment
  },

  /*  Button Mutations  */
  initButton (state) {
    const newButton = {
      id: state.nextActionID,
      content: {
        name: '',
        text: '',
        type: 'button',
        value: '',
        style: ''
      }
    }
    state.attachment.content.actions.push(newButton)
  },

  saveActionByID (state, action) {
    let actions = state.attachment.content.actions
    let index = actions.findIndex(act => act.id === action.id)
    actions[index] = action
    console.log("Action " + index + " updated")
  },

  incNextActionID (state) {
    state.nextActionID++
  }
}

/********************
 * Actions
 *
 * Uses destructured arguments
 * name ({state, commit, getters, rootGetters}, payload) {}
 ********************/
const actions = {
  saveAttachment ({state, commit} ) {
    commit('msgDesigner/saveAttachByID', state.attachment , { root: true })
    console.log("Saved Attachment to Message")
  },

  newButton ({state, commit}) {
    commit('initButton')
    commit('incNextActionID')
  },

  setActiveButton ({ state, commit, getters }, id) {
    let newButton = getters.getActionByID(id)
    commit('msgDesigner/msgAttachment/attachmentButton/loadButton', newButton, { root: true })
  }
}

// Modules
const modules = {
  attachmentButton
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
  modules
}
