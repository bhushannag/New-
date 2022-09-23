$(document).ready(function() {
    $("button").click(function() {
        var email = $('#email').val();
        var newPassword = $('#newPassword').val();
        var confirmPassword = $('#confirmPassword').val();

        let record = {
            "userEmail": email,
            "userPassword": newPassword,
        }
        if(newPassword === confirmPassword){
        $.ajax({
            url: " http://localhost:3000/users",
            type: "post",
            data: record,
            dataType: 'JSON',
            success: function() {
                $('form').submit();
            },
            error: function() {
                alert("getting error");
            }

        });
    }else{
        alert("Password Mismatch");
    }
    
    });
});

