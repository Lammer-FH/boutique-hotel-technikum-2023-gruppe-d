<template>

  <div class="container mt-4">
    <div class="row">
      <div v-for="(room, index) in paginatedRooms" :key="index" class="col-md-4 mb-4">
        <div class="card">
          <img :src="getImg(room.id)" class="card-img-top" alt="Room Image">
          <div class="card-body">
            <table class="table">
              <tbody>
                <tr>
                  <th scope="row">Room Number:</th>
                  <td>{{ room.roomsNumber }}</td>
                </tr>
                <tr>
                  <th scope="row">Number of Beds:</th>
                  <td>
                    <i class="fas fa-bed"></i> {{ room.beds }}
                  </td>
                </tr>
                <tr>
                  <th scope="row">Price per Night:</th>
                  <td>
                    <i class="fas fa-euro-sign"></i> {{ room.pricePerNight }}
                  </td>
                </tr>
                <tr>
                  <th scope="row">Extras:</th>
                  <td>
                    <div class="room-extras">
                      <template v-for="(extra, index) in getFormattedExtras(room.extras)" :key="index">
          <span v-if="index > 0"> - </span>
          <span>
            {{ extra.name }}
            <component :is="extra.icon"></component>
          </span>
        </template>
      </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="button-container">
              <button @click="bookRoom(room.id, room.roomsName)" class="btn btn-primary">Book Now</button>
              <button @click="bookRoom(room.id, room.roomsName)" class="btn btn-secondary">Availability</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav aria-label="Room Pagination" class="mt-4">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
          <a class="page-link" @click="goToPage(currentPage - 1)" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item" v-for="page in totalPages" :key="page" :class="{ 'active': currentPage === page }">
          <a class="page-link" @click="goToPage(page)" href="#">{{ page }}</a>
        </li>
        <li class="page-item" :class="{ 'disabled': currentPage === totalPages }">
          <a class="page-link" @click="goToPage(currentPage + 1)" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "RoomPage",
  data() {
    return {
      rooms: [],
      itemsPerPage: 3,
      currentPage: 1,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.rooms.length / this.itemsPerPage);
    },
    paginatedRooms() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.rooms.slice(startIndex, endIndex);
    },
  },
  created() {
    this.fetchRooms();
  },
  methods: {
    async fetchRooms() {
      try {
        const response = await axios.get('https://boutique-hotel.helmuth-lammer.at/api/v1/rooms');
        this.rooms = response.data;
      } catch (error) {
        console.error('Error fetching room data:', error);
      }
    },
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    getImg(roomId) {
      return (`src/assets/img/rooms/${roomId}.jpg`);
    },
    bookRoom(roomId, roomsName) {
      this.$router.push({ name: 'book', params: { roomId, roomsName } });
    },
   
    getFormattedExtras(extras) {
      const extrasMapping = {
        livingroom: { name: 'Livingroom', icon: 'b-icon-lamp' },
        bathroom: { name: 'Bathroom', icon: 'b-icon-badge-wc' },
        minibar: { name: 'Minibar', icon: 'b-icon-cup-hot' },
        television: { name: 'Television', icon: 'b-icon-tv' },
        aircondition: { name: 'Air Condition', icon: 'b-icon-snow3' },
        wifi: { name: 'Wi-Fi', icon: 'b-icon-wifi-2' },
        breakfast: { name: 'Breakfast', icon: 'b-icon-egg-fried' },
        'handicapped accessible': { name: 'Handicapped Accessible', icon: 'b-icon-person-wheelchair' },
      };

      return extras.map(extra => {
        const extraName = Object.keys(extra)[0];
        const formattedExtra = extrasMapping[extraName] || { name: extraName, icon: null };
        return formattedExtra;
      });
    },
  },
};
</script>
