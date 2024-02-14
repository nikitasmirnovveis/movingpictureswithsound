<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <!-- <router-link to="/movie/1"> -->
      <img :src='posterPath' alt="" class="hover:opacity-75 transition easy-in-out duration-150 "/>
      <img v-bind:src="'https://www.themoviedb.org/t/p/w500/'+movieObj.poster_path" />
      <h3>{{ movieObj.title }}</h3>
      <div>
        <div class="flex">
          <img src="@/assets/images/star.png" alt="" class="h-3.5 mr-1 mt-1"/>
          {{ movieObj.vote_average }} | {{movieObj.release_date}} 
        </div>
        <span class="text-sm text-gray-500">Fiction, Anime, Comedy</span>
      </div>
    <!-- </router-link> -->
    <!-- <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 ">
      <MovieItem :key='movie.id' v-for="movie in movieObj" :movie="movie"/>
    </div> -->

  </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return{
      movieObj:null
    }
  },
  // props: {
  //   movie:{
  //     required: true,
  //   },
  // },
  // computed:{
  //   posterPath(){
  //     // return 'https://image.tmdb.org/t/p/w500/'+this.movie.poster_path
  //     return "https://www.themoviedb.org/t/p/w1280/"+this.movieObj.poster_path
  //   }
  // },
   async mounted() {
  // const response = await this.$http.get("/movie/popular");
  // console.log(response);
    // this.fetchMovie(this.$route.params.id);

    const getMovie = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${this.$route.params.id}`,

    params: {language: 'en-US', page: '1'},
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDFmNWVkZDAzNDUzNjE0ODIwMWVjOWQzZjYzNWFjZiIsInN1YiI6IjY1MjNkNTVlMDcyMTY2NDViOTE5OWQ4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3qrKa3EHaGcZMPktXd0bRvJ3A17uNRkjbABqHzg4Z0I'
    }
  };
  axios
    .request(getMovie)
    .then((response) => {
      console.log(response.data);
      this.movieObj=response.data;
      // console.log(this.popular);

    })
    .catch((error) => {
      console.error(error);
    });
  }
}

  // methods:{
  //  async fetchMovie(movieId){
  //     const response = await this.$http.get{
  //       '/movie/' + movieId;
  //     }
  //   }
  // }
  

  

</script>

<style></style>