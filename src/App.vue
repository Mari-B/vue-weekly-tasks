
<script>
import NavBar from "./components/NavBar.vue";
import { ParticlesBg } from "particles-bg-vue";

export default {
  name: 'App',
  components: {
    NavBar,
    ParticlesBg
  },
}
</script>

<template>
  <particles-bg type="lines" :bg="true" />
  <NavBar />
  
</template>

<style lang="scss">
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
