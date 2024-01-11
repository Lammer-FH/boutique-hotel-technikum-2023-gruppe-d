import { defineStore } from 'pinia';
import axios from 'axios';

export const useBookStore = defineStore({
  id: 'book', // Unique ID for the store
  state: () => ({
    bookingData: {
      firstname: '',
      lastname: '',
      email: '',
      birthdate: '',
      fromDate: '',
      toDate: '',
      bookingData: null,
    },
    reservationId: null, // Store the reservation ID when booking succeeds
    error: null, // For error handling
  }),
  getters: {
    // Define getters if needed
  },
  actions: {
    // Define actions
    saveBookingData(data) {
      this.bookingData = data;
    },
    async bookRoom(roomId) {
      try {
        // Perform the API request here using Axios or other methods
        const requestData = {
          firstname: this.bookingData.firstname,
          lastname: this.bookingData.lastname,
          email: this.bookingData.email,
          birthdate: this.bookingData.birthdate + "T00:00:00Z",
        };
        const fromDate = this.bookingData.fromDate;
        const toDate = this.bookingData.toDate;
        
        const response = await axios.post(
          `https://boutique-hotel.helmuth-lammer.at/api/v1/room/${roomId}/from/${fromDate}/to/${toDate}`,
          requestData
        );
        this.reservationId = response.data.id;
        this.error = null; // Reset error if the request succeeds
      } catch (error) {
        this.error = error; // Store the error if the request fails
        this.reservationId = null; // Reset reservation ID on error
      }
    },
  },
});
