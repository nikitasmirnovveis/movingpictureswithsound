<!-- eslint-disable no-unused-vars -->
<template>
  <div class="mx-5">
    <h2 class="uppercase text-yellow-500 text-lg font-semibold">Top Rated Movies</h2>
  

    <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 ">
      <MovieItem :key='movie.id' v-for="movie in movieList" :movie="movie"/>
      
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';

import MovieItem from "./items/MovieItem.vue"
// import optionsPopular from "/services/api.js"

export default{
  data() {
    return {
      movieList: null,

    }
  },
  components:{
    MovieItem,
  },
  async mounted() {
    // const response = await this.$http.get("/movie/popular");
    // console.log(response);
    
    const optionsTopRated = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/top_rated',
      params: {language: 'en-US', page: '1'},
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDFmNWVkZDAzNDUzNjE0ODIwMWVjOWQzZjYzNWFjZiIsInN1YiI6IjY1MjNkNTVlMDcyMTY2NDViOTE5OWQ4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3qrKa3EHaGcZMPktXd0bRvJ3A17uNRkjbABqHzg4Z0I'
      }
    };
    axios
      .request(optionsTopRated)
      .then((response) => {
        console.log(response.data.results);
        this.movieList=response.data.results;
        // console.log(this.popular);

      })
      .catch((error) => {
        console.error(error);
      });
  },
}
</script>

<style></style>