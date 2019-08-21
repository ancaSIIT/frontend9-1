 var movieId = getQueryValue("id");
// var movieId = "5d51842d2959e800223b12fd";
var movie = new Movie(movieId);

movie.getDetails().then(function(movie) {displayMovieDetails(movie);});

function displayMovieDetails(data){
  console.log(data);
  var title = document.querySelector(".title");
  title.innerText = data.Title;
  var year = document.querySelector(".year");
  year.innerText = data.Year;
  var metaTitle = document.querySelector("title");
  metaTitle.innerText = data.Title + " (" + data.Year +")";
  var image = document.querySelector(".poster");
  image.src = data.Poster;
  var runtime = document.querySelector(".runtime");
  runtime.innerHTML = data.Runtime;
  var releaseDate = document.querySelector(".releaseDate");
  releaseDate.innerHTML = data.Released;
  var characteristics = document.querySelector(".characteristics");
  var ratingLabel = document.createElement("dt");
  ratingLabel.innerText = "Rating";
  var ratingValue = document.createElement("dd");
  ratingValue.innerText = data.imdbRating + " (" + data.imdbVotes + " votes)";
  var writerLabel = document.createElement("dt");
  writerLabel.innerText = "Writer";
  var writerValue = document.createElement("dd");
  writerValue.innerText = data.Writer;
  var actorsLabel = document.createElement("dt");
  actorsLabel.innerText = "Actors";
  var actorsValue = document.createElement("dd");
  actorsValue.innerText = data.Actors;
  var directorLabel = document.createElement("dt");
  directorLabel.innerText = "Director";
  var directorValue = document.createElement("dd");
  directorValue.innerText = data.Director;
  var genreLabel = document.createElement("dt");
  genreLabel.innerText = "Genre";
  var genreValue = document.createElement("dd");
  genreValue.innerText = data.Genre;
  var typeLabel = document.createElement("dt");
  typeLabel.innerText = "Type";
  var typeValue = document.createElement("dd");
  typeValue.innerText = data.Type;
  var languageLabel = document.createElement("dt");
  languageLabel.innerText = "Language";
  var languageValue = document.createElement("dd");
  languageValue.innerText = data.Language;
  var countryLabel = document.createElement("dt");
  countryLabel.innerText = "Country";
  var countryValue = document.createElement("dd");
  countryValue.innerText = data.Country;
  var awardsLabel = document.createElement("dt");
  awardsLabel.innerText = "Awards";
  var awardsValue = document.createElement("dd");
  awardsValue.innerText = data.Awards;
  var ratedLabel = document.createElement("dt");
  ratedLabel.innerText = "Rated";
  var ratedValue = document.createElement("dd");
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

var editButton = document.querySelector(".edit");
    editButton.addEventListener("click", function(){

 var editMovie = new Movie(event);
 var edited = movieFromEvent(event);
 var inputElement = document.createElement("input");
 var labelElement = document.createElement("label");
  labelElement.innerHTML = "Title: ";
  document.body.appendChild(labelElement);
  document.body.appendChild(inputElement);
 var saveElement = document.createElement("button");
  saveElement.innerHTML = "Submit";
    document.body.appendChild(saveElement);
    saveElement.addEventListener("click", function(clickSaveEvent) {
 var titleValue = inputElement.value;
    console.log("save", event);

  editMovie.edit( movieId,titleValue).then(function(data) {
            console.log("edited", data);
            document.querySelector(".title").innerHTML = data.title;
  inputElement.remove(inputElement);
  labelElement.remove(labelElement);
  saveElement.remove(saveElement);
  location.reload();
      }).catch(function(response) {
          if(response.status=400) {
                alert('Nothing to update');
          }
      });
});
})
