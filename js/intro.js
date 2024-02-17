//resource link: https://www.w3schools.com/jquery/default.asp

$(document).ready(function(){

    $("#box").hide();

    $("#toggle-box").click(function(){
        $("#box").toggle();
    });

    $("#box").click(function(){
        $(".box").addClass("animate-box");

        setTimeout(function(){
            $(".box").removeClass("animate-box");
        },2000);
        
    });

    $("#name").click(function(){
        $("#box").css("background-color", "pink");
    });

    $("#reset").click(function(){
        $("#box").hide();
        $(".box").removeClass("animate-box");
        $("#box").css("background-color", "#2cff41");
    });

});