$(function(){
  function buildHTML(comment){
    var html = `<img src="${comment.img}">
                ${comment.text}
                ${comment.user_name}
                `
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
