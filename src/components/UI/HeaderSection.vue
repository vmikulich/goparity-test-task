<template>
  <header>
    <h1>Pokemon</h1>
    <SpinerLoader v-if="loading" />
    <button v-else @click="fetchPokemon">Display random pokemon</button>
  </header>
</template>

<script setup>
import { ref } from 'vue'

import { usePokemon } from '@/composables/usePokemon'
import { useToast } from '@/composables/useToast'

import SpinerLoader from './SpinerLoader.vue'

const loading = ref(false)
const { fetchRandomPokemon } = usePokemon()
const { errorToast } = useToast()

const fetchPokemon = async () => {
  try {
    loading.value = true
    await fetchRandomPokemon()
  } catch (error) {
    errorToast(error.message)
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
    border: 2px solid rgb(53, 254, 187);
    box-shadow: 0 0 5px -1px rgb(1, 43, 29);
    border-radius: 6px;
    padding: 5px 8px;
    font-size: 15px;
    background-color: rgb(53, 254, 187);
    transition: all 0.3s;
    &:hover {
      background-color: rgb(50, 245, 180);
      border: 2px solid rgb(50, 245, 180);
    }
  }
}
</style>
