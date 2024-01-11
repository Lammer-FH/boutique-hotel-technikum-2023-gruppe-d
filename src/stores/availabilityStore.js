import { defineStore } from 'pinia';
import axios from 'axios';

export const useAvailabilityStore = defineStore({
  id: 'availability', // Unique ID for the store
  state: () => ({
    fromDate: '', // Initialize state properties
    toDate: '',
    availabilityData: null, // You can initialize with null or an appropriate initial value
    error: null, // For error handling
  }),
  getters: {
    // Define getters if needed
  },
  actions: {
    // Define actions
    setFromDate(fromDate) {
      this.fromDate = fromDate;
    },
    setToDate(toDate) {
      this.toDate = toDate;
    },
    async checkAvailability(roomId) {
      try {
        // Perform the API request here using Axios or other methods
        const response = await axios.get(
          `https://boutique-hotel.helmuth-lammer.at/api/v1/room/${roomId}/from/${this.fromDate}/to/${this.toDate}`
        );
        this.availabilityData = response.data;
        this.error = null; // Reset error if the request succeeds
      } catch (error) {
        this.error = error; // Store the error if the request fails
        this.availabilityData = null; // Reset data on error
      }
    },
  },
});
