$(function() {
  $('.btn-popular').click(function(e) {
    e.preventDefault();
    window.location = '/';
			 $.ajax({
        url: "/",
        type: "GET",
        dataType: "json",
			 })

  });

  $('.btn-newest').click(function() {
    window.location = 'prototypes/newest';
  });
});
