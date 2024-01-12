import { reactive } from "vue";
export const store = reactive({
    apiKey: '78a5b35054cf82da340c9e685feabdfc',
    movies_ep: 'https://api.themoviedb.org/3/search/movie',
    series_ep: 'https://api.themoviedb.org/3/search/tv',
    moviesList: [],
    searchMovie: '',
})