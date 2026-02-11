jQuery(document).ready(function($) {

	'use strict';


        $('.counter').each(function() {
          var $this = $(this),
              countTo = $this.attr('data-count');

          $({ countNum: $this.text()}).animate({
            countNum: countTo
          },

          {

            duration: 8000,
            easing:'linear',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
              //alert('finished');
            }

          });

        });



        $(".b1").click(function () {
            $(".pop").fadeIn(300);

        });

		$(".b2").click(function () {
            $(".pop2").fadeIn(300);

        });

		$(".b3").click(function () {
            $(".pop3").fadeIn(300);

        });

        $(".pop > span, .pop").click(function () {
            $(".pop").fadeOut(300);
        });

		$(".pop2 > span, .pop2").click(function () {
            $(".pop2").fadeOut(300);
        });

		$(".pop3 > span, .pop3").click(function () {
            $(".pop3").fadeOut(300);
        });


        $(window).on("scroll", function() {
            if($(window).scrollTop() > 100) {
                $(".header").addClass("active");
            } else {
                //remove the background property so it comes transparent again (defined in your css)
               $(".header").removeClass("active");
            }
        });


	/************** Mixitup (Filter Projects) *********************/
    	// $('.projects-holder').mixitup({
      //       effects: ['fade','grayscale'],
      //       easing: 'snap',
      //       transitionSpeed: 400
      //   });

});


$(document).ready(function() {
  // navigation click actions
  $('.scroll-link').on('click', function(event){
    event.preventDefault();
    var sectionID = $(this).attr("data-id");
    scrollToID('#' + sectionID, 750);
  });
  // scroll to top action
  $('.scroll-top').on('click', function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop:0}, 'slow');
  });
  // mobile nav toggle
  $('#nav-toggle').on('click', function (event) {
    event.preventDefault();
    $('#main-nav').toggleClass("open");
  });
});
// scroll function
function scrollToID(id, speed){
  var offSet = 50;
  var targetOffset = $(id).offset().top - offSet;
  var mainNav = $('#main-nav');
  $('html,body').animate({scrollTop:targetOffset}, speed);
  if (mainNav.hasClass("open")) {
    mainNav.css("height", "1px").removeClass("in").addClass("collapse");
    mainNav.removeClass("open");
  }
}
if (typeof console === "undefined") {
  console = {
    log: function() { }
  };
}
