<template>
  <div>
    <form @submit.prevent="register">
      <input v-model="userData.firstname" type="text" placeholder="First Name" />
      <input v-model="userData.lastname" type="text" placeholder="Last Name" />
      <input v-model="userData.email" type="email" placeholder="Email" />
      <input v-model="userData.username" type="text" placeholder="Username" />
      <input v-model="userData.password" type="password" placeholder="Password" />
      <button type="submit">Register</button>
    </form>
    <div v-if="user">
      <h2>User Info</h2>
      <p>First Name: {{ user.firstname }}</p>
      <p>Last Name: {{ user.lastname }}</p>
      <p>Email: {{ user.email }}</p>
      <p>Username: {{ user.username }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useUserStore } from '@/stores/userStore'; 

export default {
  setup() {
    const userStore = useUserStore();
    const userData = ref({
      firstname: '',
      lastname: '',
      email: '',
      username: '',
      password: '',
    });

    const register = async () => {
      await userStore.registerUser(userData.value);
      await userStore.fetchUser(); 
    };

    return {
      userData,
      register,
      user: userStore.user,
    };
  },
};
</script>
