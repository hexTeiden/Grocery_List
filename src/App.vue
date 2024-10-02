<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <nav class="nav">
    <ul class="navList">
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/groceries">Groceries</RouterLink>
      </li>
    </ul>
  </nav>

  <RouterView />
</template>

<style scoped>


.nav {
  /* align the navbar in the top left  */
  position: absolute;
  top: 15px;
  left: 15px;
  transform: translate(0, 0);
  margin-left: 20px;
}
.navList {
  list-style-type: none;
  padding: 0;
}
.navList li {
  margin-top: 5px;
}
</style>
