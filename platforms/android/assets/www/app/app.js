document.addEventListener('deviceready', deviceReady, false);

$(document).ready(function () {
        deviceReady();
});


function deviceReady() {
    $("#splash").load("app/main.html");
}