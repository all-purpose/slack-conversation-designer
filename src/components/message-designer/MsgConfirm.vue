<template>
	<fieldset class="c-msg-confirm-cont">
		<legend class="c-msg-confirm-title">Action Confirmation</legend>
		<label>Title: <span class="c-msg-des-desc">Heading for the confirmation dialog</span></label>
		<input name="title" type="text" v-model="confirmTitle">
		<label>Text: <span class="c-msg-des-desc">Body text of the confirmation dialog.</span></label>
		<input name="text" type="text">
		<label>Ok Text: <span class="c-msg-des-desc">OK button text.</span></label>
		<input name="ok_text" type="text">
		<label>Dismiss Text: <span class="c-msg-des-desc">Dismiss button text.</span></label>
		<input name="dismiss_text" type="text">
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
export default {
  name: "MsgDesigner",
  data: {
    state: {},
    mutations: {},
    actions: {},
    getters: {}
  }
};
</script>

<style scoped>
</style>