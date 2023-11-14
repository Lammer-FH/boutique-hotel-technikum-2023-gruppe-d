<template>
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
  name: "FooterHomepage"
};
</script>

<style scoped>

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

</style>
