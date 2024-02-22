import axios from 'axios'

export const fetchPokemonById = (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  return axios
    .get(url)
    .then((res) => Promise.resolve(res.data))
    .catch((e) => Promise.reject(e))
}

export default {
  fetchPokemonById,
}
