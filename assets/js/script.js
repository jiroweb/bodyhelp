//  ================ -menu-click-start- ================
$(document).ready(function () {
    var time = 0;
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if (window.innerHeight < 991) {
            // $('.sidenav').css({'overflow-y': 'auto'})
        }

        if ($(this).hasClass('close-menu')) {
            $('.menu-cnt').addClass('transition-menu');
            $('.menu-header-mobile').css({'max-width': '100%', transition: '0.3s'});
            $('.menu-cnt').css({width: '75%', transition: '0.4s'});
            $('body').addClass('body_fix');
            var menu_li = $(".sidenav>ul>li");
            $(menu_li).each(function () {
                time++;
                $(this).css({'transition-delay': '0.' + time + 's'});
                $(this).addClass('anim-menu')
            })
        } else {
            $('.menu-cnt').css({width: '0%'});
            $('body').removeClass('body_fix');
            time = 0;
            var menu_li = $(".sidenav ul li");
            $(menu_li).each(function () {
                if ($(this).hasClass('anim-menu')) {
                    $(this).removeClass('anim-menu');
                    $(this).css({'opacity': '0', transition: '0.2s'})
                }
            })
        }

    });

    $('.for-mobile-bg').on('click', function () {
        if ($('.open-menu').hasClass('close-menu')) {
            $('.open-menu').removeClass('close-menu')
        }
        $('.menu-cnt').css({width: '0%'});
        $('body').removeClass('body_fix');
        time = 0;
        var menu_li = $(".sidenav ul li");
        $(menu_li).each(function () {
            if ($(this).hasClass('anim-menu')) {
                $(this).removeClass('anim-menu');
                $(this).css({'opacity': '0', transition: '0.2s'})
            }
        })
    })
})
//  ================ -menu-click-end- ================




$(document).ready(function () {
    $(".main-slider__js").slick({
        slidesToShow: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                }
            }
        ]

    });
});
$(document).ready(function () {
    $(".shipment-main__js").slick({
        slidesToShow: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                }
            }
        ]

    });
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

$(document).ready(function () {
$("body").on('click', '.questions-title', function () {
    let this_data = $(this).attr('data-expand')
    let this_block = $(this).parent().find('.questions-answers')
    if (this_data === 'false') {
        this_block.data('oHeight', this_block.height()).css('height', 'auto').data('nHeight', this_block.height()).height(this_block.data('oHeight')).animate({
            height: this_block.data('nHeight')
        }, 600);
        $(this).attr('data-expand', 'true')
        $(this).addClass("open-question"); 
        
    } else {
        this_block.data('oHeight', this_block.height()).css('height', '0').data('nHeight', this_block.height()).height(this_block.data('oHeight')).animate({
            height: this_block.data('nHeight')
        }, 600);
        $(this).attr('data-expand', 'false')
        $(this).removeClass("open-question");

    }
    
})
$(".questions-title").click(function () {
    $(".questions-title").removeClass("open-question");
    $(this).addClass("open-question");   
});

});

 // modal-popup
 $('.modal-popup').on('click', function () {
    let modal_find = $('body').find('.modal')
    let data_popupOpen = $(this).data('popupopen')
    $(modal_find).each(function () {
        if ($(this).data('modalpopup') === data_popupOpen) {
            $(this).fadeIn()
        }
    })
})
$('.modal-close').on('click', function () {
    $('body').find('.modal').hide()
})

