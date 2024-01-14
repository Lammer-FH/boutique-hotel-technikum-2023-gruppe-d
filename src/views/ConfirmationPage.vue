<template>

  <div class="container mt-5" id="confirmation-page">
    <h1 class="text-center mb-4">{{ pageTitle }}</h1>
    <div v-if="bookingSuccess" class="alert alert-success mt-3">
      <div v-if="reservationId">Reservation ID: {{ reservationId }}</div>
    </div>

    
    <div class="card p-4">
      <table class="table">
        <tbody>
          <tr>
            <td colspan="2" class="text-center" style="font-size: large">
              <label for="roomId" class="form-label">Room Detail</label>
            </td>
          </tr>
          <tr>
            <td colspan="2" class="text-center">
              <RoomCard :room="roomd" />
            </td>
          </tr>
          
          
          <td colspan="2" class="text-center" style="font-size: large">
              <label for="roomId" class="form-label">Personlichen Daten</label>
            </td>
                <PersonalData
            :roomsName="roomsName"
            :firstname="firstname"
            :lastname="lastname"
            :email="email"
            :birthdate="birthdate"
            :fromDate="fromDate"
            :toDate="toDate"
          ></PersonalData>
        </tbody>
      </table>
    </div>

  
    <p class="my-text">{{ pageDescription }}</p>

    <div class="button-group mt-4">
      <ButtonGroup
      v-if="!bookingSuccess && buttonSet === 'registration'"
      :bookingSuccess="bookingSuccess"
      :buttonSet="buttonSet"
      @book-room="bookRoom"
      @cancel-booking="cancelBooking"
      @edit-booking-data="editBookingData"
    ></ButtonGroup>

    <ButtonGroup
      v-if="bookingSuccess && buttonSet === 'confirmation'"
      :bookingSuccess="bookingSuccess"
      :buttonSet="buttonSet"
      @print-confirmation="printConfirmation"
      @confirm-go-to-home-page="confirmGoToHomePage"
      @open-google-maps="openGoogleMaps"
    ></ButtonGroup>

    <ContactAndDirection v-if="showContactAndDirection" />
    </div>

    <br />
  </div>
</template>

<script>
import { ref, computed, onMounted, onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useBookStore } from "@/stores/bookStore.js";
import RoomCard from "@/components/RoomCard.vue";
import { useRoomStore } from "@/stores/roomStore.js";
import printJS from "print-js";
import ContactAndDirection from "@/components/ContactAndDirection.vue";
import ButtonGroup from "@/components/ButtonGroup.vue";
import PersonalData from "@/components/PersonalData.vue";


export default {
  name: "ConfirmationPage",
  components: {
    RoomCard,
    ContactAndDirection,
    ButtonGroup,
    PersonalData,



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
        name: "book",
        params: {
          roomId: roomId.value,
          roomsName: roomsName.value,
          fromDate: fromDate.value,
          toDate: toDate.value,
        },
      });
    };

    const cancelBooking = () => {
      router.push('/room');

    };

    const roomId = ref("");
    const roomsName = ref("");
    const firstname = ref("");
    const lastname = ref("");
    const email = ref("");
    const birthdate = ref("");
    const fromDate = ref("");
    const toDate = ref("");
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
      return roomStore.rooms.find((r) => r.id === roomId.value);
    });
    const roomImage = computed(() => {
      if (roomId.value) {
        return new URL(
          `../assets/img/rooms/${roomId.value}.jpg`,
          import.meta.url
        ).href;
      }
      return "";
    });

    const showContactAndDirection = ref(false);

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
        reservationId.value = bookStore.reservationId;
        showContactAndDirection.value = true;
      }
    };

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
      showContactAndDirection,
      cancelBooking
    };
  },
  data() {
    return {
      buttonSet: "registration",
      pageTitle: "Confirmation Page",
      pageDescription: "",
    };
  },
  methods: {
    printConfirmation() {
      printJS({ printable: "confirmation-page", type: "html" });
    },

    cancelBooking() {
      if (confirm("Are you sure you want to cancel the booking?")) {
        this.cancelBooking();
      }
    },

    editBookingData() {
      this.goBackToBookPage();
    },

    confirmGoToHomePage() {
      if (confirm("Are you sure you want to go back to the home page?")) {
        this.$router.push("/");
      }
    },
    switchButtonSet() {
      this.buttonSet = this.bookingSuccess ? "confirmation" : "registration";
    },
    openGoogleMaps() {
      const latitude = 37.7749;
      const longitude = -122.4194;

      window.open(
        `https://www.google.com/maps?q=${latitude},${longitude}`,
        "_blank"
      );
    },
  },
  watch: {
    bookingSuccess: "switchButtonSet",
    buttonSet() {
      this.pageTitle =
        this.buttonSet === "registration"
          ? "Confirmation Page"
          : "Booking confirmation Certificate";

      this.pageDescription =
        this.pageDescription === "registration"
          ? ""
          : "ThankYou. You have succusfully booked at our Hotel, SEE YOU SOON.";
    },
  },
};
</script>
<style>
  .my-text {
    font-size: 28px; color: rgb(92, 190, 34);
  }
</style>
