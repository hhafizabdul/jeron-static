var $ = jQuery;

$(document).ready(function() {
    var h = [];

    // Loop through all elements with the class 'sliding-text-2'
    $('.sliding-text-2').each(function() {
        h.push($(this).find('.elementor-widget').clone().html());
    });

    // Function to initialize the sliding effect
    function init() {
        $('.sliding-text-2').each(function(i) {
            var $this = $(this);

            // Remove any existing sliding class
            $this.find('.elementor-widget').removeClass('sliding');

            // Calculate how many times the content needs to repeat for continuous sliding
            var amount = Math.ceil($(window).width() / $(this).find('.elementor-widget-container').outerWidth(true)) + 1;

            // Empty the content and add the 'sliding' class, then repeat the content
            $this.find('.elementor-widget').empty().addClass('sliding');
            $this.find('.elementor-widget').html(h[i].repeat(amount));
        });
    }

    // Initialize the effect and reinitialize on window load and resize
    init();
    $(window).on('load resize', init);
});
