<template>
  <b-navbar toggleable="lg" type="light" variant="info">
    <b-navbar-brand href="/">
      <div class="logo">
        <img src="@/assets/img/logo.jpg" alt="Logo" class="logo-image">
      </div>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="b-navbar-nav">
        <b-nav-item :to="{ path: '/' }" style="font-size: 34px; margin-right: 13px">
          <b-icon-house-door></b-icon-house-door>
        </b-nav-item>

        <b-nav-item to="/room">Room</b-nav-item>
        <b-nav-item to="/impressum">Impressum</b-nav-item>
        <b-nav-item to="/booking">Book</b-nav-item>
        <b-nav-item to="/history">History</b-nav-item>

        <!-- About Link -->
        <b-nav-item to="/about">
          About
        </b-nav-item>

        <b-nav-item to="/login">
          <b-dropdown right split text="Account" variant="dark">
            <b-dropdown-item>
              <b-nav-item to="/login" style="font-size: 14px;">
                <b-icon-person-fill></b-icon-person-fill>
                <span style="margin-left: 10px;">My profile</span>
              </b-nav-item>
            </b-dropdown-item>

            <b-dropdown-item>
              <b-nav-item to="/login" style="font-size: 14px;">
                <b-icon-arrow-right-square></b-icon-arrow-right-square>
                <span style="margin-left: 10px;">Sign in</span>
              </b-nav-item>
            </b-dropdown-item>

            <b-dropdown-divider></b-dropdown-divider>

            <b-dropdown-item>
              <b-nav-item to="/login" style="font-size: 14px;">
                <b-icon-person-plus></b-icon-person-plus>
                <span style="margin-left: 10px;">Registration</span>
              </b-nav-item>
            </b-dropdown-item>
          </b-dropdown>
        </b-nav-item>

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

.b-navbar-nav {
  display: flex;
  align-items: center;
}
</style>
