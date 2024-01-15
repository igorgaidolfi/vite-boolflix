<script>
import { store } from '../store.js'
export default {
  data() {
    return {
      store,
    }
  },
}
</script>
<template lang="">
  <div>
    <!-- APPSEARCH  -->
    <input type="text" v-model="store.searchMovie">
    <button @click="$emit('finder_movie')">Search</button>    
  </div>
</template>
<style lang="scss"></style>