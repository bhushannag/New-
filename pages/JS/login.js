$(document).ready(function() {
    $("button").click(function() {
        var email = $('#email').val();
        var password = $('#password').val();
        $.getJSON("http://localhost:3000/users",
            function(data) {
                $.each(data, function(_key ,value) {
                    if (value.userEmail === email && value.userPassword === password) {
                        sessionStorage.setItem("email" , email);
                        $('form').submit();

                    } 
                   
                    else if (email === "admin@cybage.com" && password === "admin") {
                           sessionStorage.setItem("name" ,"Admin" );
                            window.open("../HTML/admin.html");
                          
    
                        }else{
                        setTimeout(() => {
                            $('#msg').html("<b>Wrong Crentials</b><br><br>");
                        }, 1000)

                    }
                });
            });
    });
});

