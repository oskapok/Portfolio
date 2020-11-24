 $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if(scroll <400){
        $("#nav").removeClass("sticky");
    }else{
        $("#nav").addClass("sticky");
    }
});
