 var movieId = getQueryValue("id");
// var movieId = "5d51842d2959e800223b12fd";
var movie = new Movie(movieId);

movie.getDetails().then(function(movie) {displayMovieDetails(movie);});

function displayMovieDetails(data){
  console.log(data);
  var title = document.querySelector(".title");
  var movieTitle = document.querySelector("#movieTitle");
  title.innerText = data.Title;
  movieTitle.value = data.Title;
  var year = document.querySelector(".year");
  var movieYear = document.querySelector("#movieYear");
  year.innerText = data.Year;
  movieYear.value=data.Year;
  var metaTitle = document.querySelector("title");
  metaTitle.innerText = data.Title + " (" + data.Year +")";
  var image = document.querySelector(".poster");
  var movieImage = document.querySelector("#movieImage");
  movieImage.value= data.Poster;
  image.src = data.Poster;
  var runtime = document.querySelector(".runtime");
  var movieRuntime = document.querySelector("#movieRuntime");
  runtime.innerHTML = data.Runtime;
  movieRuntime.value= data.Runtime;
  var releaseDate = document.querySelector(".releaseDate");
  var movieDate = document.querySelector("#movieDate");
  releaseDate.innerHTML = data.Released;
  movieDate.value=data.Released;
  var characteristics = document.querySelector(".characteristics");
  var ratingLabel = document.createElement("dt");
  ratingLabel.innerText = "Rating";
  var ratingValue = document.createElement("dd");
  ratingValue.innerText = data.imdbRating + " (" + data.imdbVotes + " votes)";
  var writerLabel = document.createElement("dt");
  writerLabel.innerText = "Writer";
  var writerValue = document.createElement("dd");
  var movieWriter = document.querySelector("#movieWriter");
  movieWriter.value=data.Writer;
  writerValue.innerText = data.Writer;
  var actorsLabel = document.createElement("dt");
  actorsLabel.innerText = "Actors";
  var actorsValue = document.createElement("dd");
  var movieActors = document.querySelector("#movieActors");
  movieActors.value=data.Actors;
  actorsValue.innerText = data.Actors;
  var directorLabel = document.createElement("dt");
  var movieDirector = document.querySelector("#movieDirector");
  movieDirector.value=data.Director;
  directorLabel.innerText = "Director";
  var directorValue = document.createElement("dd");
  directorValue.innerText = data.Director;
  var genreLabel = document.createElement("dt");
  genreLabel.innerText = "Genre";
  var genreValue = document.createElement("dd");
  genreValue.innerText = data.Genre;
  var movieGenre = document.querySelector("#movieGenre");
  movieGenre.value=data.Genre;
  var typeLabel = document.createElement("dt");
  typeLabel.innerText = "Type";
  var typeValue = document.createElement("dd");
  var movieType= document.querySelector("#movieType");
  movieType.value=data.Type;
  typeValue.innerText = data.Type;
  var languageLabel = document.createElement("dt");
  languageLabel.innerText = "Language";
  var languageValue = document.createElement("dd");
  var movieLanguage = document.querySelector("#movieLanguage");
  movieLanguage.value=data.Language;
  languageValue.innerText = data.Language;
  var countryLabel = document.createElement("dt");
  countryLabel.innerText = "Country";
  var countryValue = document.createElement("dd");
  var movieCountry = document.querySelector("#movieCountry");
  movieCountry.value=data.Country;
  countryValue.innerText = data.Country;
  var awardsLabel = document.createElement("dt");
  awardsLabel.innerText = "Awards";
  var awardsValue = document.createElement("dd");
  var movieAwards = document.querySelector("#movieAwards");
  movieAwards.value=data.Awards;
  awardsValue.innerText = data.Awards;
  var ratedLabel = document.createElement("dt");
  ratedLabel.innerText = "Rated";
  var ratedValue = document.createElement("dd");
  var movieRated = document.querySelector("#movieRated");
  movieRated.value=data.Rated;
  ratedValue.innerText = data.Rated;
  characteristics.appendChild(ratingLabel);
  characteristics.appendChild(ratingValue);
  characteristics.appendChild(directorLabel);
  characteristics.appendChild(directorValue);
  characteristics.appendChild(writerLabel);
  characteristics.appendChild(writerValue);
  characteristics.appendChild(actorsLabel);
  characteristics.appendChild(actorsValue);
  characteristics.appendChild(awardsLabel);
  characteristics.appendChild(awardsValue);
  characteristics.appendChild(typeLabel);
  characteristics.appendChild(typeValue);
  characteristics.appendChild(countryLabel);
  characteristics.appendChild(countryValue);
  characteristics.appendChild(languageLabel);
  characteristics.appendChild(languageValue);
  characteristics.appendChild(genreLabel);
  characteristics.appendChild(genreValue);
  characteristics.appendChild(ratedLabel);
  characteristics.appendChild(ratedValue);
  var description = document.querySelector(".description");
  description.innerHTML = data.Plot;
  var movieDescription = document.querySelector("#movieDescription");
  movieDescription.value = data.Plot;
}
function getQueryValue(key) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] === key) {
      return pair[1];
    }
  }
  return false;
}

