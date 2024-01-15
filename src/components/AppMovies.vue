<script>
import { store } from '../store.js'
export default {
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
            console.log(output)
            return output + url
        }
    },
}
</script>
<template lang="">
  <div v-for="movie,index in store.moviesList" :key="index">
        <ul>
            <li><img :src="addImg(movie.poster_path)"></li>
            <li>{{movie.title}}</li>
            <li>{{movie.original_title}}</li>
            <li><img :src="flagChanger(movie.original_language)"></li>
            <li>{{movie.vote_average}}</li>
        </ul>
    </div>
</template>
<style lang="">
  
</style>