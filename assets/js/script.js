$( document ).ready(function() {
    $("#logoB").hide();
});

$("#logoA").mouseenter(function () { 
    $("#logoB").toggle(800);
    $("#logoA").toggle(800);
});
$("#logoB").mouseleave(function () { 
    $("#logoB").toggle(800);
    $("#logoA").toggle(800);
});
