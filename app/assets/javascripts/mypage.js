$(function (){

    function buildHTML(data) {
      var html = `
        <ul class="dropdown_menu_list">
          <li>
            <a rel="nofollow" data-method="delete" href="/prototypes/${data}">Delete
            </a>
          </li>
          <li>
            <a href="/prototypes/${data}/edit">Edit
            </a>
          </li>
        </ul>
      `
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

  $(document).on("click", function(e){
    if ($(e.target).closest(".dropdown-btns").length){

      var prototype_id = $(e.target).attr("value");
      var html = buildHTML(prototype_id);
      var nextClass = $(e.target).next().prop("class");

      debugger;
      if (nextClass !== "dropdown_menu_list"){
        $("button[value='" + prototype_id + "']").append(html);
      }

    }
  });

});
