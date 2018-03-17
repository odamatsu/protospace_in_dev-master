$(function(){
  var $heart= $("#like-button img");
  $("#like-button").on("click", function(){
    var id = $(".proto-page").attr("data-id");
    var $likes_sum = $("#like-button span");
    var $sum = $likes_sum.attr("data-count");
    like_function(id,$(this),$heart,$likes_sum);
  });

  function like_function(id,button,heart,sum){
    if( button.hasClass("like") ){
      // $.ajax({
      //   url: "/prototypes/" + id + "/likes",
      //   type: "delete",
      //   dataType: "json",
      //   processData: false,
      //   contentType: false
      // })
      // .done(function(data){
        button.removeClass("like").addClass('dislike');
        heart.attr("src", "/assets/icon_heart-20100b1c862f59bb23666746a16cdbd86d418436888ef57ed262f5baa649a69c.svg");
      // })
    } else {
      // $.ajax({
      //   url: "/prototypes/" + id + "/likes",
      //   type: "post",
      //   dataType: "json",
      //   processData: false,
      //   contentType: false
      // // })
      // .done(function(data){
        button.removeClass("dislike").addClass('like');
        heart.attr("src", "/assets/icon_heart_red-65035f3e2f106cde180f2c1448bce917839fc297e339fcbcd65cf41eb92e8ec1.svg");
      // })
    }
  }

});
