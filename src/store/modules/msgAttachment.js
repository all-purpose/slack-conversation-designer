import { getField, updateField } from 'vuex-map-fields'

// Initial State
const state = {
	attachments: []
}

/********************
 * Getters
 * 
 * name: (state, getters, rootState) => (...arguments) => {}
 ********************/
const getters = {
	getField
}

/********************
 * Mutations
 * 
 * name (state, payload) {}
 ********************/
const mutations = {
	updateField,
	newAttachment(state, attachment) {
		newAttachment = {
			// Use callback as ID.
			title: "",
			fallback: "",
			callback: "",
			pretext: "",
			text: "",
			color: ""
		}
	},

	saveMessage(state, message) {
		const index = state.messages.findIndex(msg => msg.id === message.id)
		state.messages[index] = message
	},

	updateMessage(state, message) {
		state.curMessage = message
	}
}

// Actions
const actions = {
	new ({ state, commit }) {

	},

	save({ state, commit }, message) {
		commit('saveMessage', message)
	}
}

export default {
	namespaced: false,
	state,
	getters,
	actions,
	mutations
}
