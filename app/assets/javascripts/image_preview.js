$(function(){
  $('form').on('change', 'input[type="file"]', function(e) {
    if($(e.target).siblings("img")){
      $(e.target).siblings("img").remove();
    }
    var file = e.target.files[0];
    var reader = new FileReader();
    var $preview = $(e.target);
    var t = this;
    if(file.type.indexOf("image") < 0){
      return false;
    }

    reader.onload = (function(file) {
      return function(e) {
        if ($preview.attr("id").match(/0/)!==null){
          $preview.after($('<img>').attr({
                    src: e.target.result,
                    width:"730px",
                    height: "500px",
                    class: "preview",
                    title: file.name
                }));
        } else {
          $preview.after($('<img>').attr({
                    src: e.target.result,
                    width:"230px",
                    height: "200px",
                    class: "preview",
                    title: file.name
                }));
        }
      };
    })(file);
    reader.readAsDataURL(file);
  });

});


