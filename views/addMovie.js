
var addMovie = document.querySelector(".add-movie-modal");

document.querySelector(".add-movie-modal").addEventListener("click", function (event) {
    if (event.target == addMovie) {
        addMovie.style.display = "none";
    }
})


var addNewMovieBtn = document.querySelector('.submit-new-movie-btn');
addNewMovieBtn.addEventListener("click", addMovie);

function addMovie(event) {

    var addNewMovieBtn = event.target;
    addNewMovieBtn.setAttribute("disabled", "disabled");
    
    var parentElement = event.target.parentElement;
    var movieId = parentElement.id;
    
    var addButton = event.target;
    addButton.setAttribute("disabled", "disabled");

    var movieTitle = document.getElementById('movieTitle');
    var movieDate = document.getElementById('movieDate');
    var movieRuntime = document.getElementById('movieRuntime');
    var movieDirector = document.getElementById('movieDirector');
    var movieWriter = document.getElementById('movieWriter');
    var movieActors = document.getElementById('movieActors');
    var movieType = document.getElementById('movieType');
    var movieCountry = document.getElementById('movieCountry');
    var movieLanguage = document.getElementById('movieLanguage');
    var movieGenre = document.getElementById('movieGenre');

    addButton.addEventListener("click", function(clickSaveEvent) {
      var newMovieTitle = movieTitle.value;
      console.log(newMovieTitle);
      var newMovieDate = movieDate.value;
      var newMovieRuntime = movieRuntime.value;
      var newMovieDirector = movieDirector.value;
      var newMovieWriter = movieWriter.value;
      var newMovieActors = movieActors.value;
      var newMovieType = movieType.value;
      var newMovieCountry = movieCountry.value;
      var newMovieLanguage = movieLanguage.value;
      var newMovieGenre = movieGenre.value;
  
      addMovie(
        movieId,
        newMovieTitle,
        newMovieDate,
        newMovieRuntime,
        newMovieDirector,
        newMovieWriter,
        newMovieActors,
        newMovieType,
        newMovieCountry,
        newMovieLanguage,
        newMovieGenre
      ).then(function(data) {
        console.log("added", data);
      });
    });
  }