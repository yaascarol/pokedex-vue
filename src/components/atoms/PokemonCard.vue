<template>
  <div class="card" @click="$emit('select', pokemon)">
    <img :src="pokemon.image" />
    <h3>{{ pokemon.name }}</h3>
  </div>
</template>

<script>
export default {
  props: ["pokemon"]
};
</script>

<style>
.card {
  width: 130px;
  padding: 10px;
  margin: 10px;
  border: 1px solid #ddd;
  text-align: center;
  cursor: pointer;
}
.card img {
  width: 100px;
}
</style>
