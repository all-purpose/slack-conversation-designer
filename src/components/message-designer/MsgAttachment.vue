<template>
	<fieldset class="c-msg-attach-cont">
		<label>Fallback: <span class="c-msg-des-desc">A message displayed when attachments aren't supported.</span></label>
		<input name="fallback" type="text" v-model="fallback" @input="$emit('upd-attach',localAttachment)">
		<label>Callback ID: <span class="c-msg-des-desc">Unique identifier for message buttons.</span></label>
		<input name="callback_id" type="text" v-model="callback_id" @input="$emit('upd-attach',localAttachment)">
		<label>Pretext: <span class="c-msg-des-desc">text appearing before attachment.</span></label>
		<input name="pretext" type="text" v-model="pretext" @input="$emit('upd-attach',localAttachment)">
		<label>Title: <span class="c-msg-des-desc">A visual header for the attachment.</span></label>
		<input name="title" type="text" v-model="title" @input="$emit('upd-attach',localAttachment)">
		<label>Text: <span class="c-msg-des-desc">text content of the attachment itself.</span></label>
		<input name="text" type="text" v-model="text" @input="$emit('upd-attach',localAttachment)">
		<label>Color: <span class="c-msg-des-desc">Color of the attachments left-side vertical bar.</span></label>
		<input name="color" type="color" v-model="color" @input="$emit('upd-attach',localAttachment)">
		<!--================
		====  Actions   ====
		=================-->
		<h3 class="c-msg-action-header">Actions</h3>
		<Collapsible accordion>
			<CollapsibleItem v-for="(action, index) in localAttachment.content.actions"  :key="action.id" :ref="'actAI' + index" is-opened>
				<h4 slot="header">{{ action.content.text }} Button</h4>
				<AttachmentButton 
					:data="passAction(action.id)"
					v-on:update_button="updateAction($event)"/>
			</CollapsibleItem>
		</Collapsible>
		<button type="button" class="c-msg-button" @click="newButton">Add Buttons</button>
		<!-- TODO: Add conditional so this only shows up if there aren't buttons. -->
		<button class="c-msg-button">Add Menu</button>
	</fieldset>
</template>

<script>
import { mapGetters, mapState, mapMutations, mapActions } from "vuex";
import { mapFields } from "vuex-map-fields"
import AttachmentButton from "./AttachmentButton"

export default {
  name: "MsgAttachment",
	props: ['data'],
  computed: {
    ...mapState({}),
    ...mapGetters("msgDesigner/msgAttachment", {
			localAttachment: "localAttach",
			passAction: "getActionByID"
			// ind: "localAttachInd"
    }),
    ...mapFields('msgDesigner/msgAttachment', [
      "attachment.content.title",
			"attachment.content.fallback",
      "attachment.content.callback_id",
			"attachment.content.pretext",
			"attachment.content.text",
			"attachment.content.color"
    ])
  },
	created: function () {
		this.loadAttachment(this.data)
	},
	methods: {
		...mapMutations("msgDesigner/msgAttachment", {
      // newButton: "initButton",
			updateID: "setAttachID",
			saveAction: "saveActionByID",
			loadAttachment: "loadAttachment"
    }),
    ...mapActions("msgDesigner/msgAttachment", {
			newButton: "newButton"
		}),
		updateAction: function (event) {
			this.saveAction(event)
			this.$emit('upd-attach', this.localAttachment)
		}
	},
  components: {
    AttachmentButton,
		Collapsible: require("vue-collapsible/collapsible"),
    CollapsibleItem: require("vue-collapsible/collapsible-item")
	}
};
</script>

<style scoped lang="scss">
fieldset {
	background-color: #aaddef;

	legend {
		text-align: left;
		font-weight: 500;
		padding: 0 0.5rem;
	}

}

.c-msg-attach-cont {
	border: none;
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

.c-msg-button {
  display: inline-block;
  margin: 0 1rem 0.5rem 0;
  padding: 0.25rem 0.5rem;
  border: 0.1rem solid black;
  border-radius: 0.2rem;
  transform: translateY(0);
  background-color: white;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0.24);
  transition: 0.2s;

  &:hover {
    background-color: rgba(196, 221, 250, 0.5);
    transform: translateY(-0.1rem);
    box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.24);
  }
}

/*  Accordion */
.collapsible {
  list-style: none;
  padding: 0;
	margin-bottom: 1rem;
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