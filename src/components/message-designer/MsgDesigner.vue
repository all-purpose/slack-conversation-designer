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
			<label>Replace Original Message<TooltipIcon ttContent="Used only when creating messages in response to a button action invocation. When set to true, the inciting message will be replaced by this message you're providing. When false, the message you're providing is considered a brand new message."/></label>
			<input name="replace_original" type="checkbox" v-model="replace_original" />
			<label>Delete Original Message<TooltipIcon ttContent="Used only when creating messages in response to a button action invocation. When set to true, the inciting message will be deleted and if a message is provided, it will be posted as a brand new message."/></label>
			<input name="delete_original" type="checkbox" v-model="delete_original" />
      <div>
        <button type="button" @click="newMsg" :disabled="isNew && !isChanged">New Message</button>
        <button type="button" @click="saveMsg" :disabled="!isChanged">Save Message</button>
      </div>
		</form>
    <h1 class="c-msd-des-title">JSON Data:</h1>
    <pre>{{ JSON.stringify(message, null, 4) }}</pre>
	</section>
</template>

<script>
import MsgAttachment from "./MsgAttachment";
import TooltipIcon from "../helpers/TooltipIcon";
import { mapGetters, mapState, mapMutations, mapActions } from "vuex";
import { mapFields } from "vuex-map-fields";

export default {
  name: "MsgDesigner",
  computed: {
    ...mapState({
      // message: state => state.msgDesigner.curMessage
      }),
    ...mapGetters("msgDesigner", {
      message: "curMessage",
      id: "curID",
      isChanged: "msgChanged",
      isNew: "msgNew"
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
      msgChanged: "messageChanged"
    }),
    ...mapActions("msgDesigner", {
      newMsg: "new",
      saveMsg: "save"
    })
  },
  components: { MsgAttachment }
};
</script>

<style lang="scss">
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

pre {
  display: inline-block;
  margin: 0.5rem auto;
  padding: 0.5rem;
  text-align: left;
  // width: auto;
  // white-space: pre-wrap;
}

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
</style>