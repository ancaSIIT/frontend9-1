var url = "https://movies-api-siit.herokuapp.com"
var parameter = url + "/auth/register";
var parameter2 = url + "/auth/login";

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
