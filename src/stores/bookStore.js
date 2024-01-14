import { defineStore } from 'pinia';
import axios from 'axios';

export const useBookStore = defineStore({
  id: 'book', 
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
    reservationId: null, 
    error: null, 
  }),
  getters: {
  },
  actions: {
    saveBookingData(data) {
      this.bookingData = data;
    },
    async bookRoom(roomId) {
      try {
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
        this.error = null; 
      } catch (error) {
        this.error = error; 
        this.reservationId = null; 
      }
    },
  },
});
