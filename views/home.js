var movie = new Movie();

movie.getAll().then(function(data) {
  console.log(data);
  displayMoviesListHtml(data.results);
});

function displayMoviesListHtml(data) {
  var listElement = document.getElementById("list-movies");
  for (var i = 0; i < data.length; i++) {
    var movie = data[i];

    var template = document.getElementById("template");
    var clonedElement = template.cloneNode(true);

    var linkElement = clonedElement.querySelector("a");
    linkElement.href = "/movies/" + movie._id;

    var titleElement = clonedElement.querySelector("h3");
    titleElement.innerText = movie.Title;

    var posterElement = clonedElement.querySelector("img")
    posterElement.setAttribute("src", movie.Poster);

    listElement.appendChild(clonedElement);
  }
}
