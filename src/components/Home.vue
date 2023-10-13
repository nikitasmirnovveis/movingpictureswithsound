
<template>
  <div class="container ">
   
    
    <PopularMovies/>
  </div>
</template>

<script>
/* eslint-disable */


import PopularMovies from "./PopularMovies.vue"
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Home',
    components:{
      
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
