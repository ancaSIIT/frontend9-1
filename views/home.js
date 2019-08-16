var movie = new Movie();
var currentPage = 1;
var totalPages = 1;

function displayMoviesListHtml(data) {
  var listElement = document.querySelector("#list-movies .items");
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
    deleteButton.addEventListener("click", deleteMovie);
  }

  var pagesElement = document.querySelector("#list-movies .pages");
  pagesElement.innerHTML = "";
  var prevPageElement = document.createElement("a");
  prevPageElement.innerText = "<";
  prevPageElement.addEventListener("click", () => goToPage(-1));
  var nextPageElement = document.createElement("a");
  nextPageElement.innerText = ">";
  nextPageElement.addEventListener("click", () => goToPage(0));

  if(currentPage != 1) {
    pagesElement.appendChild(prevPageElement);
  }

  for(let i = 1; i <= totalPages; i++){
    var pageLink = document.createElement("a");
    pageLink.innerText = i;
    if(currentPage == i){
      pageLink.classList.add("active");
    }
    pageLink.addEventListener("click", () => goToPage(i));
    pagesElement.appendChild(pageLink);
  }

  if(currentPage != totalPages) {
    pagesElement.appendChild(nextPageElement);
  }
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

  if(currentPage < 1){
    currentPage = 1;
  }
  movie.getAll(currentPage).then(function(data) {
    console.log(data);
    if(currentPage > data.pagination.numberOfPages){
      goToPage(data.pagination.numberOfPages);
      return;
    }
    totalPages = data.pagination.numberOfPages;
    displayMoviesListHtml(data.results);
  });
}

function goToPage(page) {
  switch (page) {
    case -1:
      currentPage = currentPage - 1;
      break;
    case 0:
      currentPage = currentPage + 1;
      break;
    default:
      currentPage = page;
      break;
  }
  refreshMovieList();
}

refreshMovieList();
