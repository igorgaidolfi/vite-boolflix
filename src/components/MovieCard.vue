<script>
import { store } from '../store.js'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'
library.add(fasStar, farStar)
export default {
    props: {
        movie: Object
    },
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
<div class="col-12 col-md-6 col-lg-4">
    <div class="media_container d-flex justify-content-center">
        <div class="card_ my-3">
            <div class="card_inner">
                <div class="card_front">
                    <img :src="addImg(movie.poster_path)" :alt="movie.title">
                </div>
                <div class="card_back">
                    <h5 >{{movie.title}}</h5>
                    <p >{{movie.original_title}}</p>
                    <img class="my-2" :src="flagChanger(movie.original_language)" :alt="movie.title">
                    <div>
                        <i v-for="star in starRatings(movie.vote_average)"><font-awesome-icon icon="fa-solid fa-star" /></i>
                        <i v-for="star in 5 - starRatings(movie.vote_average)"><font-awesome-icon icon="fa-regular fa-star" /></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<style lang="scss">
.media-container {
    width: 100%;
}

.card_ {
    background-color: transparent;
    width: 342px;
    height: 500px;
    perspective: 1000px;
}

.card_:hover .card_inner {
    transform: rotateY(180deg);
}

.card_inner {
    position: relative;
    width: 342px;
    height: 500px;
    transition: transform 0.6s;
    text-align: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transform-style: preserve-3d;
    backface-visibility: hidden;

}

.card_front,
.card_back {
    position: absolute;
    width: 342px;
    height: 500px;
}

.card_front {
    color: white;
}

.card_back {
    padding-top: 10px;
    background-color: black;
    color: white;
    transform: rotateY(180deg);
    backface-visibility: hidden;
}
</style>