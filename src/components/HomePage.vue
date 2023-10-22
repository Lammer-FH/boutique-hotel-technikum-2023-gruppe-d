<template>
  <div class="home">
    <div class="blue-part">


    </div>
  </div>
  <div class="new-div">
    <h1>Hotel Alma</h1>
    <p>Welcome to our hotel. Book your stay and enjoy luxury redefined at the most affordable rates.</p>
    <div class="photo-wrapper">
      <img src="@/assets/img/home.jpg" alt="Photo" />
    </div>

    <div class="button-wrapper">
      <button class="book-now-button">Book Now</button>
    </div>
  </div>
  <div class="white-part">
    <div class="text-left">
      <h1>Facilities</h1>
    </div>
    <div class="photos">
      <div class="photo">
        <div class="photo-text">
          <h2>Luxury redefined</h2>
          <p>Our rooms are designed to transport you into an environment and ur rooms are designed to transport you into an environment and f find a private paradise for yourself.</p>
        </div>
        <div class="photo-frame">
          <img src="../assets/img/Facilities1.png" alt="Photo 1">
        </div>
      </div>
      <div class="photo">
        <div class="photo-text">
          <h2>Leave your worries in
            the sand</h2>
          <p>Our rooms are designed to transport you into an environment and find a private paradise for yourself.</p>
        </div>
        <div class="photo-frame">
          <img src="../assets/img/Facilities2.png" alt="Photo 2">
        </div>
      </div>
    </div>
  </div>
  <div class="black-part">
    <div class="footer">
      <ul>
        <li>About Us</li>
      </ul>
      <ul>
        <li>Impressum</li>
      </ul>
      <div class="social-links">
        <a href="#" class="social-link">Contact</a>
        <a href="#" class="social-link">Twitter</a>
        <a href="AboutPage.vue" class="social-link">Facebook</a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "HomePage",
  methods: {
    changePage(page) {
      this.currentPage = page;
    },
  },
};

</script>

<style scoped>

body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  height: 100vh;
}

/* Shared styles for both mobile and desktop */
.blue-part {
  background-color: rgba(164, 192, 238, 0.93);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

}

.white-part {
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.text-left {
  flex: 1;
  padding: 0 20px;
}

.text-left h3 {
  margin-bottom: 20px;
}

.photos {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.photo {
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  align-items: center;
}

.photo-frame {
  width: 100%;
  max-width: 400px;
  max-height: 400px;
  border: 1px solid #000;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}

.photo img {
  max-width: 100%;
  max-height: 100%;
}

.photo-text {
  margin-left: 50px;
  flex: 1;

}

.black-part {
  background-color: black;
  color: white;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.footer ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.footer ul li {
  margin-right: 10px;
}

.social-links {
  display: flex;
}

.social-link {
  margin-right: 10px;
  color: white;
  text-decoration: none;
}


@media (max-width: 768px) {
  .blue-part {
    min-height: auto;
    flex-direction: column;
  }
}

@media (min-width: 769px) {
  .blue-part {
    min-height: 1vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    height: auto;
    background-color: rgba(236, 241, 248, 0.93);
    margin: 0;
  }


  .photo-wrapper img {
    width: 100%;
    height: auto;
  }
}

.new-div {
  background-color: #d6e6f5;
  height: 190vh;
  text-align: center;
  padding: 20px;
}
@media (max-width: 768px) {
  .new-div {
    height: auto;
  }
}
.new-div h1 {
  color: #7a1717;
}

.new-div p {
  color: #020101;
}


.photo-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.photo-wrapper {
  width: 100%;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.button-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 20px;

}

.book-now-button {
  color: #000000;
  background-color: #f0f0f8;
  border: 1px solid #000;
  padding: 10px 20px;
  border-radius: 5px;
}
@media (max-width: 768px) {
  .photo-wrapper {
    height: auto;
  }}

</style>
