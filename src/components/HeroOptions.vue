<template>
  <div class="options-container">
    <ul>
      <li
        v-for="hero in heros"
        :key="hero.id"
        @click="$emit('onSelect', hero.id)"
      >
        {{ hero.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    heros: {
      type: Array,
      requiered: true,
    },
  },
};
</script>
<style scoped>
ul {
  list-style-type: none;
  padding: inherit;
}
li {
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-bottom: 10px;
  width: 250px;
  padding: 10px;
}

li:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
  display: flex;
  justify-content: center;
}
</style>
