//get modal
var modal = document.getElementById('display-modal-login');
// close the modal if the user click outside of if
document.getElementById('display-modal-login').addEventListener("click", function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
})


//close the modal if the "cancel" button is clicked
var cancelBtn = document.querySelector(".cancel-login-btn");
cancelBtn.onclick = function (event) {
    modal.style.display = "none";
}

var submitBtn = document.querySelector('.submit-btn')
//Register implementation
submitBtn.addEventListener("click", function () {
    event.preventDefault();
    var username = document.getElementById('userName-login').value;
    var password = document.getElementById('passWord-login').value;
    var loginError = document.getElementById("confirm");

    var user = new Auth();


    user.loginFromAPI(username,password).then(function(data) {
        console.log(data);
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("username", username);
        loginError.innerHTML = "Logged in!";
        setTimeout(function () {
            modal.style.display = "none";
        }, 1500);
        showButton();
      }).catch(function(response) {
        if(response.status=401) {
            loginError.innerHTML = "User not found/wrong password!";
        }
    });
});
