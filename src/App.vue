<template>
  <HeaderComp />
  <HomeView />
  <FooterComp />
</template>

<script>
import HomeView from "./views/HomeView.vue";
import HeaderComp from "./components/HeaderComp.vue";
import FooterComp from "./components/FooterComp.vue";

export default {
  name: "App",
  components: {
    HomeView,
    HeaderComp,
    FooterComp,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  /* margin-top: 60px; */
}
button {
  background-color: #05a64a;
  color: white;
  padding: 5px 10px 5px 10px;
  border-radius: 7px;
}
</style>
