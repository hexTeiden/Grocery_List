<script>
import addButton from '../components/addButton.vue';
import GroceryList from '../components/GroceryList.vue';
import RemoveAllButton from '../components/RemoveAllButton.vue';

export default {
  components: {
    addButton,
    GroceryList,
    RemoveAllButton,
  },
  data() {
    return {
      newItem: '', // Add a data property to hold the new item
    };
  },
  methods: {
    clearList() {
      this.$refs.groceryItems.items = [];
    },
    addItemToList() {
      if (this.newItem.trim() !== '') {
        this.$refs.groceryItems.addItem(this.newItem);
        this.newItem = ''; // Clear the input after adding the item
      }
    },
  },
};
</script>

<template>
  <div class="orderBox">
    <h1>Grocery List</h1>
    <span>
      <input type="text" placeholder="Write your grocery item" v-model="newItem" />
      <addButton @addItem="addItemToList" />
      <!-- FIXME: Fix the add button that is currently throwing an error message -->
    </span>
    <GroceryList ref="groceryItems" />

    <RemoveAllButton @removeItems="clearList" />
  </div>
</template>

<style scoped>
.orderBox {
  margin-top: 5vh;
  box-shadow: rgb(0 0 0 / 30%) 0px 0px 10px;
  background-color: rgb(255, 255, 255, 10%);
  color: black;
  min-width: 500px;
}

h1 {
  text-align: center;
  margin-top: 0;
  padding-top: 10px;
}

span {
  display: inline;
}
input {
  margin-left: 25px;
  width: 75%;
  min-width: 150px;
  border-color: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  min-height: 30px;
  background-color: rgba(255, 255, 255, 0.5);
}
</style>
