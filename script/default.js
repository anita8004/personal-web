$(function () {

    /*
    * 手機選單
    */

    $(".hamburger").on("click", function (e) {
        e.preventDefault();
        $(this).toggleClass("open");
        var $menu = $("header .menu");
        $menu.toggleClass("open");
        if ($menu.hasClass("open")) {
            $menu.css({
                transform: "rotateX(0deg)",
                transition: "transform .5s cubic-bezier(0.445, 0.05, 0.55, 0.95)"
            });
        } else {
            $menu.css({
                transform: "rotateX(90deg)",
                transition: "transform .5s cubic-bezier(0.445, 0.05, 0.55, 0.95)"
            });
        }
        ;
    });

    /*
    * 桌機版消除css
    * */

    $(window).on("resize", function () {
        var $menu = $("header .menu");
        if (window.matchMedia("(min-width: 769px)")) {
            $(".hamburger").removeClass("open");
            $menu.removeClass("open");
            $menu.css({
                transform: "",
                transition: ""
            });
        }
        ;
    }).trigger("resize");

    /*
    * wow網頁特效
    * */

    new WOW().init();

    /*
    * 視差滾動
    * */

    $('.parallax-window').each(function () {
        $(this).parallax();
    });
});
