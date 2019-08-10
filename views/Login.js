//get modal
var modal = document.getElementById('display-modal-login');
// close the modal if the user click outside of if
document.getElementById('display-modal-login').addEventListener("click", function(event){
    if(event.target == modal) {
        modal.style.display = "none";
    }
})


//close the modal if the "cancel" button is clicked
var cancelBtn = document.querySelector(".cancel-login-btn");
cancelBtn.onclick = function(event) {
    modal.style.display = "none";
}


// get username and password
document.querySelector('.submit-btn').addEventListener("click", function(event){
    console.log("event", event);
    var user = document.getElementById('userName').value;
    console.log(user);
    var pass = document.getElementById('passWord').value;
    console.log(pass);
})
