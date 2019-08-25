var movie = new Movie();
var searchBar=document.getElementById("search-bar");

searchBar.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     searchButton.click();
    }
  })
var searchButton=document.getElementById("search-button");
searchButton.addEventListener("click", function(){
  refreshMovieList();
  /*
  var inputValue=searchBar.value;

      console.log(inputValue);
      movie.getMoviesAfterTitle().then(function (data){
console.log(data.results);
var listElement = document.querySelector("#list-movies .items");
listElement.innerHTML = "";
if (data.results.length==0){
  var noResultsMessage=document.getElementById("no-search-results");
  noResultsMessage.innerText= `Oh, sorry! :( There is no  movie with  ${inputValue} in the title
     Try an other one!`
}
else {
var noResultsMessage=document.getElementById("no-search-results");
noResultsMessage.innerText="";
for (var i = 0; i < data.results.length; i++) {
  var movie = data.results[i];

  var template = document.getElementById("template");
  var clonedElement = template.cloneNode(true);

  var linkElement = clonedElement.querySelector("a");
  var pathName = location.pathname.replace('home.html','');
  linkElement.href = `${pathName}movieDetails.html?id=${movie._id}`;


  var titleElement = clonedElement.querySelector("h3");
  titleElement.innerText = movie.Title;


  var posterElement = clonedElement.querySelector("img")
  posterElement.setAttribute("src", movie.Poster);
  listElement.appendChild(clonedElement);
  clonedElement.id = movie._id;
      }
    }
  })
  */
});
