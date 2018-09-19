<template>
	<div class="c-msg-button-cont">
		<b-field label="Name:">
			<b-input placeholder="Shared name of the group of buttons" v-model="localButton.content.name" @input="$emit('upd-btn', localButton)"></b-input>
		</b-field>
		<b-field label="Text:">
			<b-input placeholder="The button label" v-model="localButton.content.text" @input="$emit('upd-btn', localButton)"></b-input>
		</b-field>
		<b-field label="Value:">
			<b-input placeholder="The value the code uses" v-model="localButton.content.value" @input="$emit('upd-btn', localButton)"></b-input>
		</b-field>
		<b-field label="Style">
			<b-select placeholder="Button Color" v-model="localButton.content.style" @input="$emit('upd-btn', localButton)" required>
				<option value="default">Default</option>
				<option value="primary">Primary</option>
				<option value="danger">Danger</option>
			</b-select>
		</b-field>
		<b-field label="Require Confirmatiom?">
			<b-switch v-model="isSwitchedCustom" true-value="Yes" false-value="No" @input="$emit('update-btn',  localButton)">{{isSwitchedCustom}}</b-switch>
		</b-field>
	</div>
</template>

<script>
import { mapGetters, mapState, mapMutations, mapActions } from "vuex"
import { mapFields } from "vuex-map-fields"
// import ButtonConfirm from "./ButtonConfirm"

export default {
  name: "AttachmentButton",
	props: ['btnData'],
	data() {
		return {
			isSwitchedCustom: 'Yes',
			localButton: {
				id: 0,
				content: {
					name: '',
					text: '',
					type: 'button',
					value: '',
					style: ''
				}
			}
		}
	},
	created: function () {
		this.localButton = this.btnData
		// this.loadButton(this.btnData)
	},
  computed: {
    ...mapState("attachmentButton", {
			btn: state => state.button
		}),
    ...mapGetters("attachmentButton", {})
  },
	methods: {
		...mapMutations("attachmentButton", {
      loadButton: "loadButton"
    }),
    ...mapActions("attachmentButton", {})
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
  // background-color: #ddeeff;
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