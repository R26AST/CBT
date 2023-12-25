
$(document).ready(function() {
  setTimeout(function() {
    $('#container').addClass('loaded');
    // Once the container has finished, the scroll appears
    if ($('#container').hasClass('loaded')) {
      // It is so that once the container is gone, the entire preloader section is deleted
      $('#preloader').delay(1000).queue(function() {
        $(this).remove();
      });}
  }, 1700);});
  
  
  /*var loader = document.getElementById("preloader");
  
  window.addEventListener("load", function() {
	  loader.style.display = "none";
  });

*/
