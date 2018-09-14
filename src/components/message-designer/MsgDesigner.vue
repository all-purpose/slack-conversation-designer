<template>
	<section id="c-msg-des-cont">
		<h1 class="c-msg-des-title">Message Designer</h1>
		<form id="c-msg-des-form">
			<label>Text: <span class="c-msg-des-desc">Main message text.</span></label>
			<input name="text" type="text" v-model="text" >
			<fieldset class="c-radiogroup">
        <legend><strong>Audience:</strong> Who will see the message</legend>
        <label>In Channel</label>
        <input name="response_type" value="in_channel" type="radio" v-model="response_type">
        <label>Ephemeral</label>
        <input name="response_pype" value="ephemeral" type="radio" v-model="response_type">
      </fieldset>
      <!--====================
      ====  Attachments   ====
      =====================-->
      <h1>Attachments</h1>
      <Collapsible accordion>
        <CollapsibleItem v-for="(attach, index) in message.attachments" :key="attach.id" :ref="'attachAI' + index" is-opened>
          <h4 slot="header">Attachment {{index + 1}}</h4>
          <MsgAttachment 
            :data="passAttach(attach.id)"
            v-on:upd-attach="updateAttach($event)"/>
        </CollapsibleItem>
      </Collapsible>
      <button type="button" @click="newAttachment">Add Attachment</button>
      <!--====================
      ====    Toggles     ====
      =====================-->
			<label>Replace Original Message<!--<TooltipIcon ttContent="Used only when creating messages in response to a button action invocation. When set to true, the inciting message will be replaced by this message you're providing. When false, the message you're providing is considered a brand new message."/>--></label>
			<input name="replace_original" type="checkbox" v-model="replace_original" />
			<label>Delete Original Message<!--<TooltipIcon ttContent="Used only when creating messages in response to a button action invocation. When set to true, the inciting message will be deleted and if a message is provided, it will be posted as a brand new message."/>--></label>
			<input name="delete_original" type="checkbox" v-model="delete_original" />
      <div>
        <button type="button" @click="newMessage" :disabled="isNew && !isChanged">New Message</button>
        <button type="button" :disabled="!isChanged">Save Message</button>
      </div>
		</form>
    <h1 class="c-msd-des-title">JSON Data:</h1>
    <pre>{{ JSON.stringify(message, null, 4) }}</pre>
	</section>
</template>

<script>
import { mapGetters, mapState, mapMutations, mapActions } from "vuex";
import { mapFields } from "vuex-map-fields";
import MsgAttachment from "./MsgAttachment";
// import TooltipIcon from "../helpers/TooltipIcon";

export default {
  name: "MsgDesigner",
  computed: {
    ...mapState({}),
    ...mapGetters("msgDesigner", {
      message: "localMessage",
      isChanged: "msgChanged",
      isNew: "msgNew",
      prettyJson: "formattedMessage",
      passAttach: "getAttachByID"
    }),
    ...mapFields('msgDesigner', [
      "curMessage.content.text",
      "curMessage.content.response_type",
      "curMessage.content.replace_original",
      "curMessage.content.delete_original"
    ])
  },
  watch: {
    text (newText, oldText) {
      this.msgChanged()
    },
    response_type (newText, oldText) {
      this.msgChanged()
    },
    replace_original (newText, oldText) {
      this.msgChanged()
    },
    delete_original (newText, oldText) {
      this.msgChanged()
    },
  },
  methods: {
    ...mapMutations("msgDesigner", {
      msgChanged: "messageChanged",
      updateAttach: "saveAttachByID"
    }),
    ...mapActions("msgDesigner", {
      newMessage: "newMsg",
      newAttachment: "newAttach"
    })
  },
  components: { 
    MsgAttachment,
    Collapsible: require("vue-collapsible/collapsible"),
    CollapsibleItem: require("vue-collapsible/collapsible-item")}
};
</script>

<style scoped lang="scss">
form {
  margin: 0 auto;
  max-width: 33rem;

  > * {
    display: block;
  }

  label {
    text-align: left;
    font-weight: 700;
  }

  input {
    margin-bottom: 1em;

    &[type="text"] {
      width: 25rem;
    }
  }
}

.c-msg-des-desc {
  font-weight: 400;
  font-style: italic;
}

.c-msg-attach-header {
  margin: 0.25rem 0 0 0;
  padding: 0;

  .c-msg-attach-header-text {
    display: block;
    padding: 0.5rem 1rem;
    text-align: left;
    background: #aeaeae;
    color: white;
    border-radius: 0.2rem;
    
    &::after {
      content: '+';
      float: right;
      font-weight: 700;
      color: white;
    }
  }
}

pre {
  display: inline-block;
  margin: 0.5rem auto;
  padding: 0.5rem;
  text-align: left;
  // width: auto;
  // white-space: pre-wrap;
}

// .c-msg-attach-cont {
//   > * {
//     display: block;
//     text-align: left;
//   }

//   > label {
//     margin: 1rem 0 0.1rem 0;
//   }
// }

.c-radiogroup {
  text-align: left;
  padding: 0.1rem 0rem;
  margin-bottom: 0.5rem;
  border: none;
  // box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.24);
  // background-color: #eaeaea;
  border-radius: 0.2rem;

  legend {
    display: block;
    background: white;
    // color: white;
    font-style: italic;
    padding: 0.2rem 0rem;
    border-radius: 0.2rem;

    strong {
      font-weight: 700;
      font-style: normal;
    }
  }

  label, input[type="radio"] {
    display: inline-block;
  }

  label {
    margin-right: 0rem;
    font-weight: 500;
  }

  input[type="radio"] {
    margin-right: 1rem;
  }
}

button {
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
}

.collapsible-header h4 {
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