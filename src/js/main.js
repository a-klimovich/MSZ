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
    const questionsCard = $(".questions-card")
    
    questionsCard.each((i, elem) => {
      const btnOpenAnswer = $(".btnOpenAnswer", elem);
      const contentAnswer = $(".content__answer", elem);
      
      btnOpenAnswer.on("click", () => {
        btnOpenAnswer.toggleClass(cssClassActive);
        contentAnswer.toggleClass(cssClassIsHidden);
      });
    })

    // PRODUCT CARD LIST ITEM COUNTER
    const $productListCard = $('.production-list-card');

    $productListCard.each((i, elem)  => {
      const listLength = $('.list-menu li', elem).length;
      const $counterNode = $('.counter', elem);

      $(elem).on('click', () => {
        $(elem).toggleClass(cssClassActive)
      })

      if (listLength === 0) {
        $('.list-menu', elem).remove()
        $('.list-item-counter', elem).remove()
      }

      $counterNode[0].innerHTML = `${listLength}`;
    })

    // SECTION VIEW CONTROLER
    const text = document.querySelectorAll('.line_text');
    const plantScheam = document.querySelector('.about-plant__scheam');
    const scheamImg = document.querySelectorAll('.scheam__img');
    text.forEach((e, i) => {
      e.addEventListener('mouseover', () => {
        for (let i = 0; i < 4; i++ ) {
          plantScheam.classList.remove(`active-section-${i+1}`) 
          scheamImg[i].classList.remove('show')
        }
        if (i === 0) {
          plantScheam.classList.add('active-section-1');
          scheamImg[i].classList.add('show');
        }
        if (i === 1) {
          plantScheam.classList.add('active-section-2')
          scheamImg[i].classList.add('show');
        }
        if (i === 2) {
          plantScheam.classList.add('active-section-3')
          scheamImg[i].classList.add('show');
        }
        if (i === 3) {
          plantScheam.classList.add('active-section-4')
          scheamImg[i].classList.add('show');
        }
    })
    // e.addEventListener('mouseout', () => {
    //   for (let i = 0; i < 4; i++ ) {
    //     plantScheam.classList.remove(`active-section-${i+1}`) 
    //     scheamImg[i].classList.remove('show')
    //   }
    //   plantScheam.classList.add('active-section-1');
    //   scheamImg[i].classList.add('show');
    // })
    e.addEventListener('onclick', () => {
      for (let i = 0; i < 4; i++ ) {
        plantScheam.classList.remove(`active-section-${i+1}`) 
        scheamImg[i].classList.remove('show')
      }
      if (i === 0) {
        plantScheam.classList.add('active-section-1');
        scheamImg[i].classList.add('show');
      }
      if (i === 1) {
        plantScheam.classList.add('active-section-2')
        scheamImg[i].classList.add('show');
      }
      if (i === 2) {
        plantScheam.classList.add('active-section-3')
        scheamImg[i].classList.add('show');
      }
      if (i === 3) {
        plantScheam.classList.add('active-section-4')
        scheamImg[i].classList.add('show');
      }
  })
  })

    // SLIDERS
    $("#mainSlider").slick({
      slidesToShow: 1,
      arrows: false,
      dots: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            dots: false,
            arrows: false,
            slidesToShow: 1
          }
        },
      ]
    });

    $("#logoSlider").slick({
      slidesToShow: 5,
      arrows: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            dots: true,
            arrows: false,
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 768,
          settings: {
            dots: true,
            arrows: false,
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 685,
          settings: {
            dots: true,
            arrows: false,
            centerMode: true,
            centerPadding: '30px',
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 520,
          settings: {
            dots: true,
            arrows: false,
            centerMode: true,
            centerPadding: '20px',
            slidesToShow: 1,
          }
        },
      ]
    });

    $("#sliderProduct").slick({
      slidesToShow: 2,
      dots: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 980,
          settings: {
            dots: true,
            arrows: false,
            slidesToShow: 1,
          }
        },
      ]
    });
    
    $("#managmentStuff").slick({
      slidesToShow: 3,
      dots: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            dots: true,
            arrows: false,
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            dots: true,
            arrows: false,
            slidesToShow: 1,
          }
        },
      ]
    });

    ymaps.ready(init);
    function init(){ 
        var myMap = new ymaps.Map("map", {
            center: [52.20, 24.33],
            zoom: 15
        });
    }

  })();
});

