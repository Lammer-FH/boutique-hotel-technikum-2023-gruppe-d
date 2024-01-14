<template>
  <div class="container mt-5">
    <h1>My Profile</h1>

    <div v-if="user">
      <h2>User Details</h2>
      <p>First Name: {{ user.firstname }}</p>
      <p>Last Name: {{ user.lastname }}</p>
      <p>Email: {{ user.email }}</p>
      <p>Birthdate: {{ user.birthdate }}</p>
      <p>Username: {{ user.username }}</p>
    </div>

    <div v-if="bookings.length">
      <h2>Booking History</h2>
      <table class="table">
        <thead>
          <tr>
            <th>Room ID</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(booking, index) in bookings" :key="index">
            <td>{{ booking.roomId }}</td>
            <td>{{ booking.startDate }}</td>
            <td>{{ booking.endDate }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const user = ref(null);
    const bookings = ref([]);

    onMounted(async () => {
      if (localStorage.getItem('authToken')) {
        await fetchUserDetails();
        await fetchBookingsHistory();
      }
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
        const response = await axios.get(`https://boutique-hotel.helmuth-lammer.at/api/v1/user/bookings`, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'Application/json',
          },
        });
        bookings.value = response.data.map(booking => ({
          roomId: booking.rooms_id,
          startDate: booking.from,
          endDate: booking.to,
        }));
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
