var url = "https://movies-api-siit.herokuapp.com"
var parameter = url + "/auth/register";
var parameter2 = url + "/auth/login";
var logoutURL = url + "/auth/logout"
var token = localStorage.getItem('accessToken');

Auth = function Auth() {}

Auth.prototype.registerFromAPI = function(username, password) {
 return fetch(parameter, {
   method: "POST",
   body: JSON.stringify({
     username: username,
     password: password
   }),
   headers: {
     "Content-type": "application/json" // x/www-form-urlencoded"
   }
 }).then(function(response) {
   console.log("Registered", response)
   if (response.ok) {
     return response.json();
   }
   throw new Error("Cannot register", response.status)
 });
};

Auth.prototype.loginFromAPI = function(username,password) {
    return fetch(parameter2, {
        method: "POST",
        body: JSON.stringify({
            username: username,
            password: password
        }),
        headers: {
        "Content-type": "application/json"
        }
    }).then(function(response){
        console.log("Login", response)
        if (response.ok){
           return response.json();
        }
        throw new Error("Cannot login", response.status)
    })
}

window.LogoutFromAPI = function LogoutFromAPI(token){
};

LogoutFromAPI.prototype.get = function(token) {
  return fetch(logoutURL,{
 headers: {
      "x-auth-token": "token"
    }}).then(function(response) {
    console.log("response", response);

    if (response.ok) {
      return response.json();
	localStorage.removeItem(token);
	location.reload();
    }

    throw new Error("You have to be logged-in in order to log out", response.status);
  });
};
