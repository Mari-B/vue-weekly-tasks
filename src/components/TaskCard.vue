<template>
  <MDBCard 
    class="my-2 text-center" 
    draggable="true"
  >
  <MDBBtnClose @click="$emit('remove-task')"/>
    <MDBCardBody>
      <MDBCardTitle>
        {{ title }}
        
      </MDBCardTitle>
      <MDBCardText>
        {{ category }}
      </MDBCardText>
      <MDBCardText>
        {{ description }}
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
</template>

<script>
import { MDBCard, MDBCardBody, MDBBtnClose, MDBCardTitle, MDBCardText } from 'mdb-vue-ui-kit';

export default {
  name: 'TaskCard',
  props: {
    title: String,
    category: String,
    description: String
  },
  components: {
    MDBCard, MDBCardBody, MDBBtnClose, MDBCardTitle, MDBCardText
  }
}

</script>
