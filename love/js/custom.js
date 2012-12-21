
if((navigator.userAgent.match(/iPhone/i)) || 
   (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))){
    $(window).load(function() {

//      $('#sliderCeremony1').nivoSlider({effect: 'slideRight', prevText: '<-', nextText: '->' });
//        $('#sliderAbout1').nivoSlider({effect: 'slideRight'});
//        $('#sliderAbout2').nivoSlider({effect: 'slideRight'});
////        $('#slider2').nivoSlider({effect: 'slideRight'});
//        $('#slider3').nivoSlider({effect: 'slideRight'});
//        $('#slider4').nivoSlider({effect: 'slideRight'});
//        $('#slider5').nivoSlider({effect: 'slideRight'});
//        $('#slider6').nivoSlider({effect: 'slideRight'});
//        $('#sliderBranding').nivoSlider({effect: 'slideRight'});
        $(".nivoSlider").nivoSlider({effect: 'slideRight', prevText: '<-', nextText: '->'});
      });
}
else
{
  $(document).ready(function () {
      $("body").queryLoader2({
          barColor: "#ffffff",
          backgroundColor: "#26A9C5",
          percentage: true,
          barHeight: 1,
          completeAnimation: "grow",
          minimumTime: 100
      });
  });
  $(window).load(function() {

        $(".nivoSlider").nivoSlider({effect: 'slideRight', prevText: '<-', nextText: '->'});
//      $('#slider').nivoSlider({effect: 'fade', prevText: '<-', nextText: '->' });
//        $('#sliderAbout1').nivoSlider({effect: 'slideRight'});
//        $('#sliderAbout2').nivoSlider({effect: 'slideRight'});
//        $('#slider2').nivoSlider({effect: 'fade'});
//        $('#slider3').nivoSlider({effect: 'fade'});
//        $('#slider4').nivoSlider({effect: 'fade'});
//        $('#slider5').nivoSlider({effect: 'fade'});
//        $('#slider6').nivoSlider({effect: 'fade'});
//        $('#sliderBranding').nivoSlider({effect: 'fade'});
       // Home Page Animation

        $('#logo').css({'opacity' : 0, 'top' : '-1000px'});
        $('#logo').animate({
          opacity: 1,
          top: 140
        }, 200 );

        /*
         $("#logo").hover(
          function() {
          $("#homelogo2").animate({"left": "310"}, "fast");
          },
          function() {
          $("#homelogo2").animate({"left": "155"}, "slow");
          });

         $("#logo").hover(
          function() {
          $("#homelogo1").animate({"left": "310"}, "fast");
          },
          function() {
          $("#homelogo1").animate({"left": "0"}, "slow");
          });

         $("#logo").hover(
          function() {
          $("#homelogo3").animate({"left": "310"}, "fast");
          },
          function() {
          $("#homelogo3").animate({"left": "635"}, "slow");
          });

         $("#logo").hover(
          function() {
          $("#homelogo4").animate({"left": "310"}, "fast");
          },
          function() {
          $("#homelogo4").animate({"left": "790"}, "slow");
          });*/

        $('#homelogo2').css({'opacity' : 0, 'left' : '310px'});
        $('#homelogo2').delay(1000).animate({
          opacity: .6,
          left: 155
        }, 500 );
        $("#homelogo2").hover(
          function() {
          $(this).animate({"opacity": "1"}, "slow");
          },
          function() {
          $(this).animate({"opacity": ".6"}, "slow");
          });

        $('#homelogo1').css({'opacity' : 0, 'left' : '155px'});
        $('#homelogo1').delay(1500).animate({
          opacity: .6,
          left: 0
        }, 500 );
         $("#homelogo1").hover(
          function() {
          $(this).animate({"opacity": "1"}, "slow");
          },
          function() {
          $(this).animate({"opacity": ".6"}, "slow");
          });

        $('#homelogo3').css({'opacity' : 0, 'left' : '479px'});
        $('#homelogo3').delay(1000).animate({
          opacity: .6,
          left: 635
        }, 500 );
         $("#homelogo3").hover(
          function() {
          $(this).animate({"opacity": "1"}, "slow");
          },
          function() {
          $(this).animate({"opacity": ".6"}, "slow");
          });

        $('#homelogo4').css({'opacity' : 0, 'left' : '635px'});
        $('#homelogo4').delay(1500).animate({
          opacity: .6,
          left: 790
        }, 500 );
         $("#homelogo4").hover(
          function() {
          $(this).animate({"opacity": "1"}, "slow");
          },
          function() {
          $(this).animate({"opacity": ".6"}, "slow");
          });

        $('#section_home a').css({'opacity' : 0});
        $('#section_home a').delay(2000).animate({
          opacity: 1,
        }, 500 );

        // Scroll To Properties

        $('#homelogo4 a').click(function(){
          $("#homelogo2").animate({"opacity": 0}, "slow");  
          $("#homelogo1").animate({"opacity": 0}, "slow"); 
          $("#homelogo3").animate({"opacity": 0}, "slow");
          $("#homelogo4").delay("500").animate({"left": "320"}, "slow");
            $('body').delay("1000").scrollTo('#section_about', 800);
          $("#homelogo2").delay("1300").animate({"opacity": .6}, "fast");
          $("#homelogo1").delay("1300").animate({"opacity": .6}, "fast");
          $("#homelogo3").delay("1300").animate({"opacity": .6}, "fast");
          $("#homelogo4").delay("2000").animate({"left": "790"}, "fast");
        return false;
        });

        $('#homelogo3 a').click(function(){
          $("#homelogo2").animate({"opacity": 0}, "slow");  
          $("#homelogo1").animate({"opacity": 0}, "slow"); 
          $("#homelogo3").delay("500").animate({"left": "320"}, "slow");
          $("#homelogo4").animate({"opacity": 0}, "slow"); 
            $('body').delay("1000").scrollTo('#section_events', 800);
          $("#homelogo2").delay("1300").animate({"opacity": .6}, "fast");
          $("#homelogo1").delay("1300").animate({"opacity": .6}, "fast");
          $("#homelogo3").delay("1300").animate({"left": "635"}, "fast");
          $("#homelogo4").delay("1300").animate({"opacity": .6}, "fast");
        return false;
        });

        $('#homelogo2 a').click(function(){
          $("#homelogo2").delay("500").animate({"left": "320"}, "slow");  
          $("#homelogo1").animate({"opacity": 0}, "slow"); 
          $("#homelogo3").animate({"opacity": 0}, "slow");
          $("#homelogo4").animate({"opacity": 0}, "slow"); 
            $('body').delay("1000").scrollTo('#section_ceremony', 800);
          $("#homelogo2").delay("2000").animate({"left": "155"}, "fast");
          $("#homelogo1").delay("1300").animate({"opacity": .6}, "fast");
          $("#homelogo3").delay("1300").animate({"opacity": .6}, "fast");
          $("#homelogo4").delay("1300").animate({"opacity": .6}, "fast");
        return false;
        });

        $('#homelogo1 a').click(function(){
          $("#homelogo2").animate({"opacity": 0}, "slow");  
          $("#homelogo1").delay("500").animate({"left": "320"}, "slow");
          $("#homelogo3").animate({"opacity": 0}, "slow");
          $("#homelogo4").animate({"opacity": 0}, "slow"); 
            $('body').delay("1000").scrollTo('#section_story', 800);
          $("#homelogo2").delay("1300").animate({"opacity": .6}, "fast");
          $("#homelogo1").delay("2000").animate({"left": "0"}, "fast");
          $("#homelogo3").delay("1300").animate({"opacity": .6}, "fast");
          $("#homelogo4").delay("1300").animate({"opacity": .6}, "fast");
        return false;
        });
  });
}

  $(window).load(function() {

      // Slideshow Functions

        $('.scrollContact').click(function(){
            $('body').scrollTo('#section_about', 800);
        return false;
        });

        // One Page Nav

        $('#nav').onePageNav();

        $('#nav').onePageNav({
          begin: function() {
          console.log('start')
          },
          end: function() {
          console.log('stop')
          }
        });  

    });
