
    document.body.classList.
    add("stop-scrolling");


$(window).on("load",function(){
    //$(".wrapper-loader").fadeOut("slow")
    // document.querySelectorAll(".wrapper-loader").style.display = "none"
    $(".loader-wrapper").css("display","none");
        document.body.classList.remove("stop-scrolling");
});