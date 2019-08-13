var movie = new Movie();


movie.getAll().then(function(data) {
  console.log(data);
  displayMoviesListHtml(data.results);
});

function displayMoviesListHtml(data) {
  var listElement = document.getElementById("list-movies");
  listElement.innerHTML = "";
  for (var i = 0; i < data.length; i++) {
    var movie = data[i];

    var template = document.getElementById("template");
    var clonedElement = template.cloneNode(true);

    var linkElement = clonedElement.querySelector("a");
    let pathName = location.pathname.replace('home.html','');
    linkElement.href = `${pathName}movieDetails.html?id=${movie._id}`;


    var titleElement = clonedElement.querySelector("h3");
    titleElement.innerText = movie.Title;


    var posterElement = clonedElement.querySelector("img")
    posterElement.setAttribute("src", movie.Poster);
    listElement.appendChild(clonedElement);
  clonedElement.id = movie._id;

  var deleteButton = clonedElement.querySelector(".delete");
  if (deleteButton) {deleteButton.addEventListener("click", deleteMovie);}
     //
     // clonedElement.querySelectorAll(".delete").forEach(function(button){
     //   button.addEventListener("click", deleteMovie);
     // })



  }
}

function deleteMovie(event) {
  if (event.currentTarget !== event.target) {
    return;
  }
  var movie = movieFromEvent(event);
  movie.delete().then(function() {
    refreshMovieList();
  });
}

//this funtion can be used every time you need the id
function movieFromEvent(event) {
  var movieElement = movieElementFromEvent(event);
  var movieId = movieElement.id;
  return new Movie(movieId);
}
function movieElementFromEvent(event) {
  // event.target is the element that we clicked
  var movieElement = event.target.parentElement.parentElement;
  return movieElement;

}

function refreshMovieList() {
  var movie = new Movie();

  movie.getAll().then(function(data) {
    displayMoviesListHtml(data.results);
  });
}
