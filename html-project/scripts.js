$(document).ready(function() {
    $('#customerForm').submit(function(event) {
        event.preventDefault();
        $.ajax({
            type: "method",
            url: "index.html",
            data: "data",
            dataType: "dataType",
            success: function (response) {
                console.log(response.text());
            }
        });
    });
});