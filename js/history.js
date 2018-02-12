$(function () {
    var $self = this;

    this.openPopup = function (selector) {
        setTimeout(function(){
            $('body').addClass('overflow_hidden');
            $(selector).addClass('active');
        }, 1000);
    };

    this.closePopup = function (selector) {
        $('body').removeClass('overflow_hidden');
        $(selector).removeClass('active');
    };


    $('#feedback').click(function (e) {
        var a = $(this).outerWidth();
        $('#run-div').animate({
            'left': '0%',
            // 'width': '140px'
            'width': a
        });

        e.preventDefault();
    });

    $('.link-head-login').click(function () {
        var a = $(this).outerWidth();
        $('#run-div').animate({
            'left': '54%',
            // 'width': '70px',
            'width': a
        });
    });

    $('.scrollbar-custom').each(function () {
        var ps = new PerfectScrollbar(this, {
            // wheelSpeed: 2,
            wheelPropagation: true,
            suppressScrollX: true
            // minScrollbarLength: 20
        });
        ps.update();
    });



///// don't touch it!!! final parenthesis
});

