<script>
export default {
  name: 'GroceryItems',
  props: {
    Name: String,
    items: Array,
  },
  data() {
    return {
      groceries: ['Bacon', 'Milk', 'Eggs'],
    };
  },
};
</script>

<template>
  <li v-for="(item, index) in groceries" :key="index" ref="groceries">{{ item }}</li>
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
