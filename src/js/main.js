$(document).ready(function () {
  (function () {
    window.onscroll = () => scrollFunction();
    // Base
    const cssClassActive = "active";
    const cssClassOpen = "open";
    const cssClassIsHidden = "is-hidden";

    // Node's
    const $headerNav = $("#headerNav");
    const $burger = $(".burger");
    const $submenuHeaderBtn = $(".submenu-header");
    const $shortInfo = $(".short-info");

    // Header on scroll
    function scrollFunction() {
      const scrollTop = $(document.body).scrollTop();
      const scrollTopDocumentElement = $(document.documentElement).scrollTop();
      const $header = $("header");

      if (scrollTop > 166 || scrollTopDocumentElement > 166) {
        $header.addClass("scroll");
      } else {
        $header.removeClass("scroll");
      }
    }

    // Header menu controllers
    $burger.on("click", () => {
      if ($shortInfo.hasClass(cssClassOpen)) {
        $shortInfo.toggleClass(cssClassOpen);
      }
      $burger.toggleClass("burger__active");
      $headerNav.toggleClass(cssClassOpen);
    });

    $submenuHeaderBtn.on("click", () => {
      if ($burger.hasClass("burger__active")) {
        $burger.toggleClass("burger__active");
        $headerNav.toggleClass(cssClassOpen);
      }
      $shortInfo.toggleClass(cssClassOpen);
    });

    // card open
    const btnOpenAnswer = $("#btnOpenAnswer");
    const contentAnswer = $(".content__answer");

    btnOpenAnswer.on("click", () => {
      btnOpenAnswer.toggleClass(cssClassActive);
      contentAnswer.toggleClass(cssClassIsHidden);
    });

    // SLIDER
    $(".your-class").slick({});

    // MAP
    /*/
      if ($('#map').length) {
      ymaps.ready(init);
    
      function init(){
        const myLocation = [53.884328, 27.532366];
    
        myMap = new ymaps.Map("map", {
          center: myLocation,
          zoom: 16
        }),
    
        myPlacemark = new ymaps.Placemark(myLocation, {}, {
          preset: 'islands#greenIcon'
        });
    
        myMap.geoObjects.add(myPlacemark);
      }
    }
    */
  })();
});
