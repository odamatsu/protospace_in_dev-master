$(function() {
  $('.btn-popular').click(function() {
    window.location = '/';
      // e.preventDefault();
   //    $.ajax({
   //      url: "/",
   //      type: "GET",
   //      dataType: "json",
   //      data: {  }
			// });
   //    .done(function(data) {
   //      console.log(data);
   //    })
  });

  $('.btn-newest').click(function() {
    window.location = 'prototypes/newest';
  });
});
