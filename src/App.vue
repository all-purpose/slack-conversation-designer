<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div id="c-message-list">
      <h1 class="title is-1">Messages</h1>
    </div>
    <div id="c-active-msg-designer">
      <MsgDesigner v-on:save-msg="updateMsg($event)" />
    </div>
    <div id="c-active-msg-preview">
      <MsgPreview />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations, mapActions } from "vuex";
import MsgDesigner from "./components/message-designer/MsgDesigner";
import MsgPreview from "./components/MsgPreview";

export default {
  name: "App",
  methods: {
    ...mapMutations({
      updateMsg: "saveMsgByID"
    })
  },
  components: {
    MsgDesigner,
    MsgPreview
  }
};
</script>

<style lang="scss">
$messagesHeight: 15rem;
*,
*::after,
*::before {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  margin: 0;
}

#c-active-msg-designer,
#c-active-msg-preview,
#c-message-list {
  padding: 1rem;
}

#c-active-msg-designer {
  margin-top: $messagesHeight;
  width: 50vw;
}

#c-active-msg-preview {
  position: fixed;
  top: $messagesHeight;
  right: 0;
  width: 50vw;
}

#c-message-list {
  height: $messagesHeight;
  width: 100vw;
  max-width: 100%;
  background-color: #f6f6f6;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}

#c-msg-des-form .panel-block {
  flex-flow: column;
  align-items: stretch;

  // > .field {
  //   width: 100%;
  // }
}
</style>
