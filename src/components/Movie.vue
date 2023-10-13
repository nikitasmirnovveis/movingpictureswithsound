<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    movie page
    <img :src='posterPath' alt="" class="hover:opacity-75 transition easy-in-out duration-150 "/>
    <h3>{{movie.title}}</h3>
    <div>
      <div class="flex">
        <img src="@/assets/images/star.png" alt="" class="h-3.5 mr-1 mt-1"/>  50% | 2023-10-13 
      </div>
      <span class="text-sm text-gray-500">Fiction, Anime, Comedy</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

  export default{
    data(){
      return{
        movieList:null
      }
    },
    props: {
      movie:{
        required: true,
      },
    },
    computed:{
      posterPath(){
        // return 'https://image.tmdb.org/t/p/w500/'+this.movie.poster_path
        return "https://www.themoviedb.org/t/p/w500/"+this.movie.poster_path
      }
    },
    async mounted() {
    // const response = await this.$http.get("/movie/popular");
    // console.log(response);
    
    const optionsPopular = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/popular',
      params: {language: 'en-US', page: '1'},
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDFmNWVkZDAzNDUzNjE0ODIwMWVjOWQzZjYzNWFjZiIsInN1YiI6IjY1MjNkNTVlMDcyMTY2NDViOTE5OWQ4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3qrKa3EHaGcZMPktXd0bRvJ3A17uNRkjbABqHzg4Z0I'
      }
    };
    axios
      .request(optionsPopular)
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