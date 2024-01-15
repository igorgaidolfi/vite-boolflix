<script>
import { store } from '../store.js'
export default {
  data() {
    return {
      store,
    }
  },
  flag_list: [
    {
      code: 'it',
      img: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/',
    },
    {
      code: 'en',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/',
    },
    {
      code: 'es',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/',
    },
    {
      default: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Earth_Day_Flag.png/',
    },
  ],
  methods: {
    flagChanger(flag) {
      console.log(flag)
      flag_list.forEach((element) => {
        if (element.code == flag) {
          flag = element.img
        }
        else {
          flag = element.default
        }
      })
      return flag
    }
  },

}
</script>
<template lang="">
  <div>
    <button @click="$emit('finder_movie')">Search</button>
    <div v-for="movie,index in store.moviesList" :key="index">
      <ul>
          <li>{{movie.title}}</li>
          <li>{{movie.original_title}}</li>
          <li>{{flagChanger(movie.original_language)}}</li>
          <li>{{movie.vote_average}}</li>
      </ul>
    </div>
  </div>
</template>
<style lang="">
  
</style>