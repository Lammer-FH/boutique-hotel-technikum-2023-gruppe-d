<template>
    <div>
      <button
        v-if="!bookingSuccess && buttonSet === 'registration'"
        class="btn btn-primary me-2"
        @click="bookRoom"
      >
        abschicken
      </button>
      <button
        v-if="!bookingSuccess && buttonSet === 'registration'"
        class="btn btn-secondary me-2"
        @click="cancelBooking"
      >
        abrechen
      </button>
      <button
        v-if="!bookingSuccess && buttonSet === 'registration'"
        class="btn btn-success"
        @click="editBookingData"
      >
        Daten Ändern
      </button>
  
      <button
        v-if="bookingSuccess && buttonSet === 'confirmation'"
        class="btn btn-primary me-2"
        @click="printConfirmation"
      >
        Drucken
      </button>
      <button
        v-if="bookingSuccess && buttonSet === 'confirmation'"
        class="btn btn-info"
        @click="confirmGoToHomePage"
      >
        Zurück zur Startseite
      </button>
      <button
        v-if="bookingSuccess && buttonSet === 'confirmation'"
        class="btn btn-warning"
        @click="openGoogleMaps"
      >
        Show Google Map
      </button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      bookingSuccess: Boolean,
      buttonSet: String,
    },
    methods: {
      bookRoom() {
        this.$emit("book-room");
      },
      cancelBooking() {
        this.$emit("cancel-booking");
      },
      editBookingData() {
        this.$emit("edit-booking-data");
      },
      printConfirmation() {
        this.$emit("print-confirmation");
      },
      confirmGoToHomePage() {
        this.$emit("confirm-go-to-home-page");
      },
      openGoogleMaps() {
        this.$emit("open-google-maps");
      },
    },
  };
  </script>
  