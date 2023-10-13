
<template>
  <div class="container ">
    <div class="mx-auto flex justify-between border-b ">
      <Navbar/>
      <Searchbar/>
    </div>
    
    <PopularMovies/>
  </div>
</template>

<script>
/* eslint-disable */

import Navbar from "./header/Navbar.vue"
import Searchbar from "./header/Searchbar.vue"
import PopularMovies from "./PopularMovies.vue"
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Home',
    components:{
      Navbar,
      Searchbar,
      PopularMovies,
    },
    data() {
      return {
        
      }
    } 
  }


</script>

<style>
  /* @import "./main.scss" */
  /* body {
    background: gray;
  }
  .app {
    background: gray;
  }
  h1 {
    font-size: xx-large;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  } */
</style>
