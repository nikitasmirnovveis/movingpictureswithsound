<template>
  <div class='Home'>
    <h1> {{ text }} </h1>
    <!-- <h1> css  </h1> -->


  </div>
</template>

<script>
 export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  data() {
    return {
      text: 'Home'
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
