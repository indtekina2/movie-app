// all the info of API
const api_key = "64070229";
const URL = "https://www.omdbapi.com/?apikey=";

let getData = (movie) => {
  return fetch(`${URL}${api_key}&s=${movie}`);
};

// all the searched reasult would be stored in this variable
let movies = [];

// The function responsible for fetching data
async function getMovie(movieName) {
  try {
    let response = await getData(movieName);
    let result = await response.json();

    let movies = result.Search;
    return movies;
  } catch (err) {
    return [];
  }
}

// making the search btn work
document.getElementById("search").addEventListener("click", () => {
  let inputMovie = document.getElementById("input").value;

  //   remove everything before hand
  document.getElementById("response").innerHTML = "";
  getMovie(inputMovie).then((dataMovies) => {
    movies = dataMovies;
    console.log(movies);
    for (let movie of dataMovies) {
      showMovie(movie, "response");
    }
  });
});

//   This is how the movies look
let movie1 = {
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMzA2NDQzZDEtNDU5Ni00YTlkLTg2OWEtYmQwM2Y1YTBjMjFjXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  Title: "Batman Begins",
  Type: "movie",
  Year: "2005",
  imdbID: "tt0372784",
};
