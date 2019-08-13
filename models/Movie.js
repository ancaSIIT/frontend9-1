var baseUrl = "https://movies-api-siit.herokuapp.com";

window.Movie = function Movie(id = "") {
  this.id = id;
};
Movie.prototype.getAll = function() {
  return fetch(baseUrl + "/movies?take=10&skip=0").then(function(response) {
    console.log("response", response);

    if (response.ok) {
      return response.json();
    }

    throw new Error("A network error occured", response.status);
  });
};

Movie.prototype.get = function() {
  return fetch(baseUrl + "/movies/" + this._id).then(function(response) {
    console.log("response", response);

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
