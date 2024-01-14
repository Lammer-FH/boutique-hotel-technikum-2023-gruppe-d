<template>
  <div class="black-part">
    <div class="footer">
      <ul>
        <li>        <b-nav-item to="/about">About</b-nav-item>
</li>
      </ul>
      <ul>
        <li>        <b-nav-item to="/impressum">Impressum</b-nav-item>
</li>
      </ul>

      <ul>
<li>
  <b-nav-item to="/about">Contact</b-nav-item>
</li>

      </ul>
      
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
