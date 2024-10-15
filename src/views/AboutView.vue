<script>
import AboutItems from '@/components/AboutItems.vue';

export default {
  name: 'AboutView',
  components: {
    AboutItems,
  },
};
</script>

<template>
  <div class="everything">
    <div class="aboutBox">
      <h1 class="aboutHeading">About</h1>
      <div class="items">
        <img src="/images/Knogler.png" alt="Image Knogler" />

        <AboutItems />
      </div>
      <button class="btn"><RouterLink> </RouterLink>About Me</button>
    </div>
  </div>
</template>

<style scoped>
.everything {
  display: flex;
  justify-content: center;
  align-items: center;
}

.aboutBox {
  margin-top: 5vh;
  box-shadow: rgb(0 0 0 / 30%) 0px 0px 10px;
  background-color: rgb(255, 255, 255, 10%);
  color: black;
  min-width: 800px;
  max-width: 1200px;
  border-radius: 25px;
}

.aboutHeading {
  margin-top: 0;
  padding-top: 20px;
  text-align: center;
}

.items {
  display: inline-flex;
}

img {
  margin-left: 30px;
  width: 250px;
  height: auto;
  border-radius: 25px;
}
</style>
