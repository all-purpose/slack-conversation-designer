<template>
	<div class="c-msg-attach-cont">
		<b-field label="Fallback">
			<b-input placeholder="Shown when attachments aren't supported" v-model="localAttach.content.fallback" @input="$emit('upd-attach',localAttach)"></b-input>
		</b-field>
		<b-field label="Callback ID">
			<b-input placeholder="Unique identifier for attachment actions" v-model="localAttach.content.callback_id" @input="$emit('upd-attach',localAttach)"></b-input>
		</b-field>
		<b-field label="Pretext">
			<b-input placeholder="Shown above the attachment" v-model="localAttach.content.pretext" @input="$emit('upd-attach',localAttach)"></b-input>
		</b-field>
		<b-field label="Text">
			<b-input placeholder="Text appearing within the attachment" v-model="localAttach.content.text" @input="$emit('upd-attach',localAttach)"></b-input>
		</b-field>
		<b-field label="Color">
			<b-input type="color" v-model="localAttach.content.color" @input="$emit('upd-attach',localAttach)"></b-input>
		</b-field>
		<b-collapse class="panel" :open="false">
			<div slot="trigger" class="panel-heading">
				<strong>Source</strong>
			</div>
			<div class="panel-block">
				<b-field label="Name">
					<b-input placeholder="Who what is the source?" expanded v-model="localAttach.content.author_name" @input="$emit('upd-attach',localAttach)"></b-input>
				</b-field>
				<b-field grouped>
					<b-field label="Link" expanded>
						<b-input placeholder="URL to more info" type="url" v-model="localAttach.content.author_link" @input="$emit('upd-attach',localAttach)"></b-input>
					</b-field>
					<b-field label="Icon" expanded>
						<b-input placeholder="URL for source icon" type="url" v-model="localAttach.content.author_icon" @input="$emit('upd-attach',localAttach)"></b-input>
					</b-field>
				</b-field>
			</div>
		</b-collapse>
		<b-collapse class="panel" :open="false">
			<div slot="trigger" class="panel-heading">
				<strong>Title</strong>
			</div>
			<div class="panel-block">
				<b-field label="Title">
					<b-input placeholder="A title for the attachment" v-model="localAttach.content.title" @input="$emit('upd-attach',localAttach)"></b-input>
				</b-field>
				<b-field label="Title Link">
					<b-input placeholder="URL the title takes you to" type="url" v-model="localAttach.content.title_link" @input="$emit('upd-attach',localAttach)"></b-input>
				</b-field>
			</div>
		</b-collapse>
		<b-collapse class="panel" :open="false">
			<div slot="trigger" class="panel-heading">
				<strong>Images</strong>
			</div>
			<div class="panel-block">
				<b-field label="Image URL:">
					<b-input placeholder="URL of large inage" type="url" v-model="localAttach.content.image_url" @input="$emit('upd-attach',localAttach)"></b-input>
				</b-field>
				<b-field label="Thumbnail URL">
					<b-input placeholder="URL for right side thumbnail" type="url" v-model="localAttach.content.thumb_url" @input="$emit('upd-attach',localAttach)"></b-input>
				</b-field>
			</div>
		</b-collapse>
		<b-collapse class="panel" :open="false">
			<div slot="trigger" class="panel-heading">
				<strong>Footer</strong>
			</div>
			<div class="panel-block">
				<b-field label="Footer:">
					<b-input placeholder="Sits just above actions" v-model="localAttach.content.footer" @input="$emit('upd-attach',localAttach)"></b-input>
				</b-field>
				<b-field label="Footer Icon">
					<b-input placeholder="URL of an icon for the footer" type="url" v-model="localAttach.content.footer_icon" @input="$emit('upd-attach',localAttach)"></b-input>
				</b-field>
			</div>
		</b-collapse>
		<b-field label="Timestamp:">
			<b-input placeholder="Currently not implemented" v-model="localAttach.content.ts" @input="$emit('upd-attach',localAttach)"></b-input>
		</b-field>
		<!--================
		====  Actions   ====
		=================-->
		<h2 class="title is-2">Actions</h2>
		<!-- <b-collapse class="card" v-for="(action, index) in localAttachData.content.actions" :key="'attachment action' + action.id" :open.sync="data.open"> -->
		<b-collapse class="card" v-for="(action, index) in localAttachData.content.actions" :key="'attachment action' + action.id" :open="false">
			<div slot="trigger" slot-scope="props" class="card-header">
				<p class="card-header-title">
					{{ action.content.text }} Button
				</p>
				<a class="card-header-icon">
					<b-icon :icon="props.open ? 'menu-down' : 'menu-up'">
					</b-icon>
				</a>
			</div>
			<div class="card-content">
				<div class="content">
					<AttachmentButton :btnData="passAction(action.id)" v-on:update-button="updateAction($event)" />
				</div>
			</div>
			<footer class="card-footer">
				<a class="card-footer-item">Delete</a>
			</footer>
		</b-collapse>
		<div class="field is-grouped">
			<p class="control">
				<button class="button" type="button" @click="newButton">Add Buttons</button>
			</p>
			<!-- TODO: Add conditional so this only shows up if there aren't buttons. -->
			<p class="control">
				<button class="button" type="button">Add Menu</button>
			</p>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapState, mapMutations, mapActions } from "vuex";
