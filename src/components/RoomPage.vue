<template>
  <div class="container mt-4">
    <div class="row">
      <div v-for="(room, index) in paginatedRooms" :key="index" class="col-md-4 mb-4">
        <RoomCard :room="room" />
        <div class="button-container">
          <button @click="bookRoom(room)" class="btn btn-primary">Book Now</button>
          <button @click="checkAvailability(room)" class="btn btn-secondary">Availability</button>
        </div>
      </div>
      
    </div>
    <Pagination :currentPage="currentPage" :totalPages="totalPages" @goToPage="goToPage" />
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';
import RoomCard from '@/components/RoomCard.vue'; // Ensure the path is correct
import { useRoomStore } from '@/stores/roomStore.js'; // Ensure the path is correct

export default {
  name: "RoomPage",
  components: {
    Pagination,
    RoomCard,
  },
  data() {
    return {
      
      itemsPerPage: 5,
      currentPage: 1,
    };
  },
  computed: {
    rooms() {
      const roomStore = useRoomStore();
      return roomStore.rooms;
    },
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
    const roomStore = useRoomStore();
    roomStore.fetchRooms();
  },
  methods: {
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    bookRoom(room) {
        this.$router.push({ name: 'book', params: { roomId: room.id, roomsName: room.roomsName, roomBet: room.pricePerNight } });
      },
      checkAvailability(room) {
        this.$router.push({ name: 'Availability', params: { roomId: room.id, roomsName: room.roomsName } });
      },
  },
};
</script>

