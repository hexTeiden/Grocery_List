<script>
import Input from '../components/Input.vue';
import addButton from '../components/addButton.vue';
import GroceryList from '../components/GroceryList.vue';
import RemoveAllButton from '../components/RemoveAllButton.vue';

export default {
  components: {
    Input,
    addButton,
    GroceryList,
    RemoveAllButton,
  },
};
</script>

<template>
  <div class="orderBox">
    <h1>Grocery List</h1>
    <span>
      <Input />
      <addButton @removeItems="clearList" />
    </span>
    <GroceryList />

    <RemoveAllButton />
  </div>
</template>

<style scoped>
.orderBox {
  margin-top: 25vh;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 10px;
  background-color: white;
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
</style>
