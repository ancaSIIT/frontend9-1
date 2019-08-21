// Get modal
var modalreg = document.getElementById('display-modal-register');

// Close modal functionality
document.getElementById('display-modal-register').addEventListener("click", function(event) {
    if(event.target == modalreg) {
        modalreg.style.display = "none";
    }
})

var cancelreg = document.querySelector(".cancel-reg-btn");
cancelreg.onclick = function(event) {
    modalreg.style.display = "none";
};

var register = document.querySelector(".registerBtn");

// Register Implementation
register.addEventListener("click", function(event) {
  event.preventDefault();
  var username = document.getElementById("username-register").value;
  var password = document.getElementById("password-register").value;
  var password2 = document.getElementById("password-register2").value;
  var confirm = document.getElementById("status");
  var user = new Auth();
  if (password ===  password2) {
    user.registerFromAPI(username, password).then(function(data) {
      console.log(data);
      localStorage.setItem("username", username);
      localStorage.setItem("accessToken", data.accessToken);
      confirm.innerHTML = "Completed registration successfuly!"
      var modal = document.getElementById("display-modal-register");
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
