<template>
  <div id="app">
    <img src="./assets/logo.png">
    <MsgDesigner/>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
import MsgDesigner from "./components/message-designer/MsgDesigner";
// import TooltipIcon from "./components/helpers/TooltipIcon";

export default {
  name: "App",
  components: {
    // HelloWorld,
    MsgDesigner,
    // TooltipIcon
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
