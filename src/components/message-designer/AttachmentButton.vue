<template>
	<fieldset class="c-msg-button-cont">
		<!-- <legend class="c-msg-button-title">{{ name }} Button</legend> -->
		<label>Name: <span class="c-msg-des-desc">Shared name of the group of buttons</span></label>
		<input name="name" type="text" v-model="name" @input="$emit('update_button', buttonData)">
		<label>Text: <span class="c-msg-des-desc">Text displayed on the button.</span></label>
		<input name="text" type="text" v-model="text" @input="$emit('update_button', buttonData)">
		<label>Value: <span class="c-msg-des-desc">The value the code sees.</span></label>
		<input name="value" type="text" v-model="value" @input="$emit('update_button', buttonData)">
		<label>Style: <span class="c-msg-des-desc">How the button looks.</span></label>
		<select v-model="style" @input="$emit('update_button', buttonData)">
			<option value="default">Default</option>
			<option value="primary">Primary</option>
			<option value="danger">Danger</option>
		</select>
		<label>Confirm: <span class="c-msg-des-desc">Show a confirmation dialog when this button is pressed.</span></label>
		<input name="confirm" type="checkbox" @input="$emit('update_button', buttonData)">
	</fieldset>
</template>

<script>
import { mapGetters, mapState, mapMutations, mapActions } from "vuex"
import { mapFields } from "vuex-map-fields"
// import ButtonConfirm from "./ButtonConfirm"

export default {
  name: "AttachmentButton",
	props: ['data'],
	created: function () {
		this.loadButton(this.data)
	},
  computed: {
    ...mapState({}),
    ...mapGetters("msgDesigner/msgAttachment/attachmentButton", {
			buttonData: "localButton"
		}),
    ...mapFields('msgDesigner/msgAttachment/attachmentButton', [
      "button.content.name",
			"button.content.text",
			"button.content.type",
			"button.content.value",
			"button.content.style"
    ])
  },
  // components: {
  //   ButtonConfirm
  // },
	methods: {
		...mapMutations("msgDesigner/msgAttachment/attachmentButton", {
      loadButton: "loadButton"
    }),
    ...mapActions("msgDesigner/msgAttachment/attachmentButton", {})
	},
};
</script>

<style scoped lang="scss">
fieldset {
	legend {
		text-align: left;
		font-weight: 500;
		padding: 0 0.5rem;
	}
}

.c-msg-button-cont {
	border: none;
	background-color: #ddeeff;
	margin: 0;

  > * {
    display: block;
    text-align: left;
  }

  > label {
    margin: 1rem 0 0.1rem 0;
		font-weight: 500;
		color: #333333;
  }

	.c-msg-des-desc {
		font-weight: 400;
		font-style: italic;
		color: #666;
	}
}

/*  Accordion */
.collapsible {
  list-style: none;
  padding: 0;
	margin: 0 0 1rem 0;
}

.collapsible-header h4 {
	text-align: center;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
  border-left: none;
  border-right: none;
  background-color: #fafafa;
  margin: 0;
  padding: 0.5rem 0;
}

.collapsible-header.active h4 {
  background-color: #dadada;
}
</style>