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
        $("#range_credits").ionRangeSlider({
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
    $('.js-add-manager').magnificPopup({
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
    $('#myTabs a').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
    })
    FusionCharts.ready(function () {
    var revenueChart = new FusionCharts({
        type: 'column2d',
        renderAt: 'chart-container',
        width: '550',
        height: '350',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "subCaption": "Sales",
                "xAxisName": "",
                "yAxisName": "",
                "numberPrefix": "$",
                "paletteColors": "#5da0e7",
                "bgColor": "#ffffff",
                "borderAlpha": "20",
                "canvasBorderAlpha": "0",
                "usePlotGradientColor": "0",
                "plotBorderAlpha": "10",
                "placevaluesInside": "1",
                "rotatevalues": "1",
                "valueFontColor": "transparent",                
                "showXAxisLine": "1",
                "xAxisLineColor": "transparent",
                "divlineColor": "transparent",               
                "divLineIsDashed": "1",
                "showAlternateHGridColor": "0",
                "subcaptionFontBold": "0",
                "subcaptionFontSize": "14"
            },            
            "data": [
                {
                    "label": "1st Mon",
                    "value": "90"
                }, 
                {
                    "label": "2nd Tue",
                    "value": "85"
                }, 
                {
                    "label": "3rd Wen",
                    "value": "90"
                }, 
                {
                    "label": "1st Mon",
                    "value": "150"
                }, 
                {
                    "label": "2nd Tue",
                    "value": "300"
                }, 
                {
                    "label": "3rd Wen",
                    "value": "170"
                }, 
                {
                    "label": "1st Mon",
                    "value": "120"
                }, 
                {
                    "label": "2nd Tue",
                    "value": "350"
                }, 
                {
                    "label": "3rd Wen",
                    "value": "400"
                }, 
                {
                    "label": "1st Mon",
                    "value": "200"
                }, 
                {
                    "label": "2nd Tue",
                    "value": "370"
                }, 
                {
                    "label": "3rd Wen",
                    "value": "300"
                }
            ],
            "trendlines": [
                {
                    "line": [
                        {
                            "startvalue": "0",
                            "color": "transparent",
                            "valueOnRight": "1",
                            "displayvalue": "Monthly Target"
                        }
                    ]
                }
            ]
        }
    }).render();
});
  });
})();
