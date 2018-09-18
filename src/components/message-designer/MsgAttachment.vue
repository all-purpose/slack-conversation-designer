<template>
	<div class="c-msg-attach-cont">
		<label>Fallback:
			<span class="c-msg-des-desc">A message displayed when attachments aren't supported.</span>
		</label>
		<input name="fallback" type="text" v-model="fallback" @input="$emit('upd-attach',localAttachment)">
		<label>Callback ID:
			<span class="c-msg-des-desc">Unique identifier for message buttons.</span>
		</label>
		<input name="callback_id" type="text" v-model="callback_id" @input="$emit('upd-attach',localAttachment)">
		<label>Pretext:
			<span class="c-msg-des-desc">text appearing before attachment.</span>
		</label>
		<input name="pretext" type="text" v-model="pretext" @input="$emit('upd-attach',localAttachment)">
		<label>Text:
			<span class="c-msg-des-desc">text content of the attachment itself.</span>
		</label>
		<input name="text" type="text" v-model="text" @input="$emit('upd-attach',localAttachment)">
		<label>Color:
			<span class="c-msg-des-desc">Color of the attachments left-side vertical bar.</span>
		</label>
		<input name="color" type="color" v-model="color" @input="$emit('upd-attach',localAttachment)">
		<Collapsible>
			<CollapsibleItem>
				<h4 slot="header">Author</h4>
				<div class="long">
					<label>Name:
						<span class="c-msg-des-desc">Who / where did this message come from?.</span>
					</label>
					<input name="author_name" type="text" v-model="author_name" @input="$emit('upd-attach',localAttachment)">
				</div>
				<div class="short">
					<label>Link:
						<span class="c-msg-des-desc">Link to more info about the author.</span>
					</label>
					<input name="author_link" type="url" v-model="author_link" @input="$emit('upd-attach',localAttachment)">
				</div>
				<div class="short">
					<label>Icon:
						<span class="c-msg-des-desc">URL of an icon you want to use from the web.</span>
					</label>
					<input name="author_icon" type="url" v-model="author_icon" @input="$emit('upd-attach',localAttachment)">
				</div>
			</CollapsibleItem>
			<CollapsibleItem>
				<h4 slot="header">Title</h4>
				<div class="long">
					<label>Title:
						<span class="c-msg-des-desc">A visual header for the attachment.</span>
					</label>
					<input name="title" type="text" v-model="title" @input="$emit('upd-attach',localAttachment)">
				</div>
				<div class="long">
					<label>Title Link:
						<span class="c-msg-des-desc">URL the title takes you to on click.</span>
					</label>
					<input name="title_link" type="url" v-model="title_link" @input="$emit('upd-attach',localAttachment)">
				</div>
			</CollapsibleItem>
			<CollapsibleItem>
				<h4 slot="header">Images</h4>
				<div class="long">
					<label>Image URL:
						<span class="c-msg-des-desc">URL to an image that will span the full width of the message.</span>
					</label>
					<input name="image_url" type="url" v-model="image_url" @input="$emit('upd-attach',localAttachment)">
				</div>
				<div class="long">
					<label>Thumbnail URL:
						<span class="c-msg-des-desc">URL to an image used as a thumbnail on the right side of the message. Don't use this and Image URL.</span>
					</label>
					<input name="thumb_url" type="url" v-model="thumb_url" @input="$emit('upd-attach',localAttachment)">
				</div>
			</CollapsibleItem>
			<CollapsibleItem>
				<h4 slot="header">Footer</h4>
				<div class="long">
					<label>Footer:
						<span class="c-msg-des-desc">Small text appearing above any buttons.</span>
					</label>
					<input name="footer" type="text" v-model="footer" @input="$emit('upd-attach',localAttachment)">
				</div>
				<div class="long">
					<label>Footer Icon:
						<span class="c-msg-des-desc">URL to an icon for the footer.</span>
					</label>
					<input name="footex_icon" type="url" v-model="footer_icon" @input="$emit('upd-attach',localAttachment)">
				</div>
			</CollapsibleItem>
		</Collapsible>
		<label>Timestamp:
			<span class="c-msg-des-desc">Currently not implemented.</span>
		</label>
		<input name="ts" type="datetime-local" v-model="ts" @input="$emit('upd-attach',localAttachment)">
		<!--================
		====  Actions   ====
		=================-->
		<h3 class="c-msg-action-header">Actions</h3>
		<Collapsible accordion>
			<CollapsibleItem v-for="(action, index) in localAttachment.content.actions" :key="action.id" :ref="'actAI' + index" is-opened>
				<h4 slot="header">{{ action.content.text }} Button</h4>
				<AttachmentButton :data="passAction(action.id)" v-on:update_button="updateAction($event)" />
			</CollapsibleItem>
		</Collapsible>
		<button type="button" class="c-msg-button" @click="newButton">Add Buttons</button>
		<!-- TODO: Add conditional so this only shows up if there aren't buttons. -->
		<button class="c-msg-button">Add Menu</button>
	</div>
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
    ...mapGetters("msgAttachment", {
			localAttachment: "localAttach",
			passAction: "getActionByID"
			// ind: "localAttachInd"
    }),
    ...mapFields('msgAttachment', [
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
		...mapMutations("msgAttachment", {
      // newButton: "initButton",
			updateID: "setAttachID",
			saveAction: "saveActionByID",
			loadAttachment: "loadAttachment"
    }),
    ...mapActions("msgAttachment", {
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
*,
*::after,
*::before {
  box-sizing: border-box;
}

fieldset {
  legend {
    text-align: left;
    font-weight: 500;
    padding: 0 0.5rem;
  }
}

.c-msg-attach-cont {
  background-color: #aaddef;
  border: none;
  margin: 0;
  padding: 0.5em;

  @supports (display: grid) {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-column-gap: 1rem;
  }

  h3 {
    margin-bottom: 0.5em;
    border-bottom: 0.1em solid #999999;
  }

  .long,
  .short {
    display: inline-flex;
    flex-flow: column nowrap;

    label {
      margin: 0;
    }

    input[type="text"] {
      margin: 0.1rem 0 1rem 0;
    }
  }

  .long {
    width: 100%;
  }

  .short {
    width: 49%;
    padding: 0 0.5rem;
    @supports (display: grid) {
      grid-column-start: span 1;
      padding: auto;
      width: auto;
    }

    &:last-of-type {
      padding-right: 0;
    }

    &:first-of-type {
      padding-left: 0;
    }
  }

  > * {
    width: 100%;
    display: inline-block;
    text-align: left;
    grid-column-start: span 2;
  }

  label {
    margin: 1rem 0 0.1rem 0;
    font-weight: 500;
    color: #333333;
  }

  input {
    border-radius: 0.2rem;
    border: 1px inset #999999;
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
  margin: 1rem 0;
}

li.collapsible-item {
  border-radius: 0.2rem;
  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.24);
  background-color: #fafafa;
}

.collapsible-header h4 {
  text-align: center;
  // border-top: 1px solid #333;
  // border-bottom: 1px solid #333;
  border-radius: 0.2rem;
  border-left: none;
  border-right: none;
  background-color: #fafafa;
  margin: 0.5em 0;
  padding: 0.5rem 0;
}

.collapsible-header.active h4 {
  background-color: #dadada;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

div.collapsible-body > * {
  padding-right: 0.5rem;
  padding-left: 0.5rem;

  &:last-child {
    margin-bottom: 0.5rem;
  }
}
</style>