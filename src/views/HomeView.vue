<script setup></script>

<template>
  <h1 class="welcome">Home</h1>

  <div>
    <div class="contain left">
      <div class="cont">
        <h2>Why use grocery list?</h2>
        <p>asdfasdf</p>
      </div>
    </div>
    <div class="contain right">
      <div class="cont">
        <h2>Because</h2>
        <p>Lorem ipsum..</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.welcome {
  text-align: center;
  margin-top: 25px;
  color: white;
}

/* Container around content */
.contain {
  padding: 10px 40px;
  position: relative;
  color: white;
  background-color: inherit;
  width: 50%;
}

/* Place the container to the left */
.left {
  left: 0;
}

/* Place the container to the right */
.right {
  left: 50%;
}

/* The actual content */
.cont {
  padding: 20px 30px;
  background-color: rgba(0, 0, 0, 0.1);
  position: relative;
  border-radius: 6px;
}
</style>
