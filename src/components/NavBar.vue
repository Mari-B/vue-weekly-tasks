<template>
  <MDBNavbar light bg="light" expand="lg" container>
    <MDBNavbarBrand href="#">Navbar</MDBNavbarBrand>
    <MDBNavbarToggler target="#navbarNav" @click="collapse2 = !collapse2"></MDBNavbarToggler>
    <MDBCollapse id="navbarNav" v-model="collapse2">
      <MDBNavbarNav>
        <MDBNavbarItem to="#" active> Home </MDBNavbarItem>
        <MDBNavbarItem to="#"> Features </MDBNavbarItem>
        <MDBNavbarItem to="#"> Pricing </MDBNavbarItem>
        <MDBNavbarItem to="#" disabled> Disabled </MDBNavbarItem>
      </MDBNavbarNav>
    </MDBCollapse>
  </MDBNavbar>
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