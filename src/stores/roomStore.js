import { defineStore } from 'pinia';
import axios from 'axios';

export const useRoomStore = defineStore({
  id: 'room', 
  state: () => ({
    rooms: [],
    reservationId: null,
  }),
  getters: {
    getRoomById: (state) => (id) => {
      return state.rooms.find(room => room.id === id);
    },
   
  },
  actions: {
    
    async fetchRooms() {

      return axios.get('https://boutique-hotel.helmuth-lammer.at/api/v1/rooms')
      .then((response)  => {
        this.rooms = response.data
      })
      .catch( () => {
        console.error('Error fetching room data:', error);
      });
    },
    async bookRoom(roomData) {
        try {
         
          const response = await axios.post('API_URL_FOR_BOOKING', roomData);
          this.reservationId = response.data; 
        } catch (error) {
          console.error('Error booking room:', error);
        }
      },
  },
  methods: {
    // ...

    bookRoom(room) {
      // Serialize the room object to JSON and pass it to the route
      this.$router.push({ name: 'book', params: { room: JSON.stringify(room) } });
    },

    checkAvailability(room) {
      // Serialize the room object to JSON and pass it to the route
      this.$router.push({ name: 'Availability', params: { room: JSON.stringify(room) } });
    },

    // ...
  },
});
