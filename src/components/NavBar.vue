<script></script>

<template>
  <div>
    <nav class="nav">
      <ul class="navList">
        <li>
          <button class="btn">
            <RouterLink to="/">Home</RouterLink>
          </button>
        </li>
        <li>
          <button class="btn">
            <RouterLink to="/groceries"> Groceries </RouterLink>
          </button>
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
