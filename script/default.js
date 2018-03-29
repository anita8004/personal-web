$(function() {

    if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $("html").addClass("mobile").removeClass("desktop");
    } else {
        $("html").addClass("desktop").removeClass("mobile");
    }


  /*
    * 手機選單
    */

  $(".hamburger").on("click", function(e) {
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
  });

  /*
    * 桌機版消除css
    * */

  $(window)
    .on("resize", function() {
      var $menu = $("header .menu");
      if (window.matchMedia("(min-width: 769px)")) {
        $(".hamburger").removeClass("open");
        $menu.removeClass("open");
        $menu.css({ transform: "", transition: "" });
      }
    })
    .trigger("resize");

  /*
    * wow網頁特效
    *
  */

    var wow = new WOW(
        {
            boxClass:     'wow',
            animateClass: 'animated',
            offset:       0,
            mobile:       false,
            live:         true
        }
    );
    wow.init();

    if ($(".revealOnScroll").length > 0 && $(".desktop").length > 0) {
        $(".revealOnScroll").each(function () {
            var $this = $(this);
            var offsetTop = $this.offset().top;
            var thisHeight = $this.height();
            var dataAni = $this.data("animation");
            var winHeight = $(window).height();
            var topLine = offsetTop - winHeight + thisHeight;
            var bottomLine = offsetTop + thisHeight;
            $(window).on("scroll", function () {
                var scrollTop = $(this).scrollTop();
                console.log(topLine, bottomLine, scrollTop);
                if (scrollTop >= topLine) {
                    $this.addClass(dataAni);
                }
                if (scrollTop > bottomLine || scrollTop < topLine) {
                    $this.removeClass(dataAni);
                }
            });
        });
    }




    /*
      * 視差滾動
      * */

  $(".parallax-window").each(function() {
    if ($(".parallax-window").length > 0) {
        $(this).parallax();
    }
  });

  /**
   * Isotope filter
   * https://isotope.metafizzy.co/filtering.html
   */

  if($("#worksList").length > 0) {
      var $grid = $("#worksList").isotope({
          itemSelector: ".item",
          layoutMode: "masonry",
          cellsByRow: {
              columnWidth: 10
          },
      });
  }

    $("#workSearch").on("click", "button", function (e) {
        var inputValue = $("#workSearch input").val();
        $grid.isotope({
            filter: function() {
                var keywords = $(this).find('.keywords li');
                var title = $(this).find('.item_title').text();

                if (inputValue === title){
                    return 1;
                }
                if (inputValue === "") {
                    return 1;
                }
                for (var $i=0;$i<keywords.length;$i++) {
                    var keys = $(keywords[$i]).html().substr(1);
                    if (inputValue === keys){
                        return 1;
                    }
                }
            }
        });
        e.preventDefault();
    });

    $("#workSearch").on("keydown","input", function () {
       if ($(this).val() === "") {
           $grid.isotope({ filter: "*" });
       }
    });


  $('.filters-button-group').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  $(".works_aside .keywords").on("click", "li", function () {
      var keyText = $(this).text();
      $grid.isotope({
          filter: function() {
              var keywords = $(this).find('.keywords li');
              for (var $i=0;$i<keywords.length;$i++) {
                  var keys = $(keywords[$i]).html().substr(1);
                  if (keyText === keys){
                      return 1;
                  }
              }
          }
      });
  });
});


