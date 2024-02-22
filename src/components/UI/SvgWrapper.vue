<template>
  <div>
    <svg class="svg-size">
      <use :href="`${statsIcons}#${name}`" />
    </svg>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import statsIcons from '@/assets/icons/stats-sprite.svg'

defineProps({
  name: String,
})
</script>

<style lang="scss" scoped></style>
