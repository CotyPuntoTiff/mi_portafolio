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