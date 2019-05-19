/* Testimonials slick slide-carousel */
$(document).ready(function() {
  $(".mytestimonials").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'ease',
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: true
  });
});

/* Bootstrap accordion scrolling */
$('.collapse').on('shown.bs.collapse', function(e) {
  var $card = $(this).closest('.card');
  $('html,body').animate({
    scrollTop: $card.offset().top
  }, 500);
});

/* Google Analytics */
(function (i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
    m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-16826000-1', 'auto');
ga('send', 'pageview');


/* Initialize Bootstrap Scrollspy */
$(document).ready(function () {
  $('body').scrollspy({
    target: '.navbar',
    offset: 90
  });
});

/* configure Isotope plugin for project gallery */
$(document).ready(function() {
    $(".myPortfolioGrid").isotope(
      {
        percentPosition: true,
        itemSelector: ".portfolioProject",
        filter: ".web",
        layoutMode: "fitRows",
        transformsEnabled: false,
        transitionDuration: "0.5s",
        masonry: {
          gutter: 20
        },
        getSortData: {
          byDate: function ($elem) {
            console.log(Date.parse($($elem).find('time').attr('title')));
            return Date.parse($($elem).find('time').attr('title'));
            /* return Date.parse($($elem).find(".dateCompleted").attr("title")); */
          }
        },
        sortBy: "byDate",
        sortAscending: false
      }
    );

    $(".myPortfolioGrid").isotope({
      itemSelector: ".portfolioProject",
      getSortData: {
        byDate: function ($elem) {
          console.log(Date.parse($($elem).find('time').attr('title')));
          return Date.parse($($elem).find('time').attr('title'));
          /* return Date.parse($($elem).find(".dateCompleted").attr("title")); */
        }
      },
      sortBy: "byDate",
      sortAscending: false
    });

    $(".myPortfolioGrid").isotope("updateSortData").isotope();

    $("button.button").click(function() {
      var to_filter = $(this).attr("data-filter");
      (to_filter == "all") ? $(".myPortfolioGrid").isotope({filter: ".portfolioProject"})
                              : $(".myPortfolioGrid").isotope({filter: "." + to_filter});
    });
});

$(function() {
  $('.scroll-down').click (function() {
    $('html, body').animate({scrollTop: $('section#about').offset().top }, 'slow');
    return false;
  });
});
