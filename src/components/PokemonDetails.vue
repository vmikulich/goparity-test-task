<template>
  <HeaderSection />
  <div class="card-container">
    <div v-if="pokemon" class="card">
      <h2>{{ pokemonDataToDisplay.name }}</h2>
      <div class="card-content">
        <div>
          <img :src="pokemonDataToDisplay.image" alt="Pokemon image" />
        </div>
        <div>
          <div
            class="stat-container"
            v-for="(stat, index) in pokemonDataToDisplay.stats"
            :key="index"
          >
            <svg class="svg-size">
              <use :href="`${statsIcons}#${stat.name}`" />
            </svg>
            <p>
              <span>
                {{ stat.name }}
              </span>
              : {{ stat.value }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="loader-wrapper">
      <SpinerLoader />
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeMount } from 'vue'

import { usePokemon } from '@/composables/usePokemon'

import HeaderSection from './UI/HeaderSection.vue'
import SpinerLoader from '@/components/UI/SpinerLoader.vue'

import statsIcons from '@/assets/icons/stats-sprite.svg'

const { fetchRandomPokemon, pokemon } = usePokemon()

const pokemonDataToDisplay = computed(() => {
  const { name, sprites, stats } = pokemon.value
  const data = {
    name,
    image: sprites.front_default,
    stats: formatStats(stats),
  }
  return data
})

const formatStats = (stats) => {
  return stats.map((item) => ({
    name: item?.stat?.name,
    value: item?.base_stat,
  }))
}

onBeforeMount(async () => {
  try {
    await fetchRandomPokemon()
  } catch (error) {
    alert(error)
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
  .card {
    border-radius: 10px;
    box-shadow: 0 0 30px 0 aquamarine;
    border: 1px solid rgba(127, 255, 212, 0.5);
    background-color: white;
    padding: 30px;
    h2 {
      margin: 0 0 15px 0;
      text-transform: capitalize;
    }
    .card-content {
      display: flex;
      gap: 40px;
      text-transform: capitalize;
      img {
        width: 120px;
        height: 120px;
        border: 1px solid rgba(11, 157, 108, 0.5);
        border-radius: 40px;
      }
      .stat-container {
        display: flex;
        align-items: center;
        .svg-size {
          width: 24px;
          height: 24px;
          margin-right: 6px;
        }
      }
    }
  }
  .loader-wrapper {
    background-color: aquamarine;
    padding: 8px;
    line-height: 0;
    border-radius: 50%;
  }
}
</style>
