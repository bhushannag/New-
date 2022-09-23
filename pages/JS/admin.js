$(document).ready(function() {
    $('#adminPage').hide();
    if(sessionStorage.getItem("name")=="Admin"){
        $('#adminPage').show();
    }

    fetchData();
    // FETCHING DATA FROM JSON FILE
    function fetchData() {

        $.getJSON("http://localhost:3000/questions",
            function(data) {
                var user = '';

                // ITERATING THROUGH OBJECTS
                $.each(data, function(key, value) {
                    console.log(key);
                    //CONSTRUCTION OF ROWS HAVING
                    // DATA FROM JSON OBJECT
                    user += '<tr>';
                    user += '<td >' +
                        value.title + '</td>';

                    user += '<td >' +
                        value.question + '</td>';

                    user += '<td> <buttton><a href="#" aid=' + value.id + ' onclick="acceptQuestion(this)">Accept</a></button></td>';
                    user += '<td> <buttton><a href="#" aid=' + value.id + ' onclick="deleteQuestion(this)">Delete</a></button></td>';

                    user += '</tr>';
                });

                //INSERTING ROWS INTO TABLE
                $('#table').append(user);
            });
    }
});


function acceptQuestion(a) {


    var id1 = $(a).attr('aid');

    $.getJSON("http://localhost:3000/questions/" + id1,
        function(data) {
            let record = {
                "title": data.title,
                "question": data.question
            }
            $.ajax({
                url: " http://localhost:3000/finalQuestions",
                type: "post",
                data: record,
                dataType: 'JSON',
                success: function() {

                    deleteQuestion(a);
                },
                error: function() {
                    console.log("succesffully");
                }

            });
        });

}

function deleteQuestion(id) {
    var key;
    if (confirm('Are you sure?')) {
        key = $(id).attr('aid');
    }

    $.ajax({
        url: " http://localhost:3000/questions/" + key,
        type: "delete",
        dataType: 'JSON',
        success: function() {
            console.log("done")
        },
        error: function() {
            console.log("done")
        }

    });

}