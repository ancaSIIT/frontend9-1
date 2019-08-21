var baseUrl = "https://movies-api-siit.herokuapp.com";
inputValue=

window.Movie = function Movie(id = "") {
  this.id = id;
};

Movie.prototype.getAll = function(page = 1) {
  page = parseInt(page);//convert page to integer nr
  if(page < 1){
    page = 1;
  }
  var itemsPerPage = 10;
  var skip = (page - 1) * itemsPerPage;//computing number of items to skip
  return fetch(baseUrl + "/movies?take=" + itemsPerPage + "&skip=" + skip).then(function(response) {
    if (response.ok) {
      return response.json();
    }

    throw new Error("A network error occured", response.status);
  });
};

Movie.prototype.get = function() {
  return fetch(baseUrl + "/movies/" + this._id).then(function(response) {
    if (response.ok) {
      return response.json();
    }

    throw new Error("A network error occured", response.status);
  });
};

Movie.prototype.getDetails = function() {
  var currentMovie = this;
  if(this.id == ""){
    throw new Error("Invalid movie id");
  }
  return fetch(baseUrl + "/movies/" + this.id).then(async function(response) {
    if (response.ok) {
      var data = await response.json();

      for(var propertyName in data) {
        if (propertyName == "_id") {
          continue;
        }

        currentMovie[propertyName] = data[propertyName];
      }
      return currentMovie;
    }

    throw new Error("API request error", response.status);
  });
};



Movie.prototype.delete = function() {
  return fetch(baseUrl + "/movies/" +  this.id, {
    method: "DELETE",
    headers: {
      "x-auth-token": localStorage.getItem("accessToken")
    }
  });
};

Movie.prototype.addMovieFromAPI = function (
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
) {
  return fetch(baseUrl + "/movies", {
      method: "POST",
      body: JSON.stringify({
        Title: newMovieTitle,
        Year: newMovieDate,
        imdbID: "12345",
        Type: newMovieType,
        Poster: newMovieImage
      }),
      headers: {
          "Content-type": "application/json",
          "x-auth-token": localStorage.getItem('accessToken')
      }
  }).then(function(response) {
      console.log("Added", response);

      if (response.ok) {
          return response.json();
      }
      throw new Error("You need to be authenticated to be able to create a movie", response.status);
  });
};
Movie.prototype.getMoviesAfterTitle = function(){
  var searchBar=document.getElementById("search-bar");
  var inputValue=searchBar.value;
  return fetch(baseUrl + "/movies?Title=" + inputValue).then(function(response) {
      if (response.ok) {
        return response.json();
      }

      throw new Error("A network error occured", response.status);
    });
  };
