import { computed, reactive } from 'vue'

import { fetchPokemonById } from '@/services/pokemon'

import { generateId } from '@/utils/pokemonIdGenerator'
import pokemonCardDataFormatter from '@/formatters/pokemonCardDataFormatter'

const state = reactive({
  pokemon: null,
})

export function usePokemon() {
  const pokemon = computed(() => state.pokemon)
  const pokemonCardData = computed(() => pokemonCardDataFormatter(pokemon))

  const fetchRandomPokemon = async () => {
    state.pokemon = null
    try {
      const pokemonId = generateId()
      state.pokemon = await fetchPokemonById(pokemonId)
    } catch (error) {
      throw new Error('Opps... Something went wrong')
    }
  }

  return { pokemon, fetchRandomPokemon, pokemonCardData }
}
