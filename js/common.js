$(function () {
    // $(".toggle-mnu").click(function() {
    // 	$(this).toggleClass("on");
    // 	$(".menu").slideToggle();
    // 	return false;
    // });
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

    // $('.ul_nav a').each(function(){
    //     $(this).click(function(e){
    //         e.preventDefault();
    //     });
    // });
    var heightOffsetFeedbackBlock = $('#feedbackBlock').offset().top;
    console.log(heightOffsetFeedbackBlock);
    $('#feedback').click(function (e) {
        var a = $(this).outerWidth();
        $('#run-div').animate({
            'left': '0%',
            // 'width': '140px'
            'width': a
        });

        e.preventDefault();

        setTimeout(function(){
            $('.scrollbar-custom').animate({
                scrollTop: heightOffsetFeedbackBlock
            }, 1000);
        },500);
    });

    $('.link-head-login').click(function () {
        var a = $(this).outerWidth();
        $('#run-div').animate({
            'left': '54%',
            // 'width': '70px',
            'width': a
        });
    });

    // is_dirty
    // is_invalid
    // is_valid

    $('.mdl-textfield__input').each(function () {
        $(this).on("focus", function (e) {
            var mdlTextfield = $(this).parent();
            $(mdlTextfield).addClass('mdl-textfield_active');

            if ($(this).hasClass('is_dirty')) {

            }
        });
    });
    $('.mdl-textfield__input').each(function () {
        $(this).on("blur", function (e) {
            var mdlTextfield = $(this).parent();
            if ($(this).val() == 0) {
                $(mdlTextfield).removeClass('mdl-textfield_active');
                // $(mdlTextfield).addClass('is_dirty');
            }
        });
    });


    var minute = $('#timer-minute').text();
    // for(var i = minute; minute > 0 ; i--){
    //     (function(i){
    //         setTimeout(function() {
    //             $(minute).text(i);
    //         }, 1000);
    //     })(i);
    // };

    $('.wrapper-slider-project').slick({
        dots: true,
        infinite: true,
        arrows: false,
        adaptiveHeight: true
    });
    $('.mdl-textfield__label').each(function(){
        $(this).click(function(){
            $(this).parent().find('input').focus();
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


    $('.wrap-slider-building').slick({
        dots: false,
        infinite: true,
        arrows: true,
        adaptiveHeight: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: '<i class="fa fa-arrow-right"></i>',
        prevArrow: '<i class="fa fa-arrow-left"></i>'
    });

    $(".scrollbar-custom").scroll(function(){
        if ($(this).scrollTop() > $(this).height()){
            $(".scrollToTop").addClass("active");
        }else {
            $(".scrollToTop").removeClass("active");
        }
    });

    $(".scrollToTop").click(function(){
        $('.scrollbar-custom').animate({scrollTop: 0}, "slow", "swing");
    });

    $('.range-area').each(function(){
        var indicator = $(this).find('.range-indicator');
        var percent = $(indicator).data('dataSalesToken');
        if(percent){
            var widthWrap = parseFloat($(this).css('width'))/100 * percent;
            indicator.css('width', widthWrap + "px");
        }else{
            indicator.css('width', 0);
        }

    });


   $('.floor-indicator').each(function(){
       var dataFullFloor = $(this).data('percentFullFloor');
       var valueSquare = 14;
       if(dataFullFloor){
           var valueActiveFullPercent = Math.round(valueSquare * dataFullFloor / 100);

           for(var i = 0; i < valueSquare; i++){
               if(i < valueActiveFullPercent){
                   $(this).append("<div class='square active'></div>");
               }else{
                   $(this).append("<div class='square'></div>");
               }
           }
       }else{
           for(var i = 0; i < valueSquare; i++){
               $(this).append("<div class='square'></div>");
           }
       }

   });

    var question = $('.wrapper-faq-group .question');
    var answer = $('.wrapper-faq-group .answer');


    $(question).on('click', faqAccordion);

    function faqAccordion(){
        $(answer).not($(this).next()).slideUp(400);
        $(this).next().slideToggle(500);
        return false;
    }



///// don't touch it!!! final parenthesis
});


function initMap() {
    var centerLatLng = new google.maps.LatLng(50.443418, 30.525518);
    var mapOptions = {
        center: centerLatLng,
        zoom: 12
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

google.maps.event.addDomListener(window, "load", initMap);


window.addEventListener('load', function() {
    var daysDiv = document.getElementById("timer-day");
    var hoursDiv = document.getElementById("timer-hours");
    var minutesDiv = document.getElementById("timer-minute");

    var countDownDate = new Date("Mar 5, 2018 15:37:25").getTime();

// Update the count down every 1 second
    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element
        daysDiv.innerHTML = days;
        hoursDiv.innerHTML = hours;
        minutesDiv.innerHTML = minutes;

        // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        //     + minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            daysDiv.innerHTML = 0;
            hoursDiv.innerHTML = 00;
            minutesDiv.innerHTML = 00;
        }
    }, 1000);
});