function deleteMovie(event) {
  var movie = movieFromEvent(event);
  movie.delete().then(function() {
    refreshMovieList();
  });
}

//this funtion can be used every time you need the id
function movieFromEvent(event) {
  var movieElement = event.target.parentElement.parentElement.parentElement;
  var movieId = movieElement.id;
  console.log("id=",movieId);
  return new Movie(movieId);
}

function refreshMovieList() {
  var movie = new Movie();

  movie.getAll().then(function(data) {
    displayMoviesListHtml(data.results);
  });
}

//edit
var editButton = document.querySelector("#edit");
    editButton.addEventListener("click", function(){
      document.querySelector('.edit-movie-modal').style.display='block';
      editButton.setAttribute("disabled", "disabled");
      modalFields();
       })

       var editMovieModal = document.querySelector('.edit-movie-modal');

       //Close
       document.querySelector('.edit-movie-modal').addEventListener("click", function(event) {
           if(event.target == editMovieModal) {
               editMovieModal.style.display = "none";
               location.reload()
           }
       })
       //Cancel
       var cancelEdit = document.querySelector(".cancel-edit-movie-btn");
       cancelEdit.onclick = function(event) {
           editMovieModal.style.display = "none";

       };

 function modalFields() {

     var movieImage = document.getElementById('movieImage')
     var movieTitle = document.getElementById('movieTitle');
     var movieYear = document.getElementById('movieYear');
     var movieDate = document.getElementById('movieDate');
     var movieRuntime = document.getElementById('movieRuntime');
     var movieDirector = document.getElementById('movieDirector');
     var movieWriter = document.getElementById('movieWriter');
     var movieAwards = document.getElementById('movieAwards');
     var movieActors = document.getElementById('movieActors');
     var movieType = document.querySelector('.movieType');
     var movieCountry = document.getElementById('movieCountry');
     var movieLanguage = document.getElementById('movieLanguage');
     var movieRated = document.getElementById('movieRated');
     var movieDescription = document.getElementById('movieDescription');
     var movieGenre = document.getElementById('movieGenre');

}

     var editMovieBtn = document.querySelector('.submit-edit-movie-btn');
     editMovieBtn.addEventListener("click", function(event) {
       event.preventDefault();
      var imageValue = movieImage.value;
       var yearValue = movieYear.value;
       var titleValue = movieTitle.value;
       var releaseValue = movieDate.value;
       var runtimeValue = movieRuntime.value;
       var directorValue = movieDirector.value;
       var writerValue = movieWriter.value;
       var awardsValue = movieAwards.value;
       var actorsValue = movieActors.value;
       var typeValue = movieType.value;
       var countryValue = movieCountry.value;
       var languageValue = movieLanguage.value;
       var genreValue = movieGenre.value;
       var ratedValue = movieRated.value;
       var descriptionValue = movieDescription.value;
       var editMovieModal = new Movie(event);
       var edited = movieFromEvent(event);
  editMovieModal.edit( movieId,
  titleValue,
  yearValue,
  releaseValue,
  descriptionValue,
  typeValue,
  imageValue,
  runtimeValue,
  directorValue,
  writerValue,
  awardsValue,
  actorsValue,
  countryValue,
  languageValue,
  genreValue,
  ratedValue).then(function(data) {
            console.log("edited", data);
  location.reload();
      }).catch(function(response) {
          if(response.status=400) {
                alert('Nothing to update');
          }
      });
})
