<template>
    <div class="container mt-5">
      <h1 class="text-center mb-4">Confirmation Page</h1>
      <div class="card p-4">
      <table class="table">
     
        <tbody>
        
          <tr>
          <td colspan="2" class="text-center" style="font-size: large;">
        <label for="roomId" class="form-label">Room Detail</label>
      </td>
      
          </tr>
          <tr>
          <td colspan="2" class="text-center">
            
            <RoomCard :room="roomd" />
          </td>
        </tr>
        <br>
        <tr>
          <td colspan="2" class="text-center" style="font-size: large;">
        <label for="roomId" class="form-label">Personliche Daten</label>
      </td>
      
          </tr>
        <tr>
          <th scope="row" >Room Name</th>
          <td class="text-left">{{ roomsName }}</td>
        </tr>

        <tr>
          <th scope="row" >First Name</th>
          <td class="text-left">{{ firstname }}</td>
        </tr>

        <tr>
          <th scope="row" >Last Name</th>
          <td class="text-left">{{ lastname }}</td>
        </tr>

        <tr>
          <th scope="row" >Email</th>
          <td class="text-left">{{ email }}</td>
        </tr>

        <tr>
          <th scope="row" >Birthdate</th>
          <td class="text-left">{{ birthdate }}</td>
        </tr>

        <tr>
          <th scope="row" >From Date</th>
          <td class="text-left">{{ fromDate }}</td>
        </tr>

        <tr>
          <th scope="row" >To Date</th>
          <td class="text-left">{{ toDate }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  
      <!-- مجموعة الأزرار -->
      <div class="button-group mt-4">
        <button class="btn btn-primary me-2" @click="bookRoom">abschicken</button>
        <button class="btn btn-secondary me-2">abrechen</button>
        <button class="btn btn-success" @click="goBackToBookPage">Daten Ändern</button>
      </div>
      <br>
    </div>
    <div v-if="bookingSuccess" class="alert alert-success mt-3">
    شكراً، تم الحجز بنجاح., {{reservationId}}
    <div v-if="reservationId">
      Reservation ID: {{ reservationId }}
    </div>
  </div>
  </template>
  
  <script>

  import { ref, computed, onMounted,onBeforeMount } from 'vue';
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
      const roomd = computed(() => {
      const roomId2 = route.query.roomId;
      return roomStore.rooms[roomId2];
    });
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
      onBeforeMount(() => {
      if (roomStore.rooms.length === 0) {
        roomStore.fetchRooms();
      }
    });
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
        roomd,



      };
    }
  };
  </script>
  