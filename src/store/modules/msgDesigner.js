import { getField, updateField } from 'vuex-map-fields'

// Initial State
const state = {
	curMessage: {
		id: "",
		content: {
			text: "",
			response_type: "in_channel",
			replace_original: false,
			delete_original: false,
			attachments: []
		}
	},
	msgNew: true,
	msgChanged: false,
	messages: [],
	nextMessageID: 0
}

/********************
 * Getters
 * 
 * name: (state, getters, rootState) => (...arguments) => {}
 ********************/
const getters = {
	getField,
	loadMessage: (state, getters) => (id) => {
		return state.messages.find(msg => msg.id === id)
	},

	curMessage: (state, getters) => {
		return state.curMessage.content
	},

	curID: (state, getters) => {
		return state.curMessage.id
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
	resetFields(state, message) {
		const blankFields = {
			id: state.nextMessageID,
			content: {
				text: "",
				response_type: "in_channel",
				replace_original: false,
				delete_original: false,
				attachments: []
			}
		}
		state.curMessage = blankFields
		state.msgNew = true
		state.msgChanged = false
	},

	messageChanged(state) {
		state.msgChanged = true
	},

	setCurMsgID(state) {
		state.curMessage.id = state.nextMessageID
	},

	incNextMsgID(state) {
		state.nextMessageID++
	},

	saveMessage(state, message) {
		const index = state.messages.findIndex(msg => msg.id === message.id)
		console.log(index)
		if (index == "-1") {
			state.messages.push(message)
		} else {
			state.messages[index] = message
		}
	},

	updateMessage(state, message) {
		state.curMessage = message
	}
}

// Actions
const actions = {
	new ({ state, commit }) {
		const wasNew = !state.msgNew
		commit('resetFields')
		!wasNew && commit('incNextMsgID')
	},

	save({ state, commit }) {
		if(!state.curMessage.id >= 0) {// Blank ID
			commit('setCurMsgID')
			commit('incNextMsgID')
		}
		commit('saveMessage', state.curMessage)
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}
