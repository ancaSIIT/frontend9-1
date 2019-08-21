

var checkboxAction = document.querySelector("input[name=Action]")
var checkboxAdventure = document.querySelector("input[name=Adventure]")
var checkboxCrime = document.querySelector("input[name=Crime]")
var checkboxFamily = document.querySelector("input[name=Family]")
var checkboxMystery = document.querySelector("input[name=Mystery]")
var checkboxSciFi = document.querySelector("input[name=Sci-Fi]")
var checkboxShort = document.querySelector("input[name=Short]")
var checkboxFantasy = document.querySelector("input[name=Fantasy]")
var checkboxThriller= document.querySelector("input[name=Thriller]")



checkboxAction.addEventListener( 'change', function() {
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
