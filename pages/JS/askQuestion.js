$(document).ready(function() {
    $("button").click(function() {

        var title = $('#title').val();
        var question = $('#question').val();

        let record = {

            "title": title,
            "question": question
        }
        $.ajax({
            url: " http://localhost:3000/questions",
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

    });
});

