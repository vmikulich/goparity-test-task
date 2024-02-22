import { computed, reactive } from 'vue'
import { fetchPokemonById } from '@/services/pokemon'

const state = reactive({
  pokemone: null,
})

export function usePokemon() {
  const pokemon = computed(() => state.pokemone)

  const fetchRandomPokemon = async () => {
    const pokemonId = Math.floor(Math.random() * 898) + 1
    const pokemon = await fetchPokemonById(pokemonId)
    state.pokemone = pokemon
  }

  return { pokemon, fetchRandomPokemon }
}
