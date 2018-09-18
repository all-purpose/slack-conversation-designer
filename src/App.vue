<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div id="c-active-msg-blocks">
      <div id="c-active-msg-designer">
        <MsgDesigner v-on:save-msg="updateMsg($event)" />
      </div>
      <div id="c-active-msg-preview">
        <MsgPreview />
      </div>
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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#c-active-msg-blocks {
  display: flex;
  flex-flow: row nowrap;

  > * {
    flex: 1 1 auto;
  }
}

#c-msg-des-conts {
}
</style>
