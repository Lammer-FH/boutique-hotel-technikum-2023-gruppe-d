<template>
  <div class="container-fluid"> <!-- Use container-fluid to make it full-screen -->

      <div class="home">
        <div class="bg-light text-light p-3">
          <!-- Blue Part -->
        </div>

    </div>
    <div class="new-div bg-secondary text-light p-5">
      <h1 class="text-danger">Hotel Alma</h1>
      <p>Welcome to our hotel. Book your stay and enjoy luxury redefined at the most affordable rates.</p>
      <div class="photo-wrapper">
        <img src="@/assets/img/home.jpg" alt="Photo" class="img-fluid" />
      </div>
      <div class="button-wrapper">
        <router-link to="/booking" class="btn btn-dark">Book Now</router-link>
      </div>
    </div>
    <div class="white-part bg-light p-5">
      <div class="text-left">
        <h1>Facilities</h1>
      </div>
      <div class="photos">
        <div class="photo d-flex flex-row mb-4 align-items-center">
          <div class="photo-text flex-grow-1">
            <h2>Luxury redefined</h2>
            <p>Our rooms are designed to transport you into an environment and find a private paradise for yourself.</p>
          </div>
          <div class="photo-frame border p-3">
            <img src="../assets/img/Facilities1.png" alt="Photo 1" class="img-fluid" />
          </div>
        </div>
        <div class="photo d-flex flex-row mb-4 align-items-center">
          <div class="photo-text flex-grow-1">
            <h2>Leave your worries in the sand</h2>
            <p>Our rooms are designed to transport you into an environment and find a private paradise for yourself.</p>
          </div>
          <div class="photo-frame border p-3">
            <img src="../assets/img/Facilities2.png" alt="Photo 1" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "HomePage",
};
</script>

<style scoped>
/* You don't need custom styles as Bootstrap classes are used */
</style>
