(function () {
  jQuery(function($) {

    // apply polyfill for object-fill css rule
    var $objFitImages = $('.js-ofImg');
    if ($objFitImages.length > 0) {
      objectFitImages($objFitImages);
    }

    // Mach media usage example
    /*
     if(window.matchMedia(mediaBP.medium).matches) {
     // do something on screen bigger than 768px
     }
     */
    var mediaBP = {
      medium: 'only screen and (min-width: 768px)',
      large: 'only screen and (min-width: 1024px)',
      xlarge: 'only screen and (min-width: 1200px)',
      xxlarge: 'only screen and (min-width: 1440px)'
    };

    // Toggle function $('.js-toggle') should have data-toggle attr with class name or ID of target element
    /* <button class="js-toggle" data-toggle=".target-element-class">Menu</button> */
    var $toggleElem = $('.js-toggle');

    $toggleElem.click(function (e) {
      e.preventDefault();
      var $toggleTarget = $($(this).data('toggle'));
      $toggleTarget.toggleClass('is-open');
      e.stopPropagation();
      hideOnClickOutside($(this).data('toggle'));
    });

    function hideOnClickOutside(element) {
      $(document).click(function(event) {
        if(!$(event.target).closest(element).length) {
          if($(element).is(":visible")  && $(element).hasClass('is-open')) {
            $(element).removeClass('is-open');
          }
        }
      });
    }
    $(document).ready(function() {
        $('.js-select2-multiple').select2();
        $('.js-select2').select2();
    });
    $(document).ready(function() {
        $("#range").ionRangeSlider({
            hide_min_max: true,
            keyboard: true,
            step: 1,
            grid: true,
            hide_min_max: true,
            hide_from_to: true,
            values: [
                "$0", "$70.000",
                "$250.000", "$475.000",
                "$900.000", "$1.700.000"
            ]
        });
    });
    $('.js-count-popup').magnificPopup({
      type: 'inline',
      preloader: false,
      focus: '#name',
      callbacks: {
        beforeOpen: function() {
          if ($(window).width() < 700) {
            this.st.focus = false;
          }
          else  {
            this.st.focus = '#name';
          }
        }
      }
    });
  });
})();
