<template>
  <MDBNavbar light bg="light" expand="lg" container>
    <MDBNavbarBrand href="#">Home</MDBNavbarBrand>
    <MDBNavbarToggler target="#navbarNav" @click="collapse2 = !collapse2"></MDBNavbarToggler>
    <MDBCollapse id="navbarNav" v-model="collapse2">
      <MDBNavbarNav>
        <MDBNavbarItem to="#"> 
          <router-link to="/weekly-planner">Weekly Planner</router-link>
        </MDBNavbarItem>
        <MDBNavbarItem to="#">
          <router-link to="/wiki">Wiki</router-link>
        </MDBNavbarItem>
      </MDBNavbarNav>
    </MDBCollapse>
  </MDBNavbar>
  <router-view />
</template>

<script>
import { MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBCollapse, MDBNavbarNav, MDBNavbarItem } from 'mdb-vue-ui-kit';
import { ref } from 'vue';

export default {
  name: 'NavBar',
  setup() {
    const collapse2 = ref(false);
    return {
      collapse2
    }
  },
  components: {
    MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBCollapse, MDBNavbarNav, MDBNavbarItem
  }
}

</script>