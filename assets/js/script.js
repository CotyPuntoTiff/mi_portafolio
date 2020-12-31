$( document ).ready(function() {
    $("#logoB").hide();
    $("#logoD").hide();
});

// NAVBAR
$("#logoA").hover(function () { 
    $("#logoB").toggle(800);
    $("#logoA").toggle(800);
});
$("#logoB").hover(function () { 
    $("#logoB").toggle(800);
    $("#logoA").toggle(800);
});

// fOOTER

$("#logoC").hover(function () { 
    $("#logoD").toggle(800);
    $("#logoC").toggle(800);
});
$("#logoD").hover(function () { 
    $("#logoD").toggle(800);
    $("#logoC").toggle(800);
});
// Typeform
(function () {
    var qs, js, q, s, d = document,
        gi = d.getElementById,
        ce = d.createElement,
        gt = d.getElementsByTagName,
        id = "typef_orm_share",
        b = "https://embed.typeform.com/";
    if (!gi.call(d, id)) {
        js = ce.call(d, "script");
        js.id = id;
        js.src = b + "embed.js";
        q = gt.call(d, "script")[0];
        q.parentNode.insertBefore(js, q)
    }
})()
// Soft scroll
$(function(){

    $("a").click(function(event){
      if (this.hash !== "") {
        event.preventDefault();
  
        var soft = this.hash;
  
        $("html, body").animate({
          scrollTop: $(soft).offset().top
        }, 800, function(){
          window.location.hash = soft;
        });
      }
    });
  
  });