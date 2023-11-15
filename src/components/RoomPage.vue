<template>
  <div class="container mt-4">
    <div class="row">
      <div v-for="room in rooms" :key="room.id" class="col-md-4 mb-4">
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
                      <span v-for="(extra, index) in room.extras" :key="index">
                        <template v-if="extra[Object.keys(extra)[0]] === 1">
                          {{ index > 0 ? ' - ' : '' }}{{ Object.keys(extra)[0] }}
                        </template>
                      </span>
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
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: "RoomPage",
  data() {
    return {
      rooms: [],
    };
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
    getImg(roomId) {
      return (`src/assets/img/rooms/${roomId}.jpg`);
    },
    bookRoom(roomId, roomsName) {
      this.$router.push({ name: 'book', params: { roomId, roomsName } });
    },
    checkAvailability(roomId) {
      this.$router.push({ name: 'book', params: { roomId } });
    },
  },
};
</script>
