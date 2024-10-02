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
  min-width: 75%;
  border-color: blue;
  border-radius: 5px;
  min-height: 30px;
}
</style>
