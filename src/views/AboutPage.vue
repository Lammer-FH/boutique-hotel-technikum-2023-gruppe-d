<template>
  <div class="about-page">

    <h1>About Us</h1>
    <p>Welcome to our hotel. Here, we aim to provide you with a luxurious experience like no other.</p>
    <p>Our mission is to make your stay unforgettable.</p>
  </div>
  <ContactAndDirection/>
</template>

<script>
import ContactAndDirection from '@/components/ContactAndDirection.vue'; // Ensure the path is correct


export default {

  components:{
    ContactAndDirection,
  },
  name: "AboutPage",
 
};
</script>

<style scoped>
.about-page {
  background-color: #fff;
  padding: 20px;
}
</style>
