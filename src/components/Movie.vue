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
  export default{
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
    }
  }
</script>

<style></style>