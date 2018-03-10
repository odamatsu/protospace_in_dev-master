$(function(){
  function buildHTML(comment){
    var html = `<p>
                  <strong>
                    ${comment.avatar}
                    ${comment.name}
                    ：
                  </strong>
                  ${comment.text}
                </p>`
    return html;
  }
  $("投稿ボタン").on('submit', function(e){
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
      $('.comment_list').append(html)
      $('textform-control').val('')
    })
  })
});
