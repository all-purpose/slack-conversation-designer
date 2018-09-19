import { getField, updateField } from 'vuex-map-fields'

// Initial State
const state = {
  attachment: {
    id: 0,
    content: {
      fallback: '',
      color: '#000000',
      callback_id: '',
      pretext: '',
      author_name: '',
      author_link: '',
      author_icon: '',
      title: '',
      title_link: '',
      text: '',
      fields: [],
      image_url: '',
      thumb_url: '',
      footer: '',
      footer_icon: '',
      ts: '',
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

  getActionByID: (state, getters) => id => {
    return getters.localAttach.content.actions.find(action => action.id === id)
  }
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
    // actions[ index ] = action
    // this.$set()
    actions[ index ] = { ...actions[ index ], ...action }
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
  newButton ({ state, commit }) {
    commit('initButton')
    commit('incNextActionID')
  }
}

// Modules
// const modules = {
//   attachmentButton
// }

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
