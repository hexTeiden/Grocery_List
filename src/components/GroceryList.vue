<script>
import GroceryItems from './GroceryItems.vue';

export default {
  name: 'GroceryList',
  components: {
    GroceryItems,
  },
};
</script>

<template>
  <div>
    <ul>
      <GroceryItems />
    </ul>
  </div>
</template>

<style scoped>
li {
  list-style-type: none;
  padding: 0;
  margin: 0;
  padding: 10px;
  border-bottom: 1px solid rgb(0 0 0 / 30%);
}
</style>
