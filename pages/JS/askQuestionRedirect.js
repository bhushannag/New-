$(document).ready(function() {
    $("#askQue").click(function() {
        if(sessionStorage.length==1){
            if(confirm("Please login first to ask question")){
                window.location.href = "../HTML/login.html" ;
            }else{
                window.location.href='../HTML/home.html';
            }
        }
        else{
            window.location.href='../HTML/askQuestions.html';
        }
    });
});
