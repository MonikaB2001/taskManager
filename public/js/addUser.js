$(document).ready(function () {
    $("#userForm").submit(function (event) {
        event.preventDefault();

        var name = $("#name").val();
        var email = $("#email").val();
        var password = $("#password").val();

        if (name == "") {
            alert("Please Enter The Name");
            return;
        }

        if (email == "") {
            alert("Please Enter The Email");
            return;
        }

        if (password == "") {
            alert("Please Enter The Password");
            return;
        }

        var inputObj = {
            name,
            email,
            password
        }

        $.ajax({
            url: "/api/users",
            type: "POST",
            data: inputObj,
            success: function (data) {
                console.log("success", data);
                alert("User Saved Successfully");
                location.href = "/users";
            },
            error: function (err) {
                console.log("error", err);
            }
        })
    })
})