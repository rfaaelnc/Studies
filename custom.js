window.onscroll = function (e) {
    // console.log(document.body.scrollTop);

    var $positionScroll = window.pageYOffset;

    const $scrollTop = document.querySelector(".scroll-top");

    console.log(window.pageYOffset);

    if ($positionScroll > 100) {
        console.warn("chegou aqui");

        // $scrollTop.setAttribute("style","display:block");

        $scrollTop.setAttribute("style", "visibility:visible");
    } else {
        // $scrollTop.setAttribute("style","visibility:hidden");
        $scrollTop.style.visibility = "hidden";
        $scrollTop.style.opacity = 0;
    }

    var size = '';

    if(window.screen.width >= 1024) {

        size = "desktop";
    console.log(size);
        
    } else {
        size = "mobile";
    console.log(size);
}

    console.warn(size);


};

