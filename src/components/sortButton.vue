<script>
export default {
  name: 'sortButton',
  props: {
    type: String,
    placeholder: String,
  },
  methods: {
    sortItems() {
      this.$emit('sortItems');
    },
  },
};
</script>

<template>
  <button class="sortButton" @click="sortItems">Sort Items</button>
</template>

<style scoped>
.sortButton {
  border: none;
  border-radius: 5px;
  background-color: #b4acff;
  width: 20%;
  min-width: 150px;
  color: black;
  margin-left: 10px;
  margin-right: 5px;
  cursor: pointer;
  min-height: 30px;
  box-shadow: 2px 2px 24px 0 rgba(0, 0, 0, 0.3);
}
</style>
