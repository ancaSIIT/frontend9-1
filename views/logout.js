

var logoutSession = document.getElementById('logoutBtn');
logoutSession.addEventListener("click", function() {

var auth = new Auth();
auth.logout().then(function(token) {
        console.log(token);
    localStorage.removeItem('accessToken');
  	location.reload();

    }).catch(function(response) {
        if(response.status=403) {
              alert('You have to be logged-in in order to log out ');
        }
    });
});
