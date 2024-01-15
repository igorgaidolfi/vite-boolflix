<script>
import { store } from '../store.js'
export default {
    data() {
        return {
            store,
        }
    }
}
</script>
<template lang="">
  <div>
    <div v-for="tv,index in store.seriesList" :key="index">
        <ul>
            <li>{{tv.name}}</li>
            <li>{{tv.original_name}}</li>
            <li>{{tv.original_language}}</li>
            <li>{{tv.vote_average}}</li>
        </ul>
    </div>
  </div>
</template>
<style lang="">
  
</style>