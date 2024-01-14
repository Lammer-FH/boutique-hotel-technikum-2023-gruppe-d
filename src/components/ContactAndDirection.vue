<template>
  <div>
    <b-card
      bg-variant="light"
      header="Best way to drive to the Hotel"
      class="text-center m-4"
    >
      <b-card-text>
        <h6>{{ title }}</h6>
        <p>{{ Car }}</p>
        <p>{{ walk }}</p>
        <p>{{ train }}</p>
      </b-card-text>
    </b-card>

    <b-card bg-variant="light" header="Contact" class="text-center m-4">
      <b-card-text>
        <p>{{ hotelName }}</p>
        <p>{{ hotelAddress }}</p>
        <p>E-mail: <a :href="'mailto:' + email">{{ email }}</a></p>
        <p>Tel: <a :href="'tel:' + hotelPhone">{{ hotelPhone }}</a></p>
        <p>Web: <a :href="'http://' + web" target="_blank"> {{ web }}</a></p>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "ContactAndDirection",
  data() {
    return {
      title: "Different ways to reach Alma Hotel:",
      Car: "With the car: Drive through n88 Street then at the end turn left.",
      walk: "You can also walk to the hotel, its going to take 15 minutes: On the right side of n88 Street there is a walkway, walk through there any ou gonna end up at the hotel.",
      train: "For train just Stop at Alma Station.",
      hotelName: "Hotel Alma",
      hotelAddress: "Kaiser-Franz-Josef-Straße 128344 Bad Gleichenberg",
      hotelPhone: "+43 3159 2367",
      web: "www.almer-hotel.at",
      email: "info@allmer-hotel.at",
    };
  },
};
</script>
