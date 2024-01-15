<script>
import { store } from '../store.js'
export default {
  data() {
    return {
      store,
    }
  },
  requiredValues: [
    'title',
    'original_title',
    'original_language',
    'vote_average',

  ],
  getMovie() {

  }
}
</script>
<template lang="">
  <div>
    <input type="text" v-model="store.searchMovie">
    <button @click="$emit('finder_movie')">Search</button>
    <div v-for="movie,index in store.moviesList" :key="index">
      <ul>
          <li>{{movie.title}}</li>
          <li>{{movie.original_title}}</li>
          <li>{{movie.original_language}}</li>
          <li>{{movie.vote_average}}</li>
      </ul>
    </div>
  </div>
</template>
<style lang="">
  
</style>