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
  <button class="addButton">Submit</button>
</template>

<style scoped>
.addButton {
  border: none;
  border-radius: 5px;
  background-color: #b4acff;
  min-width: 20%;
  color: black;
  margin-left: 10px;
  margin-right: 5px;
  cursor: pointer;
  min-height: 30px;
}
</style>
