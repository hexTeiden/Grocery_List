<script></script>

<template>
  <div>
    <nav class="nav">
      <ul class="navList">
        <li>
          <RouterLink to="/"><button class="btn">Home</button></RouterLink>
        </li>
        <li>
          <RouterLink to="/groceries"> <button class="btn">Groceries</button></RouterLink>
        </li>
        <li>
          <RouterLink to="/about"> <button class="btn">About</button> </RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style>
.nav {
  /* align the navbar in the top left  */
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(0, 0);
  margin-left: 20px;
}
.navList {
  list-style-type: none;
  padding: 0;
}
.navList li {
  display: inline;
  margin-top: 5px;
  margin-right: 10px;
}
</style>
