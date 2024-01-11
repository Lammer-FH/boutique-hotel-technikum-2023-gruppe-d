<template>
    <div class="container mt-5">
      <h1 class="text-center mb-4">Confirmation Page</h1>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">Field</th>
            <th scope="col">Value</th>
          </tr>
        </thead>
        <tbody>
        
          <tr v-if="roomImage">
            <td>Room Image</td>
            <td>
              <img :src="roomImage" alt="Room Image" class="img-fluid" style="max-width: 200px; height: auto;">
            </td>
          </tr>
         
        <tr>
            <td>Room Name</td>
            <td>{{ roomsName }}</td>
          </tr>
        <!--  <RoomCard :id="roomId" />-->

          <tr>
            <td>First Name</td>
            <td>{{ firstname }}</td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td>{{ lastname }}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{{ email }}</td>
          </tr>
          <tr>
            <td>Birthdate</td>
            <td>{{ birthdate }}</td>
          </tr>
          <tr>
            <td>From Date</td>
            <td>{{ fromDate }}</td>
          </tr>
          <tr>
            <td>To Date</td>
            <td>{{ toDate }}</td>
          </tr>
        </tbody>
      </table>
  
      <!-- مجموعة الأزرار -->
      <div class="button-group mt-4">
        <button class="btn btn-primary me-2" @click="bookRoom">abschicken</button>
        <button class="btn btn-secondary me-2">abrechen</button>
        <button class="btn btn-success" @click="goBackToBookPage">Daten Ändern</button>
      </div>
    </div>
    <div v-if="bookingSuccess" class="alert alert-success mt-3">
    شكراً، تم الحجز بنجاح., {{reservationId}}
    <div v-if="reservationId">
      Reservation ID: {{ reservationId }}
    </div>
  </div>
  </template>
  
  <script>

  import { ref, computed, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { useBookStore } from  '@/stores/bookStore.js'; // حدّث المسار إلى مكان تعريف store
  import RoomCard from '@/components/RoomCard.vue';
  import { useRoomStore } from '@/stores/roomStore.js';


  export default {
    name: "ConfirmationPage",
    components: {
    RoomCard,
  },
    setup() {
      const route = useRoute();
      const router = useRouter();
      const reservationId = ref(null);
      const bookStore = useBookStore();
      const roomStore = useRoomStore();

      const bookingSuccess = ref(false);
      const goBackToBookPage = () => {
  router.push({ 
    name: 'book', 
    params: { 
      roomId: roomId.value, // تأكد من أن هذه القيمة متوفرة
      roomsName: roomsName.value, // تأكد من أن هذه القيمة متوفرة
      // تأكد من أن هذه القيمة متوفرة
      fromDate: fromDate.value, // تأكد من أن هذه القيمة متوفرة
      toDate: toDate.value, // تأكد من أن هذه القيمة متوفرة
    } 
  });
};


      const roomId = ref('');
      const roomsName = ref('');
      const firstname = ref('');
      const lastname = ref('');
      const email = ref('');
      const birthdate = ref('');
      const fromDate = ref('');
      const toDate = ref('');
  
      onMounted(async () => {
        await roomStore.fetchRooms();
        roomId.value = route.query.roomId;
        roomsName.value = route.query.roomsName;
        firstname.value = route.query.firstname;
        lastname.value = route.query.lastname;
        email.value = route.query.email;
        birthdate.value = route.query.birthdate;
        fromDate.value = route.query.fromDate;
        toDate.value = route.query.toDate;
      });
      const room = computed(() => {
      return roomStore.rooms.find(r => r.id === roomId.value);
    });
      const roomImage = computed(() => {
        if (roomId.value) {
          return new URL(`../assets/img/rooms/${roomId.value}.jpg`, import.meta.url).href;
        }
        return '';
      });
  
      const bookRoom = async () => {
        bookStore.saveBookingData({
          firstname: firstname.value,
          lastname: lastname.value,
          email: email.value,
          birthdate: birthdate.value,
          fromDate: fromDate.value,
          toDate: toDate.value,
        });
        await bookStore.bookRoom(roomId.value);
        if (bookStore.reservationId) {
          bookingSuccess.value = true;
          reservationId.value = bookStore.reservationId; // تحديث الحالة في حال نجاح الحجز
        }      };
  
      return {
        roomId,
        roomsName,
        firstname,
        lastname,
        email,
        birthdate,
        fromDate,
        toDate,
        roomImage,
        bookRoom,
        bookingSuccess,
        goBackToBookPage,
        room,
        reservationId,



      };
    }
  };
  </script>
  