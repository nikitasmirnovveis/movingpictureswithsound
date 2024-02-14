<template>
  <div>
    <router-link :to="`/movie/${movie.id}`">

      <!-- <template v-if="$store.state.popularMoviesLoading">
        <img src="../../assets/images/loading.gif" alt="">
      </template> -->
      
      <!-- <template v-else> -->
        <!-- <div v-cloak style="width:50px; height:75px"></div> -->

      <!-- <template> -->
        <!-- <img :src='posterPath' alt="" class="hover:opacity-75 transition easy-in-out duration-150  "/> -->
        <div>
          <img :src="bookmark" style="position: absolute;"/>
        <img :src="imageLoading ? '@/assets/images/image_placeholder.jpg' : posterPath" @load="imageLoading = false" />
      </div>
        <!-- </template> -->
        <!-- <MovieItem :key='movie.id' v-for="movie in $store.state.popularMovies" :movie="movie"/> -->
        <!-- <MovieItem :key='movie.id' v-for="movie in movieList" :movie="movie"/> -->
      <!-- </template> -->
      <!-- <img :src='posterPath' alt="" class="hover:opacity-75 transition easy-in-out duration-150 "/> -->
      <h3>{{ movie.title }}</h3>
      <div>
        <div class="flex">
          <img src="@/assets/images/star.png" alt="" class="h-3.5 mr-1 mt-1"/>
          {{ movie.vote_average }} | {{movie.release_date}} 
        </div>
        <span class="text-sm text-gray-500">Fiction, Anime, Comedy</span>
      </div>
    </router-link>
  </div>
</template> 

<script>
  export default{
    data(){
      return {
        imageLoading:null
      }
    },
    watch: {
      'posterPath': function() {
        this.imageLoading = true;
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
      },
      // bookmark(){
      //   if (bookmarked.){
      //     return '@/assets/images/filled_bookmark.png'
      //   } else {
      //     return '@/assets/images/empty_bookmark.png'
      //   }
      // }
    }
  }
</script>

<style>

</style>