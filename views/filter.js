

var genreChecboxes = document.querySelectorAll("input[name=genre]");

genreChecboxes.forEach(function(input){
  input.addEventListener( 'change', function() {
    refreshMovieList(true);
  });
});
/*
genreChecboxes.addEventListener( 'change', function() {
    if(this.checked) {
      movie.getAll().then(function (data){
      var movies=data.results;
      console.log (movies);
      var actionMovies = movies.filter(movie => movie.Genre == "Action");
      console.log(actionMovies);
      displayMoviesListHtml(actionMovies);
      });

    }
});
*/
