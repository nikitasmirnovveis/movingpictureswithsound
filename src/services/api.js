// eslint-disable-next-line no-unused-vars
import axios from 'axios';

export const optionsPopular = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/popular',
  params: {language: 'en-US', page: '1'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDFmNWVkZDAzNDUzNjE0ODIwMWVjOWQzZjYzNWFjZiIsInN1YiI6IjY1MjNkNTVlMDcyMTY2NDViOTE5OWQ4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3qrKa3EHaGcZMPktXd0bRvJ3A17uNRkjbABqHzg4Z0I'
  }
};

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });