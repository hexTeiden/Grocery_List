<script>
export default {
  name: 'addButton',
  props: {
    type: String,
    placeholder: String,
  },
};
</script>

<template>
  <button class="addButton">Add Item</button>
</template>

<style scoped>
.addButton {
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
