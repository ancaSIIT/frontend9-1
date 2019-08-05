var baseUrl = "https://movies-api-siit.herokuapp.com";

window.Movie = function Movie(options = {}) {
  this._id = options._id;
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
