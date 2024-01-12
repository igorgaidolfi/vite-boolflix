<script>
import { store } from '../store.js'
export default {
  data() {
    return {
      store,
    }
  },

  getMovie() {

  }
}
</script>
<template lang="">
  <div>
    <input type="text" v-model="store.searchMovie">
    <button @click="$emit('finder_movie')">Search</button>
    <ul v-for="movie,index in store.movieList" :key="index">
        <li>{{movie.title}}</li>
    </ul>
  </div>
</template>
<style lang="">
  
</style>