$(window).load(function () {
    /* ================ VERFIFY IF USER IS ON TOUCH DEVICE ================ */

    if (is_touch_device()) {
        $(".gallery-item-container").on('click', function (e) {
            $(this).find('.hover-mask-container').show();
        });
    }

    // function to check is user is on touch device
    function is_touch_device() {
        return 'ontouchstart' in window // works on most browsers 
                || 'onmsgesturechange' in window; // works on ie10
    }
});

jQuery(document).ready(function ($) {
    'use strict';
    //VEHICLE GALLERY LIGHTBOX
    $('.triggerZoom').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

