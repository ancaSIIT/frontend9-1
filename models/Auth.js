var url = "https://movies-api-siit.herokuapp.com"
var parameter = url + "/auth/register";

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
