import { createRouter, createWebHistory } from 'vue-router'

import PokemonDetails from '@/pages/PokemonDetails.vue'

const routes = [{ path: '/', component: PokemonDetails }]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
