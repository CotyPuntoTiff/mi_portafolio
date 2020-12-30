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
// $("#card-1").click(function(){
//     $("#card-2").toggle(800);
//     $("#card-3").toggle(800);
//     $("#card-4").toggle(800);
//     $("#card-5").toggle(800);
//     $("#card-6").toggle(800);
//     $("#card-1").show(800);
//   });

//   $("#card-2").click(function(){
//     $("#card-1").toggle(800);
//     $("#card-3").toggle(800);
//     $("#card-4").toggle(800);
//     $("#card-5").toggle(800);
//     $("#card-6").toggle(800);
//     $("#card-2").show(800);
//   });

//   $("#card-3").click(function(){
//     $("#card-1").toggle(800);
//     $("#card-2").toggle(800);
//     $("#card-4").toggle(800);
//     $("#card-5").toggle(800);
//     $("#card-6").toggle(800);
//     $("#card-3").show(800);
//   });
//   $("#card-4").click(function(){
//     $("#card-1").toggle(800);
//     $("#card-2").toggle(800);
//     $("#card-5").toggle(800);
//     $("#card-6").toggle(800);
//     $("#card-7").toggle(800);
//     $("#card-4").show(800);
//   });
//   $("#card-5").click(function(){
//     $("#card-1").toggle(800);
//     $("#card-2").toggle(800);
//     $("#card-3").toggle(800);
//     $("#card-4").toggle(800);
//     $("#card-6").toggle(800);
//     $("#card-5").show(800);
//   });
//   $("#card-6").click(function(){
//     $("#card-1").toggle(800);
//     $("#card-2").toggle(800);
//     $("#card-3").toggle(800);
//     $("#card-4").toggle(800);
//     $("#card-5").toggle(800);
//     $("#card-6").show(800);
//   });
