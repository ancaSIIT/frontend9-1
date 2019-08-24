// Button Manager
window.addEventListener('load', showButton)

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
  var showAdd = document.querySelectorAll('#add-movie')
  showAdd.forEach(function(button) {
    button.style.display = "inline-block";
  })


  var showLogout = document.getElementById('logoutBtn').style.display = 'initial';
  var hideLogin =  document.getElementById('loginBtn').style.display = "none";
  var hideRegister =  document.getElementById('registerBtn').style.display = "none";
}
};
