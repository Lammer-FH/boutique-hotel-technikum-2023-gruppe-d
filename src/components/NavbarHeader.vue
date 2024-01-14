<template>
  <b-navbar toggleable="lg" type="light" variant="info">
    <b-navbar-brand href="/">
      <div class="logo">
        <img src="@/assets/img/logo.jpg" alt="Logo" class="logo-image">
      </div>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="b-navbar-nav">
        <b-nav-item :to="{ path: '/' }" style="font-size: 34px; margin-right: 13px">
          <b-icon-house-door></b-icon-house-door>
        </b-nav-item>

        <b-nav-item to="/room">Room</b-nav-item>
        <b-nav-item to="/booking">Book</b-nav-item>
        <b-nav-item to="/about">About</b-nav-item>

        <b-nav-item v-if="!isLoggedIn" to="/signin">
          <b-icon-arrow-right-square></b-icon-arrow-right-square>
          <span class="ml-2">Sign in</span>
        </b-nav-item>

        <b-nav-item v-if="!isLoggedIn" to="/register">
          <b-icon-person-plus></b-icon-person-plus>
          <span class="ml-2">Registration</span>
        </b-nav-item>

        <b-nav-item v-if="isLoggedIn" @click="logout">
          <b-icon-arrow-right-square></b-icon-arrow-right-square>
          <span class="ml-2">Sign out</span>
        </b-nav-item>

        <b-nav-item v-if="isLoggedIn" to="/myprofile">
          <b-icon-person-fill></b-icon-person-fill>
          <span class="ml-2">My profile</span>
        </b-nav-item>
        <b-nav-item v-if="isLoggedIn" to="/history">
          <b-icon-clock-history></b-icon-clock-history>
          <span class="ml-2">History</span>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const isLoggedIn = ref(!!localStorage.getItem('authToken'));
    const router = useRouter();

    const logout = () => {
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      isLoggedIn.value = false;
      router.push('/signin');
    };

    onMounted(() => {
      isLoggedIn.value = !!localStorage.getItem('authToken');
    });

    return { isLoggedIn, logout };
  },
};
</script>

<style scoped>
.logo-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}

.b-navbar-nav {
  display: flex;
  align-items: center;
}
</style>
