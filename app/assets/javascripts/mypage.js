$(function (){

    function buildHTML(data) {
      var html = `
        <ul class="dropdown_menu_list">
          <li>
            <a rel="nofollow" data-method="delete" href="/prototypes/${data}">Delete
            </a>
          </li>
          <li>
            <a href="/">Edit
            </a>
          </li>
        </ul>
      `
      return html;
    }

  $("#dropdownMenu").on("click", function(){
    var prototype_id = $(this).attr("value");
    var html = buildHTML(prototype_id);
    var nextClass = $(this).next().prop("class");
    if (nextClass === "dropdown_menu_list"){
      $(".dropdown_menu_list").remove();
    } else {
      $("#actionMenu").append(html);
    }
  });

  // $("body").on("click", function(e){
  //     var clickedElement = $(e.target);
  //     if($(clickedElement).hasClass("body")){
  //         $("body").fadeOut();
  //     }
  // });

});
