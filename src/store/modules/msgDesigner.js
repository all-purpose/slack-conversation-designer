import { getField, updateField } from 'vuex-map-fields'
import msgAttachment from './MsgAttachment'

/* **** Filter Objects  **** */
Object.filter = (obj, predicate) => 
  Object.assign(...Object.keys(obj)
    .filter( key => predicate(obj[key]) )
    .map( key => ({ [key]: obj[key] }) ) );

// Initial State
const state = {
  curMessage: {
    id: '',
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
  messages: [],
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

  localMsgID: (state, getters) => {
    return state.curMessage.id
  },

  msgChanged: (state, getters) => {
    return state.msgChanged
  },

  msgNew: (state, getters) => {
    return state.msgNew
  },

  formattedMessage: (state) => {
    let json = state.curMessage.content
    if (json.attachments && json.attachments.length > 0) {
      json.attachments = json.attachments.map((attachment) => {
        let newAttach = attachment.content
        if (newAttach.actions && newAttach.actions.length > 0) {
          newAttach.actions = newAttach.actions.map((action) => {
            return action.content
          })
        }
        return newAttach
      })
    } 
    return json
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
      state.messages[index] = message
    }
  },

  /* ***  Attachment Mutations  *** */
  initAttachment (state) {
    const newAttachment = {
      id: state.nextAttachID,
      content: {
        title: '',
        fallback: '',
        callback_id: '',
        pretext: '',
        text: '',
        color: '#000000',
        actions: []
      }
    }
    state.curMessage.content.attachments.push(newAttachment)
  },

  saveAttachByID (state, attachment) {
    let attachments = state.curMessage.content.attachments
    let index = attachments.findIndex(attach => attach.id === attachment.id)
    attachments[index] = attachment
    console.log("Attachment " + index + " updated")
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

  newAttach({ state, commit }) {
    commit('initAttachment')
    commit('incNextAttachID')
  },

  setActiveAttachment ({ commit, getters }, id) {
    let activeAttachment = getters.getAttachByID(id)
    commit('msgDesigner/msgAttachment/loadAttachment', activeAttachment, { root: true })
  }
}

// Modules
const modules = {
  msgAttachment
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
  modules
}
