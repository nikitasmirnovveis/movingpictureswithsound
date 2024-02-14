<!-- eslint-disable no-unused-vars -->
<template>
  <div class="mx-5">
    <h2 class="uppercase text-yellow-500 text-lg font-semibold">Popular Movies</h2>
  

    <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 ">
      <template v-if="$store.state.popularMoviesLoading">
        <img src="../assets/images/loading.gif" alt="">
      </template>
      
      <template v-else>
        <!-- <MovieItem :key='movie.id' v-for="movie in $store.state.popularMovies" :movie="movie"/> -->
        <MovieItem :key='movie.id' v-for="movie in popularMovies" :movie="movie"/>
      <!-- <MovieItem :key='movie.id' v-for="movie in movieList" :movie="movie"/> -->

      </template>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
import { mapState } from 'vuex';

import MovieItem from "./items/MovieItem.vue"
// import optionsPopular from "/services/api.js"

export default{
  data() {
    return {
      // movieList: null,

    }
  },
  components:{
    MovieItem,
  },
  computed:
    mapState([
      'popularMovies'
    ]),
    // popularMovies(){
    //   console.log(this.$store.state.popularMovies)
    //   return this.$store.state.popularMovies
    // }},
  // },

  async mounted() {
    
    this.$store.dispatch('loadPopularMovies'); // Dispatch the action to load popularMovies
//     const optionsPopular = {
//       method: 'GET',
//       url: 'https://api.themoviedb.org/3/movie/popular',
//       params: {language: 'en-US', page: '1'},
//       headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDFmNWVkZDAzNDUzNjE0ODIwMWVjOWQzZjYzNWFjZiIsInN1YiI6IjY1MjNkNTVlMDcyMTY2NDViOTE5OWQ4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3qrKa3EHaGcZMPktXd0bRvJ3A17uNRkjbABqHzg4Z0I'
//       }
//     };
//     axios
//       .request(optionsPopular)
//       .then((response) => {
//         // console.log(response.data.results);
//         this.movieList=response.data.results;
//         // console.log(this.popular);

//       })
//       .catch((error) => {
//         console.error(error);
//       });
  },
}
</script>

<style></style>