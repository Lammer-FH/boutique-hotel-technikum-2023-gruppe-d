export <template>
  <b-navbar toggleable="lg" type="light" variant="info">
    <b-navbar-brand href="/">
      <div class="logo">
        <img src="@/assets/img/logo.jpg" alt="Logo" class="logo-image">
      </div>    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/about">About</b-nav-item>
        <b-nav-item to="/room">Room</b-nav-item>
        <b-nav-item to="/impressum">Impressum</b-nav-item>
        <b-nav-item to="/booking">Book</b-nav-item>
        <b-nav-item to="/history">History</b-nav-item>
        <b-nav-item to="/login">Login</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>


<style scoped>
.logo-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}

</style>