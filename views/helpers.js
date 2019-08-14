// Button Manager
$(window).load(showButton);

function showButton() {
  if (localStorage.getItem("accessToken") !== null) {
  var showEdit = document.querySelectorAll('.edit');
  showEdit.forEach(function(button) {
    button.style.display = "block";
    })
  var showDelete = document.querySelectorAll('.delete')
  showDelete.forEach(function(button) {
    button.style.display = "block";
	
  var hideLogin =  document.getElementById('display-modal-login')style.display = "none";
  var hideRegister =  document.getElementById('display-modal-register')style.display = "none";
  })
  var addButton = document.getElementById('add-game').style.display = "inline-block";
 
}
};
