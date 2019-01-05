// slider
$slick_responsive_slider = $('.slider');
settings_base_slider = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000
};

settings_responsive_slider = {
    dots: true,
    arrows: false
};

function debounce(fn, wait) {
    var timeout;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            fn.apply(this, arguments)
        }, (wait || 1));
    }
}

// slick on mobile
function slick_on_mobile(slider, settings) {
    if ($(window).width() > 767) {
        if (slider.hasClass('slick-initialized')) {
            slider.slick('unslick');
        }
        return
    }
    if (!slider.hasClass('slick-initialized')) {
        return slider.slick(settings);
    }
}

// vanilla
window.addEventListener('resize', debounce(function () {
    slick_on_mobile($slick_responsive_slider, settings_responsive_slider);
}, 500));

$(document).ready(function () {
    $('.carousel').slick(settings_base_slider);
    slick_on_mobile($slick_responsive_slider, settings_responsive_slider);
});

window.lazyLoadOptions = {
    elements_selector: "img[data-src]"
};