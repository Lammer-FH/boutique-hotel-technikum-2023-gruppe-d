<template>
  <div id="app">
    <header class="header">
      <div class="logo">
        <img src="@/assets/img/logo.jpg" alt="Logo" class="logo-image">
      </div>
      <nav class="navbar">
        <button @click="changePage('Home')">Home</button>
        <button @click="changePage('About')">About</button>
        <button @click="changePage('Room')">Room</button>
        <button @click="changePage('Impressum')">Impressum</button>
        <button @click="changePage('Book')">Book</button>
        <button @click="changePage('History')">History</button>
        <button @click="changePage('Login')">Login</button>
      </nav>
    </header>

    <component :is="currentPage"></component>
  </div>
  <HomePage v-if="currentPage === 'Home'" @changePage="changePage" />
  <AboutPage v-if="currentPage === 'About'" @changePage="changePage" />
  <RoomPage v-if="currentPage === 'Room'" />
  <ImpressumPage v-if="currentPage === 'Impressum'" />
  <BookPage v-if="currentPage === 'Book'" />
  <HistoryPage v-if="currentPage === 'History'" />
  <LoginPage v-if="currentPage === 'Login'" />



</template>

<script>
import HomePage from "@/components/HomePage.vue";
import AboutPage from "@/components/AboutPage.vue";
import RoomPage from "@/components/RoomPage.vue";
import ImpressumPage from "@/components/ImpressumPage.vue";
import BookPage from "@/components/BookPage.vue";
import HistoryPage from "@/components/HistoryPage.vue";
import LoginPage from "@/components/LoginPage.vue";

export default {
  components: {
    LoginPage,
    HistoryPage,
    BookPage,
    ImpressumPage,
    RoomPage,
    HomePage,
    AboutPage,
  },
  data() {
    return {
      currentPage: "Home",
    };
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
    },
  },
};
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
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(198, 216, 245, 0.93);
  padding: 10px;
}

.logo {
  margin-left: 10px;
}

.navbar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.navbar button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
}

.navbar button:hover {
  text-decoration: underline;
}
.logo-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}
@media (max-width: 768px) {
  .navbar {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}

</style>
