<template>
  <div id="app">
    <nav-bar></nav-bar>
    <launch-screen></launch-screen>
    <top-contents></top-contents>
    <common-tools></common-tools>
    <about-us></about-us>
  </div>
</template>

<script>
import navBar from "./components/navBar/navBar";
import aboutUs from "./components/aboutUs/aboutUs";
import commonTools from "./components/commonTools/commonTools";
import launchScreen from "./components/launchScreen/launchScreen";
import topContents from "./components/topContents/topContents";

export default {
  beforeCreate() {
    document.getElementsByTagName("body")[0].setAttribute("style","margin:0");
  },
  name: 'App',
  components: {
    navBar,
    aboutUs,
    commonTools,
    launchScreen,
    topContents
  }
}
</script>

<style>
#app {
  text-align: center;
  margin:0;
}
</style>
