<script>
export default {
  name: 'GroceryItems',
  props: {
    Name: String,
  },
  data() {
    return {
      items: ['Bacon', 'Milk', 'Eggs'],
    };
  },
};
</script>

<template>
  <li v-for="(item, index) in items" :key="index">{{ item }}</li>
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
