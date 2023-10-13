<!-- eslint-disable no-unused-vars -->
<template>
  <div class="mx-5">
    <h2 class="uppercase text-yellow-500 text-lg font-semibold">Popular Movies</h2>
  

    <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 ">
      <MovieItem/>
      <MovieItem/>
      <MovieItem/>
      <MovieItem/>
      <MovieItem/>
    </div>
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