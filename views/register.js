// Get modal
var modal = document.getElementById('display-modal');

// Close modal functionality
document.getElementById('display-modal').addEventListener("click", function(event){
    if(event.target == modal) {
        modal.style.display = "none";
    }
})

var cancelBtn = document.querySelector(".cancel-btn");
cancelBtn.onclick = function(event) {
    modal.style.display = "none";
}

var register = document.querySelector(".registerBtn");

// Register Implementation
register.addEventListener("click", function() {
  var username = document.getElementById("userName").value;
  var password = document.getElementById("passWord").value;
  var password2 = document.getElementById("password2").value;
  var confirm = document.getElementById("status");
  var user = new Auth();
  if (password ===  password2) {
    user.registerFromAPI(username, password).then(function(data) {
      console.log(data);
      localStorage.setItem("username", username);
      localStorage.setItem("accessToken", data.accessToken);
      confirm.innerHTML = "Completed registration successfuly!"
      var modal = document.getElementById("display-modal");
      setTimeout(function() {
          modal.style.display="none";
      }, 1500);
    }).catch(function(response) {
      if (response.status = 409) {
        confirm.innerHTML = "Username already existing. Please try again.";
      };
    });
  } else {
    confirm.innerHTML = "Passwords do not match. Please try again."
  }
});
