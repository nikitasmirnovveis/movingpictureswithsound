<template>
  <div id="app">
    <router-view/>
    <!-- <Home/>
    <CardItem/> -->
    <!-- <VBody><CardItem/></VBody> -->
  </div>
</template>

<script>
import Home from './components/Home.vue';
import CardItem from './components/CardItem.vue';

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Home,
    // eslint-disable-next-line vue/no-unused-components
    CardItem
  }
}
</script>

<!-- <style>
</style> -->
