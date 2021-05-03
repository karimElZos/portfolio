AOS.init({
    delay: 0,
    duration: 1000
});


jQuery(window).on("scroll", function () {
    if (jQuery(window).scrollTop() > 50) {
        jQuery(".myNav").addClass("navColor");
    } else {

        jQuery(".myNav").removeClass("navColor");
    }
});

//  mixitup js
var mixer = mixitup(".mixtpag");



// // Social button hide / show on the page right side
jQuery('.js-about-me').waypoint(function (direction) {
    if (direction == 'down') {
        jQuery(".social-button").css("transform", "translate(0%, -50%)")
    } else {
        jQuery(".social-button").css("transform", "translate(100%, -50%)")
    }
});

jQuery(window).on("scroll", function () {

    if (jQuery(window).scrollTop() + jQuery(window).height() > jQuery(document).height() - 600) {
        jQuery(".social-button").css("transform", "translate(100%, -50%)");
    }
});



// line progress bar.......
function DemoProgressbars() {
    jQuery('#html5').LineProgressbar({
        percentage: 90,
        fillBackgroundColor: '#ff7171',
        height: '2rem',
        duration: 2000
    });
    jQuery('#css3').LineProgressbar({
        percentage: 85,
        fillBackgroundColor: '#3498db',
        height: '2rem',
        duration: 2200

    });
    jQuery('#jquery').LineProgressbar({
        percentage: 75,
        fillBackgroundColor: '#ffc93c',
        height: '2rem',
        duration: 2300
    });
    jQuery('#bootstrap').LineProgressbar({
        percentage: 85,
        fillBackgroundColor: '#ffaa71',
        height: '2rem',
        duration: 2600
    });
    jQuery('#react').LineProgressbar({
        percentage: 75,
        fillBackgroundColor: '#005086',
        height: '2rem',
        duration: 2700
    });
    jQuery('#photoshop').LineProgressbar({
        percentage: 80,
        fillBackgroundColor: '#89c9b8',
        height: '2rem',
        duration: 2800
    });

}
jQuery('.skilled-log').waypoint(function () {
    DemoProgressbars();
}, {
    offset: '100%',
    triggerOnce: true
});



// circle progress bar animation jquery plugin....
jQuery('svg.radial-progress').each(function (index, value) {
    jQuery(this).find(jQuery('circle.complete')).removeAttr('style');
});
jQuery(window).scroll(function () {
    jQuery('svg.radial-progress').each(function (index, value) {
        // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
        if (
            jQuery(window).scrollTop() > jQuery(this).offset().top - (jQuery(window).height() * 0.75) &&
            jQuery(window).scrollTop() < jQuery(this).offset().top + jQuery(this).height() - (jQuery(window).height() * 0.25)
        ) {
            // Get percentage of progress
            percent = jQuery(value).data('percentage');
            // Get radius of the svg's circle.complete
            radius = jQuery(this).find(jQuery('circle.complete')).attr('r');
            // Get circumference (2Ï€r)
            circumference = 2 * Math.PI * radius;
            // Get stroke-dashoffset value based on the percentage of the circumference
            strokeDashOffset = circumference - ((percent * circumference) / 100);
            // Transition progress for 1.25 seconds
            jQuery(this).find(jQuery('circle.complete')).animate({ 'stroke-dashoffset': strokeDashOffset }, 1250);
        }
    });
}).trigger('scroll');