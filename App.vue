<template>
  <div>
    <h1>Pokédex</h1>

    <input
      v-model="search"
      placeholder="Buscar Pokémon"
      @keyup.enter="searchPokemon"
    />
    <button @click="searchPokemon">Buscar</button>

    <PokemonDetails
      v-if="selectedPokemon"
      :pokemon="selectedPokemon"
      @close="selectedPokemon = null"
    />

    <PokemonList
      :pokemons="pokemons"
      @select="openDetails"
      v-if="!selectedPokemon"
    />

    <button v-if="!selectedPokemon" @click="loadMore">
      Carregar mais
    </button>
  </div>
</template>

<script>
import { PokeService } from "./services/PokeService.js";
import PokemonList from "./components/molecules/PokemonList.vue";
import PokemonDetails from "./components/organisms/PokemonDetails.vue";

export default {
  components: { PokemonList, PokemonDetails },

  data() {
    return {
      pokemons: [],
      offset: 0,
      search: "",
      selectedPokemon: null
    };
  },

  async created() {
    this.loadMore();
  },

  methods: {
    async loadMore() {
      const data = await PokeService.getAll(20, this.offset);
      this.pokemons.push(...data);
      this.offset += 20;
    },

    async searchPokemon() {
      if (!this.search.trim()) return;

      const result = await PokeService.getByName(this.search);

      if (result) {
        this.pokemons = [result];
        this.offset = 0;
      } else {
        this.pokemons = [];
      }

      this.selectedPokemon = null;
    },

    openDetails(pokemon) {
      this.selectedPokemon = pokemon;
    }
  }
};
</script>

<style>
body {
  font-family: Arial;
}
</style>
