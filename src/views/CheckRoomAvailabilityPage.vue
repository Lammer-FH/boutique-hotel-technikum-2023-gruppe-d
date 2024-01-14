<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Check Room Availability</h1>

    <form @submit.prevent="checkAvailability">
    
      <RoomCard :room="room" />

      <div class="card p-4">
     
        <div class="row g-3">
          <div class="col-md-6">
            <label for="fromDate" class="form-label">From Date:</label>
            <input
              v-model="fromDate"
              type="date"
              class="form-control"
              id="fromDate"
              :min="getCurrentDate()"
              required
            />          </div>
          <div class="col-md-6">
            <label for="toDate" class="form-label">To Date:</label>
            <input
              v-model="toDate"
              type="date"
              class="form-control"
              id="toDate"
              :min="getCurrentDate()"
              required
            />          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">Check Now</button>
          </div>
        </div>

        <div class="mt-4" v-if="showAvailabilityData">
          <h2>Availability Information</h2>
          <p v-if="availabilityData && availabilityData.available">
            <router-link :to="{ name: 'book', params: { roomId: $route.params.roomId, roomsName: $route.params.roomsName, fromDate: fromDate, toDate: toDate } }">
              <h2>The Room is Available</h2>
              <button type="button" class="btn btn-primary">Book Now</button>
            </router-link>
          </p>
          <p v-else>Not Available Please Change the Date</p>
        </div>
      </div>
    </form>

    <div class="mt-4" v-if="error">
      <p>Error: {{ error.message }}</p>
    </div>
  </div>
</template>

<script>
import { useAvailabilityStore } from '@/stores/availabilityStore.js';
import RoomCard from '@/components/RoomCard.vue'; 
import { useRoomStore } from '../stores/roomStore';

export default {
  name: "CheckRoomAvailability",
  components: {
    RoomCard,
  },
  data() {
    return {
      fromDate: '',
      toDate: '',
      showAvailabilityData: false,
    };
  },
  created() {
    if(useRoomStore().rooms.length == 0){
      useRoomStore().fetchRooms()
    }
  },
  computed: {
    room() {
      let roomId = this.$route.params.roomId
      return useRoomStore().rooms[roomId]
    },
    availabilityData() {
      const availabilityStore = useAvailabilityStore();
      return availabilityStore.availabilityData;
    },
    error() {
      const availabilityStore = useAvailabilityStore();
      return availabilityStore.error;
    },
  },
  methods: {
    checkAvailability() {
      const currentDate = new Date();
      const selectedFromDate = new Date(this.fromDate);
      const selectedToDate = new Date(this.toDate);

      if (
        isNaN(selectedFromDate) ||
        isNaN(selectedToDate) ||
        selectedFromDate < currentDate ||
        selectedToDate < currentDate ||
        selectedFromDate > selectedToDate
      ) {
        alert("Please select valid dates, not older than today.");
        return;
      }
      const availabilityStore = useAvailabilityStore();
      availabilityStore.setFromDate(this.fromDate);
      availabilityStore.setToDate(this.toDate);

      const roomId = this.$route.params.roomId;
      availabilityStore.checkAvailability(roomId);

      this.showAvailabilityData = true;
      
      
    },
    getCurrentDate() {
      const currentDate = new Date();
      return currentDate.toISOString().split("T")[0];
    },
  

  },
};
</script>
