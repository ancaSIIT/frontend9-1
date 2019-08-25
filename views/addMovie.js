//Problems:

//2. The submit button adds movies even though the fields are empty

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
  addButton.removeAttribute("disabled");
};

// var addMovie = document.querySelector(".add-movie-modal");

document.querySelector(".add-movie-modal").addEventListener("click", function (event) {
    if (event.target == newMovieModal) {
      newMovieModal.style.display = "none";
      addButton.removeAttribute("disabled");
    }
})

function validateForm() {
  var image = document.getElementById("moviePoster").value;
  if (image == "") {
    alert("An image URL must be added!");
    return false;
  }
  var title = document.getElementById("movieTitle").value;
  if (title == "") {
    alert("Movie title must be filled out!");
    return false;
  }
  var runtime = document.getElementById("movieRuntime").value;
  if (runtime == "") {
    alert("Runtime must be filled out!");
    return false;
  }

  var director = document.getElementById("movieDirector").value;
  if (director == "") {
    alert("Movie director must be filled out!");
    return false;
  }

  var writer = document.getElementById("movieWriter").value;
  if (writer == "") {
    alert("Movie writer must be filled out!");
    return false;
  }

  var awards = document.getElementById("movieAwards").value;
  if (awards == "") {
    alert("Movie awards must be filled out!");
    return false;
  }
  var actors = document.getElementById("movieActors").value;
  if (actors == "") {
    alert("Please add actors for the movie!");
    return false;
  }

  var country = document.getElementById('movieCountry').value;
  if (country == "") {
    alert("Country must be added!");
    return false;
  }

  var language = document.getElementById('movieLanguage').value;
  if (language == ""){
    alert("Language must be added!");
    return false;
  }

  var rated = document.getElementById('movieRated').value;
  if (rated == ""){
    alert("Rated must be filled out!");
    return false;
  }

  var plot = document.getElementById("movieDescription").value;
  if (plot == "") {
  alert("Plot must be filled out!");
  return false;
}
  return true;
}




function populateModalFields() {
    // get the input from html
    var movieImage = document.getElementById('moviePoster');
    var movieTitle = document.getElementById('movieTitle');
    var movieYear = document.getElementById('movieYear');
    var movieRating = document.getElementById('movieRating');
    var movieVotes = document.getElementById('movieVotes');
    var movieDate = document.getElementById('movieDate');
    var movieRuntime = document.getElementById('movieRuntime');
    var movieDirector = document.getElementById('movieDirector');
    var movieWriter = document.getElementById('movieWriter');
    var movieAwards = document.getElementById('movieAwards');
    var movieActors = document.getElementById('movieActors');
    var movieCountry = document.getElementById('movieCountry');
    var movieLanguage = document.getElementById('movieLanguage');
    var movieRated = document.getElementById('movieRated');
    var moviePlot = document.getElementById('movieDescription');

    // We probably need a helper function to get the value here
    var movieGenre = document.getElementById('movieGenre');

// Then we can make the API request to send information through
    var addNewMovieBtn = document.querySelector('.submit-new-movie-btn');
    addNewMovieBtn.addEventListener("click", function(event) {
      event.preventDefault();
      var isOk=validateForm();
      if (isOk){
      //Get the values from inputs
      // We should probably give these values in the payload for the API function
      var newMovieImage = movieImage.value;
      var newMovieTitle = movieTitle.value;
      var newMovieYear = movieYear.value;
      var newMovieRating = movieRating.value;
      var newMovieVotes = movieVotes.value;
      var newMovieDate = movieDate.value;
      var newMovieRuntime = movieRuntime.value;
      var newMovieDirector = movieDirector.value;
      var newMovieWriter = movieWriter.value;
      var newMovieAwards = movieAwards.value;
      var newMovieActors = movieActors.value;
      var newMovieType = document.querySelector('input[name="movieType"]:checked').value;
      var newMovieCountry = movieCountry.value;
      var newMovieLanguage = movieLanguage.value;
      var newMovieGenre = movieGenre.selectedOptions.length > 0 ? movieGenre.selectedOptions[0].value : "Action";
      var newMovieRated = movieRated.value;
      var newMoviePlot = moviePlot.value;

      var newMovieModel = new Movie();

      newMovieModel.addMovieFromAPI(
        newMovieTitle,
        newMovieYear,
        newMovieImage,
        newMovieDate,
        newMovieRating,
        newMovieVotes,
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
        newMoviePlot
      ).then(function(data) {
        console.log("Added", data);
        document.querySelector('.add-movie-modal').style.display='none';
        refreshMovieList();
        addButton.removeAttribute("disabled");
      })
    }
    else{
      alert("Please fill in all the inputs!");
    }
    });
  }

