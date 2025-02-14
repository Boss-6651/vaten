$(document).ready(function() {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });

    function open() {
        envelope.addClass("open")
            .removeClass("close");
    }

    function close() {
        envelope.addClass("close")
            .removeClass("open");
    }
    document.addEventListener("DOMContentLoaded", function() {
        var audio = document.getElementById("bg-music");
        audio.play().catch(function(error) {
            console.log("Autoplay ถูกบล็อกโดยเบราว์เซอร์");
        });
    });
    
    document.addEventListener("DOMContentLoaded", function() {
        var audio = document.getElementById("bg-music");
        audio.play().catch(function(error) {
            console.log("Autoplay ถูกบล็อกโดยเบราว์เซอร์");
        });
    });
    


})