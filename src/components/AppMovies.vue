<script>
import { store } from '../store.js'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'
library.add(fasStar, farStar)
export default {
    components: {
        library,
        FontAwesomeIcon,
    },
    data() {
        return {
            store,
            flag_list: [
                {
                    code: 'it',
                    img: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/50px-Flag_of_Italy.svg.png',
                },
                {
                    code: 'en',
                    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_(1-2).svg/50px-Flag_of_the_United_Kingdom_(1-2).svg.png',
                },
                {
                    code: 'es',
                    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/50px-Bandera_de_Espa%C3%B1a.svg.png',
                },
            ],
        }
    },
    methods: {
        flagChanger(flag) {
            let output = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Earth_Day_Flag.png/50px-Earth_Day_Flag.png'
            this.flag_list.forEach((element) => {
                if (element.code == flag) {
                    output = element.img
                }
            })
            return output
        },
        addImg(url) {
            let output = store.images_ep
            return output + url
        },
        starRatings(vote) {
            let stars = vote / 2
            return Math.ceil(stars)
        },

    },
}
</script>
<template lang="">
  <div v-for="movie,index in store.moviesList" :key="index">
        <ul>
            <li><img :src="addImg(movie.poster_path)"></li>
            <li>{{movie.title}}</li>
            <li>{{movie.original_title}}</li>
            <li><img :src="flagChanger(movie.original_language)" :alt="{{movie.title}}"></li>
            <li>
                <i v-for="star in starRatings(movie.vote_average)"><font-awesome-icon icon="fa-solid fa-star" /></i>
                <i v-for="star in 5 - starRatings(movie.vote_average)"><font-awesome-icon icon="fa-regular fa-star" /></i>
            </li>
            
        </ul>
    </div>
</template>
<style lang="">
  
</style>