<template>
    <div class="container mt-5">
      <h1>My Profile</h1>
  
      <!-- عرض تفاصيل المستخدم الشخصية -->
      <div v-if="user">
        <h2>User Details</h2>
        <p>Name: {{ user.firstname }} {{ user.lastname }}</p>
        <p>Email: {{ user.email }}</p>
        <p>Username: {{ user.username }}</p>
      </div>
  
      <!-- عرض سجل الحجوزات -->
      <!-- عرض سجل الحجوزات -->
    <div v-if="bookings.length">
      <h2>Booking History</h2>
      <ul>
        <li v-for="booking in bookings" :key="2">
          <div>
            <h3>Booking Details</h3>
            <p>Booking ID: {{ booking.booking.id }}</p>
            <p>From: {{ booking.booking.from }}</p>
            <p>To: {{ booking.booking.to }}</p>

            <h3>Room Details</h3>
            <p>Room Name: {{ booking.room.roomName }}</p>
            <p>Room Number: {{ booking.room.roomNumber }}</p>
            <p>Beds: {{ booking.room.beds }}</p>
            <p>Price per Night: {{ booking.room.pricePerNight }}</p>
            <ul>
              <li v-if="booking.room.extras.bathRoom">Bathroom</li>
              <li v-if="booking.room.extras.minibar">Minibar</li>
              <li v-if="booking.room.extras.television">Television</li>
              <li v-if="booking.room.extras.aircondition">Air Conditioning</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
  
  <script>
  import axios from 'axios';
  import { ref, onMounted } from 'vue';
  import { useRouter, useRoute } from 'vue-router';


  export default {
    setup() {

        const user = ref(JSON.parse(localStorage.getItem('user')));
      const bookings = ref([]);
  
      onMounted(async () => {
        // استدعاء API لجلب تفاصيل المستخدم وسجل الحجوزات
        if (localStorage.getItem('authToken')) {
        await fetchUserDetails();
        await fetchBookingsHistory();}
      });
  
      async function fetchUserDetails() {
        try {
          const token = localStorage.getItem('authToken');
          const response = await axios.get('https://boutique-hotel.helmuth-lammer.at/api/v1/user/', {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: 'Application/json',
            },
          });
          user.value = response.data;
          localStorage.setItem('userDetails', JSON.stringify(response.data)); // تخزين تفاصيل المستخدم
        } catch (error) {
          console.error('Error fetching user details:', error);
        }
      }
  
      async function fetchBookingsHistory() {
        try {
          const token = localStorage.getItem('authToken');
          const response = await axios.get('https://boutique-hotel.helmuth-lammer.at/api/v1/bookings', {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: 'Application/json',
            },
          });
          bookings.value = response.data;
        } catch (error) {
          console.error('Error fetching bookings history:', error);
        }
      }
  
      return {
        user,
        bookings,
      };
    },
  };
  </script>
  
  <style>
  /* Add your styles here */
  </style>
  