$(document).ready(function () {
    $("#taskForm").submit(function (event) {
        event.preventDefault();

        var description = $("#description").val();
        var completed = $("#status").val();

        if (description == "") {
            alert("Please Enter The Description");
            return;
        }

        if (completed == "") {
            alert("Please Enter The Completed");
            return;
        }

        var inputObj = {
            description,
            completed
        }

        $.ajax({
            url: "/api/task",
            type: "POST",
            data: inputObj,
            success: function (data) {
                console.log("success", data);
                alert("User Saved Successfully");
                window.location = "/task";
            },
            error: function (err) {
                console.log("error", err)
            }
        })
    })
})