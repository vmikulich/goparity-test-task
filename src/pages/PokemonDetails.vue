<template>
  <div class="card-container">
    <PokemonCard v-if="pokemonCardData" :pokemon="pokemonCardData" />
    <div v-else class="loader-wrapper">
      <SpinerLoader />
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount } from 'vue'

import { useToast } from '@/composables/useToast'
import { usePokemon } from '@/composables/usePokemon'

import PokemonCard from '@/components/PokemonCard.vue'
import SpinerLoader from '@/components/UI/SpinerLoader.vue'

const { fetchRandomPokemon, pokemonCardData } = usePokemon()
const { errorToast } = useToast()

onBeforeMount(async () => {
  try {
    await fetchRandomPokemon()
  } catch (error) {
    errorToast(error.message)
  }
})
</script>

<style lang="scss">
.card-container {
  width: 100%;
  height: calc(100vh - 88px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: azure;
  .loader-wrapper {
    background-color: aquamarine;
    padding: 8px;
    line-height: 0;
    border-radius: 50%;
  }
}
</style>
