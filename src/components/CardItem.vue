<template>
    <div class='card'>
      <h1> {{ movie_title }} </h1>
      <!-- <h1> {{ popular }} </h1> -->
      <!-- <p v-bind:key="results in popular"></p> -->
      <!-- <p>{{ popular.results }}</p> -->
      
      <div id="CardItem"></div>
    </div>
  </template>
  
<script>
  // var popular;
import axios from 'axios';
  export default {
  name: 'CardItem',
  data() {
    return {
      movie_title: 'theMovie',
      popular: null,

    }
  },
  mounted() {

    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/popular',
      params: {language: 'en-US', page: '1'},
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDFmNWVkZDAzNDUzNjE0ODIwMWVjOWQzZjYzNWFjZiIsInN1YiI6IjY1MjNkNTVlMDcyMTY2NDViOTE5OWQ4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3qrKa3EHaGcZMPktXd0bRvJ3A17uNRkjbABqHzg4Z0I'
      }
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        this.popular=response.data;
        // console.log(this.popular);

      })
      .catch((error) => {
        console.error(error);
      });
//     // Move the API request and element creation logic here
//     const options = {
//       method: 'GET',
//       headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDFmNWVkZDAzNDUzNjE0ODIwMWVjOWQzZjYzNWFjZiIsInN1YiI6IjY1MjNkNTVlMDcyMTY2NDViOTE5OWQ4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3qrKa3EHaGcZMPktXd0bRvJ3A17uNRkjbABqHzg4Z0I'
//       }
//     };

//     fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
//       .then(response => response.json())
//       .then(data => {
//         // this.popular=data;
//         console.log(data);

//         // Now you can create and manipulate DOM elements
//         const cardItem = document.getElementById('CardItem');
//         const divElement = document.createElement('div');
//         cardItem.appendChild(divElement);
//         // divElement.textContent=popular.results[0].original_title;
//       })
//       .catch(err => console.error(err));
    },
  }
</script> 
  

<!-- //   const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDFmNWVkZDAzNDUzNjE0ODIwMWVjOWQzZjYzNWFjZiIsInN1YiI6IjY1MjNkNTVlMDcyMTY2NDViOTE5OWQ4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3qrKa3EHaGcZMPktXd0bRvJ3A17uNRkjbABqHzg4Z0I'
//     }
//   };

//   fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));
  
//   document.getElementById('CardItem').appendChild(document.createElement('div')); -->
<!-- // </script> -->

<style></style>
