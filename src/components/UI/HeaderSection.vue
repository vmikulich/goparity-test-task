<template>
  <header>
    <h1>Pokemon</h1>
    <SpinerLoader v-if="loading" />
    <button v-else @click="fetchPokemon">Display random pokemon</button>
  </header>
</template>

<script setup>
import { usePokemon } from '@/composables/usePokemon'
import { ref } from 'vue'

import SpinerLoader from './SpinerLoader.vue'

const loading = ref(false)
const { fetchRandomPokemon, pokemon } = usePokemon()

const fetchPokemon = async () => {
  try {
    loading.value = true
    await fetchRandomPokemon()
    console.log(pokemon.value)
  } catch (error) {
    alert(error)
  } finally {
    loading.value = false
  }
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  height: 48px;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  background-color: aquamarine;
  h1 {
    margin: 0;
  }
  button {
    cursor: pointer;
    border: 2px solid rgb(4, 206, 4);
    border-radius: 6px;
    padding: 5px 8px;
    font-size: 15px;
    background-color: rgb(173, 243, 173);
    transition: all 0.3s;
    &:hover {
      background-color: azure;
    }
  }
}
</style>
