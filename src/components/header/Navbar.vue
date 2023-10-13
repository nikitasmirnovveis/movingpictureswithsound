<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex gap-5 mt-2 ml-2 mb-2">
    <img src="@/assets/images/logo.png" alt="" class="h-10"/>
    <ul class="flex gap-5 mt-1">
      <li>
        <router-link to="/popular">
          Popular
        </router-link>
      </li>
      <li>
        <router-link to="/toprated">
          Top Rated
        </router-link>
      </li>
      <li>
        <router-link to="/profile">
          Profile
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {

    }
</script>

<style>
</style>