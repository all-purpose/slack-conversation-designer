<template>
	<fieldset class="c-msg-button-cont">
		<legend class="c-msg-button-title">{{ buttonText }} Button</legend>
		<label>Name: <span class="c-msg-des-desc">Shared name of the group of buttons</span></label>
		<input name="name" type="text" v-model="buttonName">
		<label>Text: <span class="c-msg-des-desc">Text displayed on the button.</span></label>
		<input name="text" type="text" v-model="buttonText">
		<label>Value: <span class="c-msg-des-desc">The value the code sees.</span></label>
		<input name="value" type="text">
		<label>Style: <span class="c-msg-des-desc">How the button looks.</span></label>
		<select>
			<option value="default">Default</option>
			<option value="primary">Primary</option>
			<option value="danger">Danger</option>
		</select>
		<label>Confirm: <span class="c-msg-des-desc">Show a confirmation dialog when this button is pressed.</span></label>
		<input name="confirm" type="checkbox">
	</fieldset>
</template>

<script>
import MsgConfirm from "./MsgConfirm";

export default {
  name: "MsgDesigner",
  data: {
    state: {},
    mutations: {},
    actions: {},
    getters: {}
  },
  components: {
    MsgConfirm
  }
};
</script>

<style scoped>
</style>