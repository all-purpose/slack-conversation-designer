import { getField, updateField } from 'vuex-map-fields'
// import msgAttachment from './MsgAttachment'

/* **** Filter Objects  **** */
Object.filter = (obj, predicate) =>
  Object.assign(...Object.keys(obj)
    .filter(key => predicate(obj[ key ]))
    .map(key => ({ [ key ]: obj[ key ] })))

// Initial State
const state = {
  curMessage: {
    id: 0,
    content: {
      text: '',
      response_type: 'in_channel',
      replace_original: false,
      delete_original: false,
      attachments: []
    }
  },
  msgNew: true,
  msgChanged: false,
  // messages: [],
  nextMessageID: 0,
  nextAttachID: 0
}

/********************
 * Getters
 *
 * name: (state, getters, rootState) => (...arguments) => {}
 ********************/
const getters = {
  getField,
  getMsgByID: (state, getters) => id => {
    return state.messages.find(msg => msg.id === id)
  },

  localMessage: (state, getters) => {
    return state.curMessage.content
  },

  getAttachByID: (state, getters) => id => {
    return getters.localMessage.attachments.find(attach => attach.id === id)
  },

  msgChanged: (state, getters) => {
    return state.msgChanged
  },

  msgNew: (state, getters) => {
    return state.msgNew
  }
}

/********************
 * Mutations
 *
 * name (state, payload) {}
 ********************/
const mutations = {
  updateField,
  /* ***  Message Mutations  *** */
  loadMsg (state, message) {
    state.curMessage = message
  },

  resetFields (state) {
    const blankFields = {
      id: state.nextMessageID,
      content: {
        text: '',
        response_type: 'in_channel',
        replace_original: false,
        delete_original: false,
        attachments: []
      }
    }
    state.curMessage = blankFields
    state.msgNew = true
    state.msgChanged = false
  },

  messageChanged (state) {
    state.msgChanged = true
  },

  setLocalMsgID (state) {
    state.curMessage.id = state.nextMessageID
  },

  incNextMsgID (state) {
    state.nextMessageID++
  },

  saveMessage (state, message) {
    const index = state.messages.findIndex(msg => msg.id === message.id)
    console.log(index)
    if (index === '-1') {
      state.messages.push(message)
    } else {
      state.messages[ index ] = message
    }
  },

  /* ***  Attachment Mutations  *** */
  initAttachment (state) {
    let blankAttachment = [ {
      id: state.nextAttachID,
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
    } ]
    state.curMessage.content.attachments = state.curMessage.content.attachments.concat(blankAttachment)
  },

  saveAttachByID (state, attachment) {
    let attachments = state.curMessage.content.attachments
    let index = attachments.findIndex(attach => attach.id === attachment.id)
    attachments[ index ] = attachment
  },

  incNextAttachID (state) {
    state.nextAttachID++
  }
}

/********************
 * Actions
 *
 * Uses destructured arguments
 * name ({state, commit, getters, rootGetters}, payload) {}
 ********************/
const actions = {
  newMsg ({ state, commit }) {
    const wasNew = !state.msgNew
    commit('resetFields')
    !wasNew && commit('incNextMsgID')
  },

  saveMsg ({ state, commit }) {
    if (!state.curMessage.id >= 0) { // Blank ID
      commit('setLocalMsgID')
      commit('incNextMsgID')
    }
    commit('saveMessage', state.curMessage)
  },

  newAttach ({ state, commit }) {
    commit('initAttachment')
    commit('incNextAttachID')
  }
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
  mutations//, 
  // modules
}
