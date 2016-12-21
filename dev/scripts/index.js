require('./jquery.infinitescroll')
//Masonry

window.bodyOnload = function(){
    $('.grid').masonry({
        // options...
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true,
        gutter: '.gutter-sizer',
    });
    $('.grid').infinitescroll({
        // Pagination element that will be hidden
        navSelector: '#pagination',

        // Next page link
        nextSelector: '#pagination p a',

        // Selector of items to retrieve
        itemSelector: '.grid-item',

        // Loading message
        loadingText: 'Loading new items…'
    },

    // Function called once the elements are retrieved
    function(new_elts) {
        var elts = $(new_elts).css('opacity', 0);

        elts.animate({opacity: 1});
        $('.grid').masonry('appended', elts);
    });
};

$(document).ready(function () {
    $('#heart .fa-heart-o, #heart .fa-heart, #heart-bottom .fa-heart-o, #heart-bottom .fa-heart').on('click', function () {
        if($(this).hasClass('loved')) {
            $(this).removeClass('fa-heart');
            $(this).removeClass('loved');
            $(this).addClass('fa-heart-o')
        }
        else {
            $(this).removeClass('fa-heart-o');
            $(this).addClass('fa-heart');
            $(this).addClass('loved');
        }
    })

    $('.cancel').on('click', function () {
        $('.menu').removeClass("active");
    })
    $('.menu-fixed-home, .menu-fixed img').on('click', function () {
        $('.menu').addClass('active');
    })
})

$(document).ready(function () {
    var lastScrollTop = 0;
    $(window).on('scroll', function() {
        st = $(this).scrollTop();
        if(st < lastScrollTop) {
            $('#blog-wrapper #share-buttons-bottom, .menu-fixed, .menu-fixed-home').addClass('active');
        }
        else {
            $('#blog-wrapper #share-buttons-bottom, .menu-fixed, .menu-fixed-home').removeClass('active');
        }
        lastScrollTop = st;
    });

    $(window).on('scroll', function (e) {
        if($('#blog-wrapper').length) {
            const heightBlogWrapper = $("#blog-wrapper").height();
            const BlogWrapperTop = $("#blog-wrapper").offset().top;
            const BlogWrapper = (BlogWrapperTop + heightBlogWrapper + 100);
            const windowHeight = $(window).height();
            if ($(e.target).scrollTop() >= (BlogWrapper - windowHeight) ) {
                $('#share-buttons').fadeIn(1000);
            }
            else {
                $('#share-buttons').fadeOut(300);
            }
        }

    });
});
