<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Book a Room</h1>

    <div class="card p-4">
      
      <div class="mb-3">
        <label for="roomId" class="form-label">Room Id:</label>
        <p class="form-control-static">{{ $route.params.roomId }}</p>
      </div>
      <div class="mb-3">
        <label for="roomsName" class="form-label">Room Name:</label>
        <p class="form-control-static">{{ $route.params.roomsName }}</p>
      </div>
      <div class="row g-3">
        <div class="col-md-6">
          <label for="firstname" class="form-label">First Name:</label>
          <input v-model="firstname" type="text" class="form-control" id="firstname">
        </div>
        <div class="col-md-6">
          <label for="lastname" class="form-label">Last Name:</label>
          <input v-model="lastname" type="text" class="form-control" id="lastname">
        </div>
        <div class="col-md-6">
          <label for="email" class="form-label">Email:</label>
          <input v-model="email" type="email" class="form-control" id="email">
        </div>
        <div class="col-md-6">
          <label for="birthdate" class="form-label">Birthdate:</label>
          <input v-model="birthdate" type="date" class="form-control" id="birthdate">
        </div>
        <div class="col-md-6" style="background-color: #f0f0f0;">
  <label for="fromDate" class="form-label">From Date:</label>
  <p class="form-control-static">{{ $route.params.fromDate }}</p>
</div>
<div class="col-md-6" style="background-color: #f0f0f0;">
  <label for="toDate" class="form-label">To Date:</label>
  <p class="form-control-static">{{ $route.params.toDate }}</p>
</div>

        
        <div class="button-group mt-4">
        <button class="btn btn-primary me-2" @click="navigateToConfirmationPage">Next</button>
        <button class="btn btn-secondary me-2">abrechen</button>
        <button class="btn btn-secondary" @click="goBack">Date Ändern</button>
      </div>

      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router'; // استيراد useRouter و useRoute من vue-router
import { useBookStore } from  '@/stores/bookStore.js'; // حدّث المسار إلى مكان تعريف store

export default {
  name: "BookPage",
  setup() {
    const bookStore = useBookStore();
    const router = useRouter();
    const route = useRoute();
    const firstname = ref("");
    const lastname = ref("");
    const email = ref("");
    const birthdate = ref("");
    const goBack =() => {
      router.push({
        name: 'Availability', // تحديد اسم المسار الخاص بصفحة CheckRoomAvailability.vue
      });
    };
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

    return { firstname, lastname, email, birthdate, navigateToConfirmationPage,goBack, };
  }
  
};
</script>

