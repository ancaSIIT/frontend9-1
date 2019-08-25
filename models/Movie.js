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

Movie.prototype.edit = function(movieId,
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
  ratedValue) {

 return fetch( baseUrl + "/movies/" +  movieId, {
    method: "PUT",
    body: JSON.stringify({
      Title: titleValue,
      Year: yearValue,
      Released: releaseValue,
      Plot: descriptionValue,
      Type: typeValue,
      Poster: imageValue,
      Runtime: runtimeValue,
      Director: directorValue,
      Writer: writerValue,
      Awards: awardsValue,
      Actors: actorsValue,
      Country: countryValue,
      Language: languageValue,
      Genre: genreValue,
      Rated: ratedValue
    }),
    headers: {
        "Content-type": "application/json",
        "x-auth-token": localStorage.getItem('accessToken')
    }
    }).then(function(response) {
      console.log("edited", response);
      if (response.ok) {
          return response.json();
      }
  throw new Error("Nothing to update", response.status);
});
}
