$(document).ready(function () {

    var mail = localStorage.getItem("userEmail");
    $("#email").val(mail);
    var pwd = localStorage.getItem("userPassword");
    $("#password").val(pwd);
    var remember = localStorage.getItem("rememberMe");
    if (remember) {
        $('#remember').prop('checked', true);
    }

    $("#show").click(function () {
        var show = $("#password");
        if (show.attr("type") == "password") {
            show.attr("type", "text");
        } else {
            show.attr("type", "password");
        }
    })
    $("#remember").click(function () {
        if ($(this).is(':checked')) {
            var email = $("#email").val();
            var password = $("#password").val();
            var rememberMe = $(this).is(':checked');
            localStorage.setItem("rememberMe", rememberMe);

            localStorage.setItem("userEmail", email);
            localStorage.setItem("userPassword", password);
        } else {
            localStorage.clear();
        }
    })
})