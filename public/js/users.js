$(document).ready(function () {
    $("#userForm").submit(function (event) {
        event.preventDefault();
        var inputObj = {
            name: $("#userName").val(),
            email: $("#email").val(),
            password: $("#password").val()
        }
        $.ajax({
            url: "/api/users",
            type: "POST",
            data: inputObj,
            success: function (data) {
                console.log("success", data);
                alert("User Saved Successfully");
            },
            error: function (err) {
                console.log("error", err);
            }
        })
    })
})