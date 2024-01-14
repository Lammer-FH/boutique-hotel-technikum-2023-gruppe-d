<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Book a Room</h1>

    <div class="card p-4">
      <RoomCard :room="room" />
      <br>
      <form @submit.prevent="navigateToConfirmationPage">
      <div class="mb-3">
        <label for="roomId" class="form-label">Personliche Daten</label>
      </div>
      
      <div class="row g-3">
        <div class="col-md-6">
          <label for="firstname" class="form-label">First Name:</label>
          <input v-model="firstname" type="text" class="form-control" id="firstname" required >
        </div>
        <div class="col-md-6">
          <label for="lastname" class="form-label">Last Name:</label>
          <input v-model="lastname" type="text" class="form-control" id="lastname" required>
        </div>


        <div class="col-md-6">
          <label for="email" class="form-label">Email:</label>
          <input v-model="email" type="email" class="form-control" id="email" required>
        </div>
        <div class="col-md-6">
          <label for="birthdate" class="form-label">Birthdate:</label>
          <input
            v-model="birthdate"
            type="date"
            class="form-control"
            id="birthdate"
            :max="getMaxBirthdate()"
            required
          />        </div>
        <div class="col-md-6" style="background-color: #f0f0f0;">
          <label for="fromDate" class="form-label">From Date:</label>
          <p class="form-control-static">{{ $route.params.fromDate }}</p>
        </div>
        <div class="col-md-6" style="background-color: #f0f0f0;">
          <label for="toDate" class="form-label">To Date:</label>
          <p class="form-control-static">{{ $route.params.toDate }}</p>
        </div>
        
        <div >
          <!-- Die Schaltfläche wird nur aktiviert, wenn alle Eingabefelder ausgefüllt sind -->
          <button class="btn btn-primary me-2" :disabled="!formIsValid">Next</button>

        </div>
      </div>
    </form>
    <div class="button-group mt-4">
  <div style="display: flex; justify-content: space-between;">
    <button class="btn btn-secondary me-2" @click="cancelReservation">Abbrechen</button>
    <button class="btn btn-secondary" @click="goBack">Datum Ändern</button>
  </div>
  
</div>

    </div>
  </div>
</template>

<script>
import { ref, onMounted,onBeforeMount  } from 'vue';
import { useRouter, useRoute } from 'vue-router'; // استيراد useRouter و useRoute من vue-router
import { useBookStore } from  '@/stores/bookStore.js'; // حدّث المسار إلى مكان تعريف store
import { useRoomStore } from '../stores/roomStore';
import { computed } from 'vue';
import RoomCard from '@/components/RoomCard.vue'; // تأكد من أن المسار صحيح



export default {
  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      birthdate: '',
    };
  },
  
  computed: {
    formIsValid() {
      return !!this.firstname && !!this.lastname && !!this.email && !!this.birthdate;
    },
  },
  methods: {
    navigateToConfirmationPage() {
      if (this.formIsValid) {
      } else {
        alert('Bitte füllen Sie alle erforderlichen Felder aus.');
      }
    },
    goBack() {
    },
  },
  name: "BookPage",
  components: {
    RoomCard, // تأكد من إضافة هذا
  },
  setup() {
    const bookStore = useBookStore();
    const router = useRouter();
    const route = useRoute();
    const firstname = ref("");
    const roomStore = useRoomStore();
    const lastname = ref("");
    const email = ref("");
    const birthdate = ref("");
    const room = computed(() => {
      const roomId = route.params.roomId;
      return roomStore.rooms[roomId];
    });
    const goBack =() => {
      router.push({
        name: 'Availability', 
      });
    };
    const getMaxBirthdate = () => {
      const currentDate = new Date();
      const maxDate = new Date(
        currentDate.getFullYear() - 16,
        currentDate.getMonth(),
        currentDate.getDate()
      );
      return maxDate.toISOString().split("T")[0];
    };
    onBeforeMount(() => {
      if (roomStore.rooms.length === 0) {
        roomStore.fetchRooms();
      }
    });
    onMounted(() => {
      const userDetails = JSON.parse(localStorage.getItem('userDetails'));
      if (userDetails) {
        firstname.value = userDetails.firstname || "";
        lastname.value = userDetails.lastname || "";
        email.value = userDetails.email || "";
        birthdate.value = userDetails.birthdate || ""; // تحقق من صيغة التاريخ المستخدمة
      }
    });
    const navigateToConfirmationPage = () => {
      router.push({
        name: 'confirmation',
        query: {
          roomId: route.params.roomId,
          roomsName: route.params.roomsName,
          firstname: firstname.value,
          lastname: lastname.value,
          email: email.value,
          birthdate: birthdate.value,
          fromDate: route.params.fromDate,
          toDate: route.params.toDate
        }
      });
    };
    
    function cancelReservation() {
      const confirmed = window.confirm("Do you want to cancel the reservation?");
      if (confirmed) {
         router.push('/room');
      }
    }
    return { cancelReservation,getMaxBirthdate,room, firstname, lastname, email, birthdate, navigateToConfirmationPage,goBack, };
  }
  
};
</script>

