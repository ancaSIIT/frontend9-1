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

  })
  var addButton = document.getElementById('add-game').style.display = "inline-block";
 
}
};

function hideButton() {
  if (localStorage.getItem("accessToken") !== null) {
 document.getElementById('logoutBtn').style.display = 'initial';
  document.getElementById('loginBtn').style.display = "none";
 document.getElementById('registerBtn').style.display = "none"; 
	}
};