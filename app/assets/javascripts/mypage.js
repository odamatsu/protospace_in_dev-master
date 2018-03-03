$(function (){

    function buildHTML(data) {
      var html = `
        <ul class="dropdown-menu">
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
    $("#actionMenu").append(html);
  });

});
