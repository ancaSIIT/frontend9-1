//get modal
var modal = document.getElementById('display-modal');
// close the modal if the user click outside of if
document.getElementById('display-modal').addEventListener("click", function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
})


//close the modal if the "cancel" button is clicked
var cancelBtn = document.querySelector(".cancel-btn");
cancelBtn.onclick = function (event) {
    modal.style.display = "none";
}

var submitBtn = document.querySelector('.submit-btn')
//Register implementation
submitBtn.addEventListener("click", function () {
    event.preventDefault();
    var username = document.getElementById('userName').value;
    var password = document.getElementById('passWord').value;
    var user = new Auth();

    user.loginFromAPI(username,password).then(function(data) {
        console.log(data);
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("username", username);
        
    }).catch(function(response) {
        if(response.status=401) {
            var loginError = document.getElementById("status");
            loginError.innerHtml = "User not found/wrong password.";
        }
    });
});





