//$('body').scrollspy({ target: '#header' })

//$("[rel=tooltip]").tooltip({html:true});

//$(document).ready(function() {
//  $(".hero-buttons").addClass("animated fadeInUp");
//  $(".salutation, .salutation + h1").addClass("animated fadeInUp");
//});

/* parallax scrolling */
$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();
  $(".hero").css("background-position-y", -(scrollTop * 1.6) + "px");
});

/* testimonial carousel */
$(function() {
  var items = (Math.floor(Math.random() * ($("#testimonials li").length)));
  $("#testimonials li").hide().eq(items).show();

  function next() {
      $("#testimonials li:visible").delay(4000).fadeOut("slow", function(){
        $(this).appendTo("#testimonials ul");
        $("#testimonials li:first").fadeIn("slow", next);
      });
  }
  next();
});

/* configure Isotope plugin for portfolio project gallery */
$(document).ready(function() {
  $(".myPortfolioGrid").isotope(
    {
      percentPosition: true,
      itemSelector: ".portfolio",
      filter: ".ng",
      layoutMode: "fitRows",
      transformsEnabled: false,
      transitionDuration: "0.8s",
      masonry: {
          gutter: 20
      }
    }
  );

  $(".myPortfolioGrid").isotope({
    itemSelector: ".portfolio",
    getSortData: {
    dateCompleted: function ($elem) {
      return Date.parse($($elem).find(".dateCompleted").attr("datetime"));
      }
    },
    sortBy: "dateCompleted",
    sortAscending: false
  });

  $(".myPortfolioGrid").isotope("updateSortData").isotope();

  $("button.button").click(function (e) {
    e.preventDefault();
    var to_filter = $(this).attr("data-filter");

    (to_filter == "all") ? $(".myPortfolioGrid").isotope({filter: ".portfolio"}) : $(".myPortfolioGrid").isotope({filter: "." + to_filter});
  });
});

/* adding smooth scroll */
$(document).on("click", 'a[href^="#"]', function (event) {
  event.preventDefault();

  $("html, body").animate({
    scrollTop: $($.attr(this, "href")).offset().top
  }, 1000);
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

