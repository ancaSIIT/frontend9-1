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
  var token = localStorage.getItem("accessToken")
  var user = new Auth();
  var confirm = document.get
  user.registerFromAPI(username, password).then(function(data) {
    console.log(data);
    localStorage.setItem("username", username);
    localStorage.setItem("accessToken", data.accessToken);
    var confirm = document.getElementById("status");
    confirm.innerHTML = "Completed registration successfuly!"
  }).catch(function(response) {
    if (response.status = 409) {
      var conflict = document.getElementById("status")
      conflict.innerHTML = "Username already existing. Please try again.";
    }
  });
});
