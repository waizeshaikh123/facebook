// ############ right-bar Code
$(function(){
    $(".group-main").click(function(){
        $(".card").css({
            display:"block"
        })
    });

    $(".card i").click(function(){
        $(".card").css({
            display:"none"
        })
    });

    $(".end-to-end").click(function(){
        $(".end-p").text("end-to-end encrypted")
        $(".end-to-end").css("background","#265073");
        $(".circle").css({
            position:"relative",
            left:"57%"
        })
    });

    $(".end-to-end").dblclick(function(){
        $(".end-p").text("Use end-to-end encrypted");
        $(".end-to-end").css("background","transparent");
        $(".circle").css({
            position:"relative",
            left:"0%"
        })
    });
});