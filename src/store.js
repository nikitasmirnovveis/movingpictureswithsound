import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const popularMovies = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/popular',
  params: {language: 'en-US', page: '1'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDFmNWVkZDAzNDUzNjE0ODIwMWVjOWQzZjYzNWFjZiIsInN1YiI6IjY1MjNkNTVlMDcyMTY2NDViOTE5OWQ4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3qrKa3EHaGcZMPktXd0bRvJ3A17uNRkjbABqHzg4Z0I'
  }
};
// const moviePoster = {
//   method: 'GET',
//   url: 'https://api.themoviedb.org/3/movie/popular',
//   params: {language: 'en-US', page: '1'},
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDFmNWVkZDAzNDUzNjE0ODIwMWVjOWQzZjYzNWFjZiIsInN1YiI6IjY1MjNkNTVlMDcyMTY2NDViOTE5OWQ4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3qrKa3EHaGcZMPktXd0bRvJ3A17uNRkjbABqHzg4Z0I'
//   }
// };

export const store = new Vuex.Store({
  state: {
    popularMovies:null,
    popularMoviesLoading: false,
    status: {
      popularMovies: {
        loading: false,
        error: false,
      }
    }
  },
  mutations:{
    SAVE_popularMovies(state, popularMovies) {
      state.popularMovies = popularMovies;
    },
    SAVE_LOADING(state, status) {
      // create a property in status
      //state.status[dataName].loading = status;
      state.popularMoviesLoading = status
    
    },
    SAVE_ERROR(state, dataName, status) {
      // create a property in status
      state.status[dataName].error = status;
    },
    // fetch_popMovies(state, popularMovies ) {
    //   state.status.popularMovies=axios.request(popularMovies).then(result => result.data.results)

    // }
  },
  actions: {
    loadPopularMovies({commit}) { 
      commit('SAVE_LOADING', true);
      // Vue.axios.get('popularMovies').then(result => {
      //   commit('SAVE_popularMovies', result.data);
      //   commit('SAVE_STATUS', 'popularMovies', false);


      // axios.get('https://api.themoviedb.org/3/movie/popular', {
      //   params: {language: 'en-US', page: '1'},
      //   headers: {
      //     accept: 'application/json',
      //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDFmNWVkZDAzNDUzNjE0ODIwMWVjOWQzZjYzNWFjZiIsInN1YiI6IjY1MjNkNTVlMDcyMTY2NDViOTE5OWQ4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3qrKa3EHaGcZMPktXd0bRvJ3A17uNRkjbABqHzg4Z0I'
      //   }
      // })
      // const popularMovies = {
      //   method: 'GET',
      //   url: 'https://api.themoviedb.org/3/movie/popular',
      //   params: {language: 'en-US', page: '1'},
      //   headers: {
      //     accept: 'application/json',
      //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDFmNWVkZDAzNDUzNjE0ODIwMWVjOWQzZjYzNWFjZiIsInN1YiI6IjY1MjNkNTVlMDcyMTY2NDViOTE5OWQ4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3qrKa3EHaGcZMPktXd0bRvJ3A17uNRkjbABqHzg4Z0I'
      //   }
      // };
      axios
        .request(popularMovies)
        .then(result => {
          commit('SAVE_popularMovies', result.data.results);
          console.log(result.data.results)
          commit('SAVE_LOADING', false);
          // this.$store.state.popularMovies=result.data.results;


        }).catch(error => {
          commit('SAVE_ERROR', 'popularMovies', true);
          commit('SAVE_LOADING', false);
          throw new Error(`API ${error}`);
        });
    },
    // loadMoviePoster({commit}) { 
    //   commit('SAVE_LOADING', true);
    //   axios
    //     .request(popularMovies)
    //     .then(result => {
    //       commit('SAVE_popularMovies', result.data.results.poster_path);
    //       console.log(result.data.results)
    //       commit('SAVE_LOADING', false);
    //       // this.$store.state.popularMovies=result.data.results;


    //     }).catch(error => {
    //       commit('SAVE_ERROR', 'popularMovies', true);
    //       commit('SAVE_LOADING', false);
    //       throw new Error(`API ${error}`);
    //     });
    // }
  },
  // async mounted() {
  //   // const response = await this.$http.get("/movie/popular");
  //   // console.log(response);
    
  //   const optionsPopular = {
  //     method: 'GET',
  //     url: 'https://api.themoviedb.org/3/movie/popular',
  //     params: {language: 'en-US', page: '1'},
  //     headers: {
  //       accept: 'application/json',
  //       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDFmNWVkZDAzNDUzNjE0ODIwMWVjOWQzZjYzNWFjZiIsInN1YiI6IjY1MjNkNTVlMDcyMTY2NDViOTE5OWQ4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3qrKa3EHaGcZMPktXd0bRvJ3A17uNRkjbABqHzg4Z0I'
  //     }
  //   };
  //   axios
  //     .request(optionsPopular)
  //     .then((response) => {
  //       console.log(response.data.results);
  //       this.movieList=response.data.results;
  //       // console.log(this.popular);

  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // },
});