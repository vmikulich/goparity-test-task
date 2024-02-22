export default (pokemon) => {
  const { name, sprites, stats } = pokemon.value
  const data = {
    name,
    image: sprites.front_default,
    stats: formatStats(stats),
  }
  return data
}

const formatStats = (stats) => {
  return stats.map((item) => ({
    name: item?.stat?.name,
    value: item?.base_stat,
  }))
}
