<template>
  <PokemonDetails />
</template>

<script>
import PokemonDetails from './components/PokemonDetails.vue'

export default {
  name: 'App',
  components: {
    PokemonDetails,
  },
}
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
