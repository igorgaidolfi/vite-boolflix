<script>
import { store } from '../store';
import MovieCard from './MovieCard.vue';
export default {
    components: {
        MovieCard,
    },
    data() {
        return {
            store,
        }
    },
}
</script>
<template lang="">
  <main>
      <div class="container-fluid">
          <div class="row">
            <h2>Film</h2>
            <MovieCard v-for="movie,index in store.moviesList" :key="index" :movie="movie"/>
        </div>
    </div>
  </main>
  <div>
    
  </div>
</template>
<style lang="scss">
main {
    background-color: rgba(0, 0, 0, 0.555);
}
</style>
