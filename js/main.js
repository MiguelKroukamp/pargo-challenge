// $(document).ready(function() {
//     $('#tabs').tabs(); // first tab selected
//     $("#tabs>div a[href^='#']").click(function() {
//       var index = $($(this).attr("href")).index() - 1
//       $("#tabs").tabs("option", "active", index);
//       return false
//     })
//   })

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

$(function(){

  // Remove svg.radial-progress .complete inline styling
  $('svg.radial-progress').each(function( index, value ) { 
      $(this).find($('circle.complete')).removeAttr( 'style' );
  });

  // Activate progress animation on scroll
  $(window).scroll(function(){
      $('svg.radial-progress').each(function( index, value ) { 
          // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
          if ( 
              $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
              $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
          ) {
              // Get percentage of progress
              percent = $(value).data('percentage');
              // Get radius of the svg's circle.complete
              radius = $(this).find($('circle.complete')).attr('r');
              // Get circumference (2πr)
              circumference = 2 * Math.PI * radius;
              // Get stroke-dashoffset value based on the percentage of the circumference
              strokeDashOffset = circumference - ((percent * circumference) / 100);
              // Transition progress for 1.25 seconds
              $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
          }
      });
  }).trigger('scroll');

});

