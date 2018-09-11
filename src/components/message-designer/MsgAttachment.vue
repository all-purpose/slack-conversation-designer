<template>
	<fieldset class="c-msg-attach-cont">
		<legend class="c-msg-attach-title">Attachment {{ msgID }}</legend>
		<label>Title: <span class="c-msg-des-desc">A visual header for the attachment.</span></label>
		<input name="title" type="text" v-model="attachTitle">
		<label>Fallback: <span class="c-msg-des-desc">A message displayed when attachments aren't supported.</span></label>
		<input name="fallback" type="text">
		<label>Callback ID: <span class="c-msg-des-desc">Unique identifier for message buttons.</span></label>
		<input name="callback_id" type="text">
		<label>Color: <span class="c-msg-des-desc">[hex code] Color of the attachments left-side vertical bar.</span></label>
		<input name="color" type="color">
		<h3 class="c-msg-action-header">Actions</h3>
		<fieldset>
			<button class="c-msg-button">Add Buttons</button>
			<button class="c-msg-button">Add Menu</button>
		</fieldset>
	</fieldset>
</template>

<script>
import MsgButton from "./MsgButton";

export default {
  name: "MsgDesigner",
  data: {
    state: {},
    mutations: {},
    actions: {},
    getters: {}
  },
  components: {
    MsgButton
  }
};
</script>

<style scoped>
</style>