<script>
export default {
  name: 'Input',
  props: {
    type: String,
    placeholder: String,
  },
};
</script>

<template>
  <input :type="type" :placeholder="placeholder" />
</template>

<style scoped>
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
