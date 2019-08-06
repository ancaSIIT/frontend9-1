var register = document.querySelector(".registerbtn")
register.addEventListener("click", function() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var token = localStorage.getItem("accessToken")
  var user = new Auth();

  user.registerFromAPI(username, password).then(function(data) {
    console.log(data);
    localStorage.setItem("username", username);
    localStorage.setItem("accessToken", data.accessToken);
    console.log ("Completed registration");
  }).catch(function(response) {
    if (response.status = 409) {
      var conflict = document.getElementById("rejection")
      conflict.innerHTML = "Username already existing. Please try again.";
    }
  })
})
