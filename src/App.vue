
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
  <particles-bg type="cobweb" :bg="true" />
  <NavBar />
  
</template>
