<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Book a Room</h1>

    <form @submit.prevent="bookRoom">
      <div class="card p-4">
        <div class="mb-3">
          <label for="roomId" class="form-label">Room Id:</label>
          <p class="form-control-static">{{ $route.params.roomId }} </p>
        </div>
        <div class="mb-3">
          <label for="roomsName" class="form-label">Room Name:</label>
          <p class="form-control-static"> {{ $route.params.roomsName }}</p>
        </div>
        <div class="row g-3">
          <div class="col-md-6">
            <label for="firstname" class="form-label">First Name:</label>
            <input v-model="bookingData.firstname" type="text" class="form-control" id="firstname" required>
          </div>

          <div class="col-md-6">
            <label for="lastname" class="form-label">Last Name:</label>
            <input v-model="bookingData.lastname" type="text" class="form-control" id="lastname" required>
          </div>

          <div class="col-md-6">
            <label for="email" class="form-label">Email:</label>
            <input v-model="bookingData.email" type="email" class="form-control" id="email" required>
          </div>

          <div class="col-md-6">
            <label for="birthdate" class="form-label">Birthdate:</label>
            <input v-model="bookingData.birthdate" type="date" class="form-control" id="birthdate" required>
          </div>

          <div class="col-md-6">
            <label for="fromDate" class="form-label">From Date:</label>
            <input v-model="bookingData.fromDate" type="date" class="form-control" id="fromDate" required>
          </div>

          <div class="col-md-6">
            <label for="toDate" class="form-label">To Date:</label>
            <input v-model="bookingData.toDate" type="date" class="form-control" id="toDate" required>
          </div>

          <div class="col-12">
            <button type="submit" class="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "BookingPage",
  data() {
    return {
      bookingData: {
        firstname: '',
        lastname: '',
        email: '',
        birthdate: '',
        fromDate: '',
        toDate: ''
      },
    };
  },
  methods: {
    async bookRoom() {
      const roomId = this.$route.params.roomId;

      const requestData = {
        firstname: this.bookingData.firstname,
        lastname: this.bookingData.lastname,
        email: this.bookingData.email,
        birthdate: this.bookingData.birthdate + "T00:00:00Z",
      };
      const fromDate = this.bookingData.fromDate;
      const toDate = this.bookingData.toDate;

      try {
        const response = await axios.post(
          `https://boutique-hotel.helmuth-lammer.at/api/v1/room/${roomId}/from/${fromDate}/to/${toDate}`,
          requestData
        );
        console.log('Booking Successful. Reservation ID:', response.data.id);
        // Handle success, e.g., show a confirmation message or navigate to a thank you page
      } catch (error) {
        console.error('Error booking room:', error);
        // Handle error, e.g., display an error message to the user
      }
    },
  },
};
</script>
