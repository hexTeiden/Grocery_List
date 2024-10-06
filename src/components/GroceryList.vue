<script>
export default {
  name: 'GroceryList',
  props: {
    Name: String,
  },
  data() {
    return {
      items: [
        'Apples',
        'Bananas',
        'Carrots',
        'Doritos',
        'Eggs',
        'Figs',
        'Grapes',
        'Honey',
        'Ice Cream',
        'Jelly',
      ],
    };
  },
  methods: {
    clearList() {
      this.items = [];
    },
  },
};
</script>

<template>
  <div>
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
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
