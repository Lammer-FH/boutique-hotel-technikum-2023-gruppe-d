<template>
    <div class="container mt-5">
      <h1 class="text-center mb-4">User Registration and Booking Details</h1>
      
      <form @submit.prevent="registerUser" class="mb-4">
        <div class="form-group">
          <input v-model="userData.firstname" type="text" class="form-control" placeholder="First Name" />
        </div>
        <div class="form-group">
          <input v-model="userData.lastname" type="text" class="form-control" placeholder="Last Name" />
        </div>
        <div class="form-group">
          <input v-model="userData.email" type="email" class="form-control" placeholder="Email" />
        </div>
        <div class="form-group">
          <input v-model="userData.username" type="text" class="form-control" placeholder="Username" />
        </div>
        <div class="form-group">
          <input v-model="userData.password" type="password" class="form-control" placeholder="Password" />
        </div>
        <button type="submit" class="btn btn-primary">Register</button>
      </form>
  
    
      <div v-if="bookings.length" class="booking-history">
        <h2>Booking History</h2>
        <ul class="list-group">
          <li v-for="booking in bookings" :key="booking.booking.id" class="list-group-item">
            <div>{{ booking.room.roomName }} ({{ booking.booking.from }} - {{ booking.booking.to }})</div>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  export default {
    setup() {
      const userData = ref({
        firstname: '',
        lastname: '',
        email: '',
        username: '',
        password: '',
        
      });
      const router = useRouter();
      const user = ref(null);
      const bookings = ref([]);
      const token = ref(null);
  
      const registerUser = async () => {
        try {
          await axios.post('https://boutique-hotel.helmuth-lammer.at/api/v1/register', userData.value);
          
          const loginResponse = await axios.post('https://boutique-hotel.helmuth-lammer.at/api/v1/login', {
            clientId: userData.value.email,
            secret: userData.value.password,
          });
  
          token.value = loginResponse.data;
          localStorage.setItem('authToken', token.value);
        await fetchUser();
          router.push('/myprofile').then(() => {
      location.reload(); 
    });
        } catch (error) {
          console.error('Error in registration or login process:', error);
        }
      };
  
      const fetchUser = async () => {
        try {
          const response = await axios.get('https://boutique-hotel.helmuth-lammer.at/api/v1/user/', {
            headers: {
              Authorization: `Bearer ${token.value}`,
              Accept: 'Application/json',
            },
          });
          user.value = response.data;
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
  
      const fetchBookings = async () => {
        if (!token.value) {
          console.error('Token is not available for fetching bookings.');
          return;
        }
  
        try {
          const response = await axios.get('https://boutique-hotel.helmuth-lammer.at/api/v1/user/bookings', {
            headers: {
              Authorization: `Bearer ${token.value}`,
              Accept: 'Application/json',
            },
          });
          bookings.value = response.data;
        } catch (error) {
          console.error('Error fetching bookings:', error);
        }
      };
  
      return {
        userData,
        user,
        bookings,
        registerUser,
      };
    },
  };
  </script>
  
  <style>
  .form-group {
    margin-bottom: 15px;
  }
  </style>
  