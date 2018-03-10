$(function(){
  function buildHTML(comment){
    var html = `<div class= "media">
                  <div class= "media-left">
                    <img src="${comment.img}", class="avatar_image", alt= "64x64", >
                  </div>
                  <div class= "media-body">
                    <h4 class="media-heading", id= "top-aligned-media">
                      ${comment.user_name}
                    </h4>
                    <p class="comment_text">${comment.text}</p>
                  </div>
                </div>`
    return html;
  }
  $("#new-comment").on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var href = window.location.href + '/comments'
    $.ajax({
      url: href,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('#comment_list').append(html)
      $('#comment_text').val('')
    })
  })
});
