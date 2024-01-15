<script>
import axios from 'axios'
import SearchMovies from './components/SearchMovies.vue';
import { store } from './store.js'

export default {
  components: {
    SearchMovies,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getMovieList() {
      let apiMovies = store.movies_ep + `?api_key=${store.apiKey}` + `&language=${store.language}`

      if (store.searchMovie != '') {
        apiMovies += `&query=${store.searchMovie}`
      }
      axios.get(apiMovies).then((response) => {
        store.moviesList = response.data.results
      })
    }
  },
  created() {
    this.getMovieList()
  },
}
</script>
<template lang="">
  <div>
    <SearchMovies @finder_movie="getMovieList"/>
  </div>
</template>
<style lang="">
  
</style>
