/**
* Template Name: Personal - v2.1.0
* Template URL: https://bootstrapmade.com/personal-free-resume-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
/**
 * Simplified Portfolio JS
 * Single-page scrolling version
 */

!(function($) {
  "use strict";

  // Active navigation highlighting
  $(document).on('click', '.nav-menu a, .mobile-nav a', function() {

    $('.nav-menu .active, .mobile-nav .active').removeClass('active');
    $(this).closest('li').addClass('active');

  });

  // Mobile Navigation
  if ($('.nav-menu').length) {

    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });

    $('body').append($mobile_nav);

    $('body').prepend(
      '<button type="button" class="mobile-nav-toggle d-lg-none">' +
      '<i class="icofont-navigation-menu"></i>' +
      '</button>'
    );

    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function() {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i')
        .toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).click(function(e) {

      var container = $(".mobile-nav, .mobile-nav-toggle");

      if (
        !container.is(e.target) &&
        container.has(e.target).length === 0
      ) {

        if ($('body').hasClass('mobile-nav-active')) {

          $('body').removeClass('mobile-nav-active');

          $('.mobile-nav-toggle i')
            .toggleClass(
              'icofont-navigation-menu',
              'icofont-close'
            );

          $('.mobile-nav-overly').fadeOut();

        }
      }
    });

  }

  // Counter Up
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Skills Progress Bars
  $('.skills-content').waypoint(function() {

    $('.progress .progress-bar').each(function() {

      $(this).css(
        "width",
        $(this).attr("aria-valuenow") + '%'
      );

    });

  }, {
    offset: '80%'
  });

  // Testimonials Carousel
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });

  // Portfolio Filter
  // Note: Isotope's absolute-positioning layout conflicts with Bootstrap's
  // flexbox grid (col-lg-4 / d-flex), which caused cards to overlap. Instead,
  // we filter by toggling visibility on the existing Bootstrap grid items,
  // which keeps the grid intact and reflows naturally.
  $(document).ready(function() {

    $('#portfolio-flters li').on('click', function() {

      $('#portfolio-flters li').removeClass('filter-active');
      $(this).addClass('filter-active');

      var filterValue = $(this).data('filter');

      $('.portfolio-item').each(function() {

        var $item = $(this);
        var matches = (filterValue === '*' || $item.data('category') === filterValue);

        if (matches) {
          // Bring back into the grid, then fade/scale it in
          $item.css('display', '');
          window.requestAnimationFrame(function() {
            $item.removeClass('portfolio-hidden');
          });
        } else {
          // Fade/scale it out, then remove from the grid flow
          $item.addClass('portfolio-hidden');
          setTimeout(function() {
            if ($item.hasClass('portfolio-hidden')) {
              $item.css('display', 'none');
            }
          }, 400);
        }

      });

    });

  });

  // Lightbox
  $(document).ready(function() {
    $('.venobox').venobox();
  });

})(jQuery);