<!-- eslint-disable no-unused-vars -->
<template>
  <div>
    <h2 class="uppercase text-yellow-500 text-lg font-semibold">Popular Movies</h2>
  
    <MovieItem/>
  </div>
</template>

<script>
/* eslint-disable */
import MovieItem from "./items/MovieItem.vue"

  export default{
    components:{
      MovieItem,
    }
  }
</script>

<style></style>