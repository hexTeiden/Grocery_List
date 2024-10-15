<script>
export default {
  name: 'AboutItems',
  data() {
    return {
      fullName: 'Matteo Marcel Knogler',
      Role: 'Product Owner, Developer, Designer, Tester',
      Age: '19',
      Location: 'Vienna - Austria',
      School: 'HTL Wien West',
      Mail: 'knogler.m19@htlwienwest.at',
    };
  },
};
</script>

<template>
  <ul>
    <li>Name: {{ fullName }}</li>
    <li>Age: {{ Age }}</li>
    <li>Email: {{ Mail }}</li>
    <li>Role: {{ Role }}</li>
    <li>Location: {{ Location }}</li>
    <li>School: {{ School }}</li>
  </ul>
</template>

<style scoped>
ul {
  margin-left: 30px;
  margin-top: 40px;
  list-style-type: none;
  padding: 0;
}
</style>
