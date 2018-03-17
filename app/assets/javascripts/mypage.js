$(function (){

    function buildHTML(data) {
      var html = "<a></a>"
      return html;
    }

  // $(".dropdown-btns").on("click", function(e){
  //   var prototype_id = $(this).attr("value");
  //   var html = buildHTML(prototype_id);
  //   var nextClass = $(this).next().prop("class");
  //   if (nextClass !== "dropdown_menu_list"){
  //     $("button[value='" + prototype_id + "']").append(html);
  //   }
  // });
  //
  // $(document).click(function(e) {
  //   if(!$(e.target).closest('.dropdown-btns').length) {
  //     $(".dropdown_menu_list").remove();
  //   }
  // });
  $(document).click(function(e) {
    if($(e.target).closest('.dropdown-btns').length) {
      if($(".dropdown_menu_list").attr("value") !== $(e.target).attr("value")){
        $(".dropdown_menu_list").remove();
      }
    }
  });

  $(document).on("click", function(e){
    if ($(e.target).closest(".dropdown-btns").length){

      var prototype_id = $(e.target).attr("value");
      var html = buildHTML(prototype_id);
      var nextClass = $(e.target).next().prop("class");
      if (nextClass !== "dropdown_menu_list"){
        $("button[value=" + prototype_id + "]").after(html);
      }
    } else {
      $(".dropdown_menu_list").remove();
    }
  });

});
