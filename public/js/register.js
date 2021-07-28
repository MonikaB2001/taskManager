$(document).ready(function () {
    $("#regForm").submit(function (event) {
        event.preventDefault();

        var email = $("#email").val();
        var password = $("#password").val()

        if (email == "") {
            alert("Please Enter The Email");
            return;
        }

        if (password == "") {
            alert("Please Enter The Password");
            return;
        }

        var inputObj = {
            email,
            password
        }

        $.ajax({
            url: "/api/admin",
            type: "POST",
            data: inputObj,
            success: function (data) {
                console.log("success", data);
                alert("User Saved Successfully");
                location.href = "/login";
            },
            error: function (err) {
                console.log("error", err);
            }
        })
    })
})