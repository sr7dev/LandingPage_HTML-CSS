$('.overlay-container').on('mouseenter', function () {
    $('.header-overlay-block').fadeIn(300);

});

$('.overlay-container').on('mouseleave', function () {
    $('.header-overlay-block').fadeOut(300);
});

$('.close-mobile-navbar-btn').on('click', function () {
    $('.mobile-navbar-container').removeClass('active');
});
$('.header-navbar-btn').on('click', function () {
    $('.mobile-navbar-container').addClass('active');
});

$(document).mouseup(function (e) {
  let block = $('.search-autocomplete-wrap');
  let btn = $('.header-search-input');
  if (
    !block.is(e.target) &&
    !btn.is(e.target) &&
    block.has(e.target).length === 0
  ) {
    block.removeClass('active');
  }
});
jQuery(function ($) {
    // slick slider on product modal
    $('.slider').slick({
        slidesToShow: 3,
        centerMode: true,
        centerPadding: "0px",
        prevArrow: '<button type="button" class="slick-prev"><svg style="width: 10px; height: 10px; margin-right: 1px" viewBox="0 0 492 492"><path d="M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"></path></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg style="width: 10px; height: 10px; margin-left: 1px" viewBox="0 0 492.004 492.004"><path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"></path></svg></button>',
        responsive: [{
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
            }
        }],
        cssEase: 'linear'
    });

    $(".item-buy-btn").on("click", function (e) {
        e.preventDefault();
    });
    
    $('.modal').on('shown.bs.modal', function (e) {
        $('.slider').slick('setPosition');
        $('.modal-slide-wrapper').addClass('open');
    });
        
    $('.header-search-input').on('keyup', function () {
        const inputValue = $(this).val();
        if (inputValue.length > 2) {
            $('.search-autocomplete-wrap').addClass(
                'active'
            );

        }
    });
    $('#tokenfield').tokenfield({
        autocomplete: {
            source: [
                'red',
                'blue',
                'green',
                'yellow',
                'violet',
                'brown',
                'purple',
                'black',
                'white',
            ],
            delay: 100,
        },
        showAutocompleteOnFocus: true,
    });
    $('#tokenfield1').tokenfield({
        autocomplete: {
            source: [
                'ActionScript',
                'AppleScript',
                'Asp',
                'BASIC',
            ],
            delay: 100,
        },
        showAutocompleteOnFocus: true,
    });
    $('#tokenfield2').tokenfield({
        autocomplete: {
            source: [
                'ActionScript',
                'AppleScript',
                'Asp',
                'BASIC',
                'C',
                'C++',
                'Clojure',
            ],
            delay: 100,
        },
        showAutocompleteOnFocus: true,
    });
    $('#tokenfield3').tokenfield({
        autocomplete: {
            source: [
                'ActionScript',
                'AppleScript',
                'Asp',
                'BASIC',
                'C',
                'C++',
                'Clojure',
                'COBOL',
                'ColdFusion',
                'Erlang',
                'Fortran',
            ],
            delay: 100,
        },
        showAutocompleteOnFocus: true,
    });
    const availableTags = [
        'ActionScript',
        'AppleScript',
        'Asp',
        'BASIC',
        'C',
        'C++',
        'Clojure',
        'COBOL',
        'ColdFusion',
        'Erlang',
        'Fortran',
        'Groovy',
        'Haskell',
        'Java',
        'JavaScript',
        'Lisp',
        'Perl',
        'PHP',
        'Python',
        'Ruby',
        'Scala',
        'Scheme',
    ];
    const availableTags2 = [
        'ActionScript',
        'AppleScript',
        'Asp',
        'BASIC',
        'C',
        'C++',
        'Clojure',
        'COBOL',
        'ColdFusion',
        'Erlang',
        'Fortran',
        'Groovy',
        'Haskell',
        'Java',
        'JavaScript',
        'Lisp',
        'Perl',
        'PHP',
        'Python',
        'Ruby',
        'Scala',
        'Scheme',
    ];
    const availableTags3 = [
        'ActionScript',
        'AppleScript',
        'Asp',
        'BASIC',
        'C',
        'C++',
        'Clojure',
        'COBOL',
        'ColdFusion',
        'Erlang',
        'Fortran',
        'Groovy',
        'Haskell',
        'Java',
        'JavaScript',
        'Lisp',
        'Perl',
        'PHP',
        'Python',
        'Ruby',
        'Scala',
        'Scheme',
    ];
    const availableTags4 = [
        'ActionScript',
        'AppleScript',
        'Asp',
        'BASIC',
        'C',
        'C++',
        'Clojure',
        'COBOL',
        'ColdFusion',
        'Erlang',
        'Fortran',
        'Groovy',
        'Haskell',
        'Java',
        'JavaScript',
        'Lisp',
        'Perl',
        'PHP',
        'Python',
        'Ruby',
        'Scala',
        'Scheme',
    ];
    $('#autocomplete-item-1').autocomplete({
        source: availableTags,
    });
    $('#autocomplete-item-2').autocomplete({
        source: availableTags2,
    });
    $('#autocomplete-item-3').autocomplete({
        source: availableTags3,
    });
    $('#autocomplete-item-4').autocomplete({
        source: availableTags4,
    });

    $(window).on('load', function () {
        if ($(window).width() < 766) {
            $('.items-wrap').addClass('items-wrap--line-view');
            $('.footer-title').addClass('collapsed');
            $('.accordion-mob').removeClass('show');
        } else {
            $('.items-wrap').removeClass('items-wrap--line-view');
            $('.footer-title').removeClass('collapsed');
            $('.accordion-mob').addClass('show');
        }
    })

    $(window).resize(function () {
        if ($(window).width() < 766) {
            $('.items-wrap').addClass('items-wrap--line-view');
            $('.footer-title').addClass('collapsed');
            $('.accordion-mob').removeClass('show');
        } else {
            $('.items-wrap').removeClass('items-wrap--line-view');
            $('.footer-title').removeClass('collapsed');
            $('.accordion-mob').addClass('show');
        }
    });

});


$('.mobile-burger-block').on('click', function () {
    $('.icon-menu').toggleClass('icon-left');
    $('.mobile-header-container').toggleClass('active');
    $('body').toggleClass('body-overflow');
    $('.top-header-row').toggleClass('hidden-text-btn');
});