<script>
export default {
  name: 'RemoveAllButton',
  methods: {
    removeItems() {
      this.$emit('removeItems');
    },
  },
};
</script>

<template>
  <button class="removeAllButton" @click="removeItems">Clear Items</button>
</template>

<style scoped>
.removeAllButton {
  border: none;
  font-size: 20px;
  border-radius: 5px;
  background-color: white;
  min-width: 15%;
  color: #ff7f7f;
  margin-bottom: 10px;
  margin-left: 40%;
  margin-top: 30px;
  cursor: pointer;
}
</style>
