<script>
export default {
  name: 'removeAllButton',
  methods: {
    removeItems() {
      this.$emit('removeItems');
    },
  },
};
</script>

<template>
  <button class="removeAllButton" @click="removeItems()">Clear Items</button>
</template>

<style scoped>
.removeAllButton {
  border: none;
  font-size: 20px;
  border-radius: 5px;
  background-color: rgb(255, 255, 255, 10%);
  min-width: 15%;
  color: #ff7f7f;
  margin-bottom: 10px;
  margin-left: 40%;
  margin-top: 30px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 5px;
}
</style>
