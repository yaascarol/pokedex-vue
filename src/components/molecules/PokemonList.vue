<template>
  <div class="list">
    <PokemonCard
      v-for="p in pokemons"
      :key="p.name"
      :pokemon="p"
      @select="$emit('select', p)"
    />
  </div>
</template>

<script>
import PokemonCard from "../atoms/PokemonCard.vue";

export default {
  components: { PokemonCard },
  props: ["pokemons"]
};
</script>

<style>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
