import api from '@/api'

export const fetchPokemonById = (id) => {
  const url = `/pokemon/${id}`
  return api
    .Get({ url })
    .then((res) => Promise.resolve(res.data))
    .catch((e) => Promise.reject(e))
}

export default {
  fetchPokemonById,
}
