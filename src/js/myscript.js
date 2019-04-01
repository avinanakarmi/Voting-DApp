$(document).ready(function(){
    $("#login").click(function(e){
        e.preventDefault();
        const username = $('#username').val();
        const password = $('#password').val();
        console.log(username, password);
        if($.trim(username) != '' && $.trim(password) != ''){
            if(username === 'admin' && password === 'admin'){
                localStorage.setItem('loggedin', 'true');
                window.location.replace("http://localhost:3000/");
            }
            else {     
                $("#error").html("Invalid Credentials.");
            }
        }
    });  
});
