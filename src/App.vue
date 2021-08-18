<template>
  <div id="app">
    <launch-screen></launch-screen>
    <top-contents></top-contents>
    <common-tools></common-tools>
    <about-us></about-us>
  </div>
</template>

<script>
import aboutUs from "./components/aboutUs/aboutUs";
import commonTools from "./components/commonTools/commonTools";
import launchScreen from "./components/launchScreen/launchScreen";
import topContents from "./components/topContents/topContents";

export default {
  name: 'App',
  components: {
    aboutUs,
    commonTools,
    launchScreen,
    topContents
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
