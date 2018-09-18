import Vue from 'vue'
import Vuex from 'vuex'
import msgDesigner from './modules/msgDesigner'
import msgAttachment from './modules/msgAttachment'
import attachmentButton from './modules/attachmentButton'
import msgPreview from './modules/msgPreview'

Vue.use(Vuex)

/********************
 * State
 *
 ********************/
const state = {
  slackMessage: {
    text: '',
    response_type: 'in_channel',
    replace_original: false,
    delete_original: false,
    attachments: []
  },
  messages: [],
  nextMsgID: 1
}

/********************
 * Getters
 *
 * name: (state, getters, rootState) => (...arguments) => {}
 ********************/
const getters = {
  getMessageByID: (state, getters) => id => {
    return state.messages.find(msg => msg.id === id)
  }
}

/********************
 * Mutations
 *
 * name (state, payload) {}
 ********************/
const mutations = {
  initMessage (state) {
    const blankMessage = {
      id: state.nextMessageID,
      content: {
        text: '',
        response_type: 'in_channel',
        replace_original: false,
        delete_original: false,
        attachments: []
      }
    }
    state.messages.push(blankMessage)
  },

  saveMsgByID (state, message) {
    let index = state.messages.findIndex(msg => msg.id === message.id)
    state.messages[ index ] = message
  },

  incNextMessageID (state) {
    state.nextMsgID++
  }
}

/********************
 * Actions
 *
 * Uses destructured arguments
 * name ({state, commit, getters, rootGetters}, payload) {}
 ********************/
const actions = {
  newMessage ({ state, commit }) {
    commit('initMessage')
    commit('incNextMsgID')
  }
}

const modules = {
  msgDesigner,
  msgAttachment,
  attachmentButton,
  msgPreview
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules
})
