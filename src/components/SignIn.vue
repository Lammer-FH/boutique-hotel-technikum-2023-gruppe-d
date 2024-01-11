<template>
    <div class="container mt-5">
      <h1 class="text-center mb-4">Sign In</h1>
      <form @submit.prevent="signIn">
        <input v-model="credentials.clientId" type="email" placeholder="Email Address" />
        <input v-model="credentials.secret" type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default {
    setup() {
      const credentials = ref({
        clientId: '',
        secret: '',
      });
      const router = useRouter();
  
      const signIn = async () => {
        try {
          const response = await axios.post('https://boutique-hotel.helmuth-lammer.at/api/v1/login', credentials.value);
          const token = response.data; // تخزين الرمز
          localStorage.setItem('authToken', token); // حفظ الرمز في التخزين المحلي
          router.push('/myprofile').then(() => {
      location.reload(); // إعادة تحميل الصفحة
    }); // توجيه المستخدم إلى صفحة محمية
        } catch (error) {
          console.error('Error signing in:', error);
        }
      };
  
      return {
        credentials,
        signIn,
      };
    },
  };
  </script>
  
  <style>
  /* Add styles for your SignIn page here */
  </style>
  