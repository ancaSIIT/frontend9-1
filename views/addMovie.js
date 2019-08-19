var addButton = document.querySelector('#add-movie');
addButton.addEventListener("click", function () {
  document.querySelector('.add-movie-modal').style.display='block';
  addButton.setAttribute("disabled", "disabled");
  populateModalFields();
})

// var addMovie = document.querySelector(".add-movie-modal");

// document.querySelector(".add-movie-modal").addEventListener("click", function (event) {
//     if (event.target == addMovie) {
//         addMovie.style.display = "none";
//     }
// })

// Shouldn't addMovie be a prototype of Movie instead of Auth? no idea..

function populateModalFields() {

    // This isn't helpful - the parent of the target element (addMovie) is
    // authentification-same-effect, not our main body where we want our movie
    // to be displayed.
    // var parentElement = event.target.parentElement;
    //
    // var movieId = parentElement.id;
    // ^
    // asta inseamna ca IDul ar fi luat de la parintele elementului pe care
    // tocmai am dat click (adica addButton), deci nu cred ca-i bine

    // IDUl apare numa in movie details si nu mi-i clar de ce ne trebe ID
    // ca sa adaugam un movie. Ca nu-l stergem / cautam / afisam bazat pe ID.
    // ne trebuie doar pt Movie Details, dar de ce trebe sa-l luam de undeva
    // daca putem sa il generam noi?

    // avem o functie in movieDetails care preia IDul, dar e bazat pe un event
    // in cazu asta, event ar fi click-ul pe Submit?
    var movieImage = document.getElementById('fileupload')
    var movieTitle = document.getElementById('movieTitle');
    var movieDate = document.getElementById('movieDate');
    var movieRuntime = document.getElementById('movieRuntime');
    var movieDirector = document.getElementById('movieDirector');
    var movieWriter = document.getElementById('movieWriter');
    var movieActors = document.getElementById('movieActors');
    var movieType = document.querySelector('.movieType');
    var movieCountry = document.getElementById('movieCountry');
    var movieLanguage = document.getElementById('movieLanguage');
    // We probably need a helper function to get the value here
        // probably doesn't work?
    var movieGenre = function selectGenre(movieGenreSelect) {
      movieGenre = select.options[select.selectedIndex].value;
      console.log("Genre added");
    }

// Then we can make the API request to send information through
    var addNewMovieBtn = document.querySelector('.submit-new-movie-btn');
    addNewMovieBtn.addEventListener("click", function(event) {
      event.preventDefault();

      // We should probably give these values in the payload for the API function
      var newMovieImage = movieImage.value;
      var newMovieTitle = movieTitle.value;
      var newMovieDate = movieDate.value;
      var newMovieRuntime = movieRuntime.value;
      var newMovieDirector = movieDirector.value;
      var newMovieWriter = movieWriter.value;
      var newMovieActors = movieActors.value;
      var newMovieType = movieType.value;
      var newMovieCountry = movieCountry.value;
      var newMovieLanguage = movieLanguage.value;
      var newMovieGenre = movieGenre.value;

      var newMovieModel = new Movie();
      newMovieModel.addMovieFromAPI(
        newMovieTitle,
        newMovieImage,
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
        console.log("Added", data);
        document.querySelector('.add-movie-modal').style.display='none';
        refreshMovieList();
      })
    });
  }

function handleApiResponse(newMovieData) {
  
    // Aici ar trebui sa vina filmu nostru pe mainpage.
    var mainElement = document.getElementById("list-movies")

    // Somewhere here we need to append the values to main page
    // first we create these new elements then we assign their values
    // then append the elements required in payload
    // and store the others for MovieDetails (no append on mainPage)

    var newMovieImage = document.createElement("image");
    newMovieImage.src = newMovieData.Img;
    mainElement.appendChild(newMovieImage);

    var newMovieTitle = document.createElement("label");
    newMovieTitle = movieTitle.value;
    mainElement.appendChild(newMovieTitle);

    var newMovieDate = document.createElement("label");
    newMovieDate = movieDate.value;
    mainElement.appendChild(newMovie);

    var newMovieRuntime = document.createELement("label");
    newMovieRuntime = movieRuntime.value;
    // mainElement.appendChild(newMovieRuntime);

    var newMovieDirector = document.createElement("label");
    // mainElement.appendChild(newMovieDirector);
    newMovieDirector = movieDirector.value;

    var newMovieWriter = document.createElement('label');
    newMovieWriter = movieWriter.value;
    // mainElement.appendChild(newMovieWriter);

    var newMovieActors = document.createElement('label')
    newMovieActors = movieActors.value;
    // mainElement.appendChild(newMovieActors);

    var newMovieType = document.createElement('label');
    newMovieType = movieType.value;
    mainElement.appendChild(newMovieType);

    var newMovieCountry = document.createElement('label');
    newMovieCountry = movieCountry.value;
    // mainElement.appendChild(newMovieCountry);

    var newMovieLanguage = document.createElement('label');
    newMovieLanguage = movieLanguage.value;
    // mainElement.appendChild(newMovieLabel);

    var newMovieGenre = document.createElement('label');
    newMovieGenre = movieGenre.value;
    // mainElement.appendChild(newMovieGenre);

}
