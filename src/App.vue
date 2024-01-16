<script>
import axios from 'axios'
import SearchMovies from './components/SearchMovies.vue';
import AppMovies from './components/AppMovies.vue';
import AppSeries from './components/AppSeries.vue';
import AppHeader from './components/AppHeader.vue';
import { store } from './store.js'

export default {
  components: {
    SearchMovies,
    AppMovies,
    AppSeries,
    AppHeader
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getMovieList() {
      let apiMovies = store.movies_ep + `?api_key=${store.apiKey}` + `&language=${store.language}`
      let apiSeries = store.series_ep + `?api_key=${store.apiKey}` + `&language=${store.language}`

      if (store.searchMovie != '') {
        apiMovies += `&query=${store.searchMovie}`
        apiSeries += `&query=${store.searchMovie}`
      }
      axios.get(apiMovies).then((response) => {
        store.moviesList = response.data.results
      })
      axios.get(apiSeries).then((response) => {
        store.seriesList = response.data.results
      })
    },
  },
  created() {
    this.getMovieList()
  },
}
</script>
<template lang="">
  <div>
    <AppHeader @finder_movie="getMovieList"/>
    <SearchMovies/>
    <h2>Film</h2>
    <AppMovies/>
    <h2>Series</h2>
    <AppSeries/>
  </div>
</template>
<style lang="scss">
@use './styles/generals.scss';
</style>