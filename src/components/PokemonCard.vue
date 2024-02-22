<template>
  <div class="card">
    <h2>{{ pokemonCardData.name }}</h2>
    <div class="card-content">
      <div>
        <img :src="pokemonCardData.image" alt="Pokemon image" />
      </div>
      <div>
        <div
          class="stat-container"
          v-for="(stat, index) in pokemonCardData.stats"
          :key="index"
        >
          <SvgWrapper :name="stat.name" class="svg-size" />
          <p class="stat-text">
            <span>
              {{ stat.name }}
            </span>
            : {{ stat.value }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePokemon } from '@/composables/usePokemon'

import SvgWrapper from './UI/SvgWrapper.vue'

const { pokemonCardData } = usePokemon()
</script>

<style lang="scss" scoped>
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
      .stat-text {
        span {
          font-weight: 600;
        }
      }
    }
  }
}
</style>
