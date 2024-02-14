
<template>
  <div class="container ">
   
    
    <!-- <PopularMovies/> -->
    <!-- <TopRatedMovies/> -->
  </div>
</template>

<script>
/* eslint-disable */

import PopularMovies from "./PopularMovies.vue"
import TopRatedMovies from './TopRatedMovies.vue'
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Home',
    components:{
      PopularMovies,
      TopRatedMovies,
    },
    data() {
      return {
      }
    } 
  }


</script>

<style>
</style>
