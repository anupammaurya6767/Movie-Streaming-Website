document.getElementById("btn-log").addEventListener('click',() => {
    // To remove all sessions 
    WebSecurity.Logout();
    if (getCookie("UsingGoogleSignIn") === "1")
    {
        gapi.load('auth2', function() {
            gapi.auth2.init();
            var auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(function(){
                alert("Successfully Logged Out");
                window.location = "login.html";
            });
        });
    }
    sessionStorage.clear();
   
    
    window.localStorage.clear();
})
