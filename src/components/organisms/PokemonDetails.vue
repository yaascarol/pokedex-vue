<template>
  <div class="details" v-if="pokemon">
    <button @click="$emit('close')">Voltar</button>
    <h2>{{ pokemon.name }}</h2>
    <img :src="pokemon.image" />

    <p><strong>Tipos:</strong> {{ pokemon.types.join(", ") }}</p>

    <div class="stats">
      <div v-for="s in pokemon.stats" :key="s.name">
        {{ s.name }}: {{ s.value }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["pokemon"]
};
</script>

<style>
.details {
  text-align: center;
  margin-top: 20px;
}
.stats {
  margin-top: 10px;
}
</style>
