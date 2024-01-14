import { defineStore } from 'pinia';
import axios from 'axios';

export const useAvailabilityStore = defineStore({
  id: 'availability', // Unique ID for the store
  state: () => ({
    fromDate: '', 
    toDate: '',
    availabilityData: null, 
    error: null, 
  }),
  getters: {
  },
  actions: {
    setFromDate(fromDate) {
      this.fromDate = fromDate;
    },
    setToDate(toDate) {
      this.toDate = toDate;
    },
    async checkAvailability(roomId) {
      try {
        const response = await axios.get(
          `https://boutique-hotel.helmuth-lammer.at/api/v1/room/${roomId}/from/${this.fromDate}/to/${this.toDate}`
        );
        this.availabilityData = response.data;
        this.error = null; 
      } catch (error) {
        this.error = error; 
        this.availabilityData = null; 
      }
    },
  },
});
