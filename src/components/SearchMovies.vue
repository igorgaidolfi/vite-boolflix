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
  requiredValues: [
    'title',
    'original_title',
    'original_language',
    'vote_average',

  ],
  methods: {
    flagChanger(index) {
      // let flag = store.moviesList(index).original_language
      // console.log(flag)
      // this.flag_list.forEach(element => {
      //   if (element.code == flag) {
      //     this.store.moviesList(index).original_language = element.img
      //   }
      //   else {
      //     this.store.moviesList(index).original_language = element.default
      //   }
      // })
      // return this.store.moviesList(index).original_language
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
          <li>{{movie.original_language}}</li>
          <li>{{movie.vote_average}}</li>
      </ul>
    </div>
  </div>
</template>
<style lang="">
  
</style>