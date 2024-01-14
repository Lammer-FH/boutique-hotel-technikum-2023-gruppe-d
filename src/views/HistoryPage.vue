<template>
  <br>
  <div v-if="bookings.length">
      <h2>Booking History</h2>
      <table class="table">
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>From</th>
            <th>To</th>
            <th>Room ID</th>
            <th>Guest ID</th>
            <th>Created At</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="booking in bookings" :key="booking.id">
            <td>{{ booking.id }}</td>
            <td>{{ booking.from }}</td>
            <td>{{ booking.to }}</td>
            <td>{{ booking.rooms_id }}</td>
            <td>{{ booking.guest_id }}</td>
            <td>{{ booking.created_at }}</td>
            <td>{{ booking.updated_at }}</td>
          </tr>
        </tbody>
      </table>
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
        await fetchBookingsHistory();
      }
    });

    

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