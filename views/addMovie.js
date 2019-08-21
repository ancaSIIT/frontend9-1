//Problems:
//1. The submit button adds movies even though the fields are empty

//3. Once you submit a movie you cannot add another movie, only if you reload the page
//4. The following inputs are not working : image, type, genre, description, release date
//5. The grey background on the modal does not applied (Line 1 addMovie.css)


var addButton = document.querySelector('#add-movie');
addButton.addEventListener("click", function () {
  document.querySelector('.add-movie-modal').style.display='block';
  addButton.setAttribute("disabled", "disabled");
  populateModalFields();
})

var newMovieModal = document.querySelector('.add-movie-modal');
//close the modal if the "cancel" button is clicked
var cancelNewMovieBtn = document.querySelector(".cancel-new-movie-btn");
cancelNewMovieBtn.onclick = function () {
  newMovieModal.style.display = "none";
}

// var addMovie = document.querySelector(".add-movie-modal");

document.querySelector(".add-movie-modal").addEventListener("click", function (event) {
    if (event.target == newMovieModal) {
      newMovieModal.style.display = "none";
    }
})

// Shouldn't addMovie be a prototype of Movie instead of Auth? no idea..

function populateModalFields() {
    // get the input from html
    var movieImage = document.getElementById('fileupload')
    var movieTitle = document.getElementById('movieTitle');
    var movieDate = document.getElementById('movieDate');
    var movieRuntime = document.getElementById('movieRuntime');
    var movieDirector = document.getElementById('movieDirector');
    var movieWriter = document.getElementById('movieWriter');
    var movieAwards = document.getElementById('movieAwards');
    var movieActors = document.getElementById('movieActors');

    //We probably need a function here to get the values from radio buttons
    var movieType = document.querySelector('.movieType');

    var movieCountry = document.getElementById('movieCountry');
    var movieLanguage = document.getElementById('movieLanguage');
    var movieRated = document.getElementById('movieRated');
    var movieDescription = document.getElementById('movieDescription');

    // We probably need a helper function to get the value here
    var movieGenre = function selectGenre(movieGenreSelect) {
      movieGenre = select.options[select.selectedIndex].value;
      console.log("Genre added");
    }

// Then we can make the API request to send information through
    var addNewMovieBtn = document.querySelector('.submit-new-movie-btn');
    addNewMovieBtn.addEventListener("click", function(event) {
      event.preventDefault();

      //Get the values from inputs
      // We should probably give these values in the payload for the API function
      var newMovieImage = movieImage.value;
      var newMovieTitle = movieTitle.value;
      var newMovieDate = movieDate.value;
      var newMovieRuntime = movieRuntime.value;
      var newMovieDirector = movieDirector.value;
      var newMovieWriter = movieWriter.value;
      var newMovieAwards = movieAwards.value;
      var newMovieActors = movieActors.value;
      var newMovieType = movieType.value;
      var newMovieCountry = movieCountry.value;
      var newMovieLanguage = movieLanguage.value;
      var newMovieGenre = movieGenre.value;
      var newMovieRated = movieRated.value;
      var newMovieDescription = movieDescription.value;

      var newMovieModel = new Movie();
      newMovieModel.addMovieFromAPI(
        newMovieTitle,
        newMovieImage,
        newMovieDate,
        newMovieRuntime,
        newMovieDirector,
        newMovieWriter,
        newMovieAwards,
        newMovieActors,
        newMovieType,
        newMovieCountry,
        newMovieLanguage,
        newMovieGenre,
        newMovieRated,
        newMovieDescription
      ).then(function(data) {
        console.log("Added", data);
        document.querySelector('.add-movie-modal').style.display='none';
        refreshMovieList();
      })
    });
  }

