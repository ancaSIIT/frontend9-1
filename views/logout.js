
var token = localStorage.getItem('accessToken');

var logoutSession = document.getElementById('logoutBtn');
logoutSession.addEventListener("click", function() {
  
var logout = new LogoutFromAPI();
logout.get().then(function(token) {
        console.log(token);
    localStorage.removeItem(token);
	location.reload();

    }).catch(function(response) {
        if(response.status=403) {
              alert('You have to be logged-in in order to log out ');
        }
    });
});

 
