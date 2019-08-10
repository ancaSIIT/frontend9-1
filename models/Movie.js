var baseUrl = "https://movies-api-siit.herokuapp.com";

window.Movie = function Movie(id = "") {
  this.id = id;
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
