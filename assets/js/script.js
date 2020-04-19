//  ================ -menu-click-start- ================
$(document).ready(function () {
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');

        if ($(this).hasClass('close-menu')) {
            $('.menu-cnt').addClass('transition-menu');
            $('.menu-cnt').css({
                right: '0',
                transition: '0.4s'
            });
            $('body').addClass('body_fix');

        } else {
            $('.menu-cnt').css({
                right: '-100%'
            });
            $('body').removeClass('body_fix');
        }
    });

    $('.for-mobile-bg').on('click', function () {
        if ($('.open-menu').hasClass('close-menu')) {
            $('.open-menu').removeClass('close-menu')
        }
        $('.menu-cnt').css({
            right: '-100%'
        });
        $('body').removeClass('body_fix');
    })
    //  ================ -menu-click-end- ================


    $(".main-slider__js").slick({
        slidesToShow: 1,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: true,
        responsive: [{
            breakpoint: 576,
            settings: {
                arrows: false,
            }
        }]

    });
    $(".shipment-main__js").slick({
        slidesToShow: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        responsive: [{
            breakpoint: 991,
            settings: {
                arrows: false,
            }
        }]

    });

    $('.video-play__bg').click(function () {
        var this_prt = $(this).parent()
        var parent_video = $(this_prt)
        var icon_video = $(parent_video).find(".video-play__bg")
        var video = $(parent_video).find(".video")
        $(video).trigger('play')
        $(video).attr("controls", "controls")
        $(icon_video).fadeOut()
    });

    $("body").on('click', '.questions-title', function () {
        let this_data = $(this).attr('data-expand')
        let this_block = $(this).parent().find('.questions-answers')
        if (this_data === 'false') {
            this_block.slideDown();
            $(this).attr('data-expand', 'true')
            $(this).addClass("open-question");

        } else {
            this_block.slideUp();
            $(this).attr('data-expand', 'false')
            $(this).removeClass("open-question");
        }
    })

    
    $('.icon-minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.icon-plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });


    // modal-popup
    $('.modal-popup').on('click', function () {
        let modal_find = $('body').find('.modal');
        let data_popupOpen = $(this).data('popupopen');
        $(modal_find).each(function () {
            if ($(this).data('modalpopup') === data_popupOpen) {
                $(this).fadeIn();
            }
        })
        $('body').addClass('body_fix');
    })
    $('.modal-close').on('click', function () {
        $('body').find('.modal').hide();
        $('body').removeClass('body_fix');
    });

    new WOW().init();

});