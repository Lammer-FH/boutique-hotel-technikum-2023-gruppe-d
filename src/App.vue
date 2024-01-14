<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view></router-view> 
    <FooterHomepage></FooterHomepage> 

  </div>
</template>

<script>
import Navbar from './components/NavbarHeader.vue';
import FooterHomepage from './components/FooterHomepage.vue'; 


export default {
  components: {
    FooterHomepage,
    Navbar
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