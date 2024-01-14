import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    user: null,
    bookings: [],
    authToken: null,
  }),
  getters: {
  },
  actions: {
    async loginUser(credentials) {
      try {
        const response = await axios.post('https://boutique-hotel.helmuth-lammer.at/api/v1/login', credentials);
        this.authToken = response.data;
        localStorage.setItem('authToken', this.authToken);
        await this.fetchUserDetails();
      } catch (error) {
        console.error('Error logging in:', error);
      }
    },
    async fetchUserDetails() {
      try {
        const response = await axios.get('https://boutique-hotel.helmuth-lammer.at/api/v1/user/', {
          headers: {
            Authorization: `Bearer ${this.authToken}`,
            Accept: 'Application/json',
          },
        });
        this.user = response.data;
        localStorage.setItem('user', JSON.stringify(this.user));
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    },
    async fetchBookingsHistory() {
      try {
        const response = await axios.get('https://boutique-hotel.helmuth-lammer.at/api/v1/user/bookings', {
          headers: {
            Authorization: `Bearer ${this.authToken}`,
            Accept: 'Application/json',
          },
        });
        this.bookings = response.data;
      } catch (error) {
        console.error('Error fetching bookings history:', error);
      }
    },
    logoutUser() {
      this.user = null;
      this.bookings = [];
      this.authToken = null;
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
    }
  },
});
