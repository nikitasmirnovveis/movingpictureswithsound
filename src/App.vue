<template>
  <div id="app">
    <div class="mx-auto flex justify-between border-b ">
      <Navbar/>
      <Searchbar/>
    </div>
    <router-view/>
    <!-- <Home/>
    <CardItem/> -->
    <!-- <VBody><CardItem/></VBody> -->
  </div>
</template>

<script>
/* eslint-disable */
import Home from './components/Home.vue';
import Navbar from "./components/header/Navbar.vue"
import Searchbar from "./components/header/Searchbar.vue"

import CardItem from './components/CardItem.vue';

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Home,
    Navbar,
    Searchbar,
    // eslint-disable-next-line vue/no-unused-components
    CardItem
  }
}
</script>

<!-- <style>
</style> -->
