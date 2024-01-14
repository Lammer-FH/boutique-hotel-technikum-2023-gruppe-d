<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Book a Room</h1>

    <form @submit.prevent="checkAvailability">
      <div class="card p-4">
      

          <div class="mb-3">
    <label for="selectedRoom" class="form-label">Select Room:</label>
    <select v-model="selectedRoom" class="form-select" id="selectedRoom" required>
      <option disabled value="">Please select a room</option>
      <option v-for="roomOption in rooms" :key="roomOption.id" :value="roomOption.id">{{ roomOption.roomsName }}</option>
    </select>
  </div>
  <RoomCard :room="room" v-if="room !== undefined" /> 

        <div class="row g-3">
          
          <div class="col-md-6">
            <label for="fromDate" class="form-label">From Date:</label>
            <input v-model="fromDate" type="date" class="form-control" id="fromDate" required>
          </div>
          <div class="col-md-6">
            <label for="toDate" class="form-label">To Date:</label>
            <input v-model="toDate" type="date" class="form-control" id="toDate" required>
          </div>

          <div class="col-12">
            <button type="submit" class="btn btn-primary">Check Avaialbility</button>
          </div>
          
        </div>
        
      </div>
    </form>
   
  </div>
  <div class="mt-4" v-if="showAvailabilityData">
          <h2>Availability Information</h2>
          <p v-if="availabilityData && availabilityData.available">
            <router-link :to="{ name: 'book', params: { roomId: selectedRoom, roomsName: room ? room.roomsName : '', fromDate: fromDate, toDate: toDate } }">
              <h2>The Room is Available</h2>
              <button type="button" class="btn btn-primary">Book Now</button>
            </router-link>
          </p>
          <p v-else>Not Available Please Change the Date</p>
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
      selectedRoom: '',
      rooms: [],
    };
  },
  created() {
    if (useRoomStore().rooms.length == 0) {
    useRoomStore()
      .fetchRooms()
      .then(() => {
        this.rooms = useRoomStore().rooms;
        this.initializeRoom();
      })
      .catch((error) => {
        console.error("Error fetching rooms:", error);
      });
  } else {
    this.rooms = useRoomStore().rooms;
    this.initializeRoom();
  }


  },
  computed: {
    room() {
      return this.rooms.find(r => r.id === this.selectedRoom);

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
    async fetchRooms() {
try {
const roomStore = useRoomStore();
if (roomStore.rooms.length == 0) {
await roomStore.fetchRooms();
}
this.rooms = roomStore.rooms;
} catch (error) {
console.error("Error fetching rooms:", error);
}
},
    checkAvailability() {
      const availabilityStore = useAvailabilityStore();
      availabilityStore.setFromDate(this.fromDate);
      availabilityStore.setToDate(this.toDate);

      const roomId = this.selectedRoom;
      availabilityStore.checkAvailability(roomId);

      this.showAvailabilityData = true;
      
      
    },
  
    initializeRoom() {
      if (this.rooms.length > 0) {
        this.selectedRoom = this.rooms[0].id; 
      } else {
        this.selectedRoom = null;
      }
    },
  },
};
</script>