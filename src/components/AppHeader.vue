<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
        }
    },
}
</script>
<template lang="">
  <header>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="header_container d-flex align-items-center justify-content-between">
                    <h1 class="align-middle">boolflix</h1>
                    <div>
                        <input type="text" v-model="store.searchMovie">
                        <button @click="$emit('finder_movie')">Search</button>    
                    </div>
                </div>
            </div>
        </div>
    </div>
  </header>
</template>
<style lang="scss">
@use '../styles/partials/variables' as*;

header {
    background-color: #000;

    h1 {
        color: $red_;
        text-transform: $upper_;
        margin: 0;
    }

    .header_container {
        margin: 20px;
    }
}
</style>
