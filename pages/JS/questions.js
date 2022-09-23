$(document).ready(function() {
    fetchData();
    function fetchData() {

        $.getJSON("http://localhost:3000/finalQuestions",
            function(data) {
                var title = '';
                var question = '';
                $.each(data, function(key, value) {
                console.log(key);
                title = value.title
                question = value.question;                   
                $('.div1').append("<div class=div2><p>" + title + "</p><p><a href='postAnswer.html'>" + question + "</a></p></div></br>");
            });
        });
    }
});
