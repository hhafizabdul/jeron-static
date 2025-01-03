jQuery(document).ready(function ($) {
    var h = [];

    $('.sliding-text').each(function () {
        h.push($(this).find('.elementor-widget').clone().html());
    });

    function init() {
        $('.sliding-text').each(function (i) {
            var $this = $(this);

            $this.find('.elementor-widget').removeClass('sliding');

            var amount =
                Math.ceil(
                    $(window).width() /
                        $(this)
                            .find('.elementor-widget-container')
                            .outerWidth(true)
                ) + 1;

            $this.find('.elementor-widget').empty().addClass('sliding');
            $this.find('.elementor-widget').html(h[i].repeat(amount));
        });
    }

    init();
    $(window).on('load resize', init);
});
