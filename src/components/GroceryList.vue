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
        'Ice Cream',
        'Eggs',
        'Carrots',
        'Doritos',
        'Honey',
        'Figs',
        'Grapes',
        'Bananas',
        'Jelly',
      ],
    };
  },
  methods: {
    addItem(item) {
      this.items.push(item);
    },
    clearList() {
      this.items = [];
    },
    sortItems() {
      this.items.sort();
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
