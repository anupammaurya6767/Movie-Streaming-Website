document.getElementById("btn-log").addEventListener('click',() => {
    // To remove all sessions 
    WebSecurity.Logout();
    sessionStorage.clear();
    Response.Redirect("login.html");
    
    window.localStorage.clear();
})