import { mapFields } from "vuex-map-fields"
import AttachmentButton from "./AttachmentButton"

export default {
  name: "MsgAttachment",
	props: ['attachData'],
	data() {
		return {
			localAttach: {
				id: 0,
				content: {
					fallback: '',
					color: '#000000',
					callback_id: '',
					pretext: '',
					author_name: '',
					author_link: '',
					author_icon: '',
					title: '',
					title_link: '',
					text: '',
					fields: [],
					image_url: '',
					thumb_url: '',
					footer: '',
					footer_icon: '',
					ts: '',
					actions: []
				}
			}
		}
	},
	created: function () {
		this.localAttach = this.attachData
	},
  computed: {
    ...mapState("msgAttachment", {
			localAttachData: state => state.attachment
		}),
    ...mapGetters("msgAttachment", {
			// localAttachData: "localAttach",
			passAction: "getActionByID"
			// ind: "localAttachInd"
    })//,
    // ...mapFields('msgAttachment', [
		// 	"attachment.content.fallback",
    //   "attachment.content.callback_id",
		// 	"attachment.content.pretext",
		// 	"attachment.content.author_name",
		// 	"attachment.content.author_link",
		// 	"attachment.content.author_icon",
		// 	"attachment.content.title",
		// 	"attachment.content.title_link",
		// 	"attachment.content.text",
		// 	"attachment.content.image_url",
		// 	"attachment.content.thumb_url",
		// 	"attachment.content.footer",
		// 	"attachment.content.footer_icon",
		// 	"attachment.content.ts",
		// 	"attachment.content.color"
    // ])
  },
	created: function () {
		this.loadAttachment(this.attachData)
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
			this.$emit('upd-attach', this.localAttachData)
		}
	},
  components: {
    AttachmentButton
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
  // background-color: #aaddef;
  // border: none;
  // margin: 0;
  // padding: 0.5em;

  // @supports (display: grid) {
  //   display: grid;
  //   grid-template-rows: 1fr 1fr;
  //   grid-column-gap: 1rem;
  // }

  // h3 {
  //   margin-bottom: 0.5em;
  //   border-bottom: 0.1em solid #999999;
  // }

  // .long,
  // .short {
  //   display: inline-flex;
  //   flex-flow: column nowrap;

  //   label {
  //     margin: 0;
  //   }

  //   input[type="text"] {
  //     margin: 0.1rem 0 1rem 0;
  //   }
  // }

  // .long {
  //   width: 100%;
  // }

  // .short {
  //   width: 49%;
  //   padding: 0 0.5rem;
  //   // @supports (display: grid) {
  //   //   grid-column-start: span 1;
  //   //   padding: auto;
  //   //   width: auto;
  //   // }

  //   &:last-of-type {
  //     padding-right: 0;
  //   }

  //   &:first-of-type {
  //     padding-left: 0;
  //   }
  // }

  // > * {
  //   width: 100%;
  //   display: inline-block;
  //   text-align: left;
  //   grid-column-start: span 2;
  // }

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