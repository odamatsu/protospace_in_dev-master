$(function(){
  //画像ファイルプレビュー表示のイベント追加 fileを選択時に発火するイベントを登録
  $('form').on('change', 'input[type="file"]', function(e) {
    if($(".preview")){
      $(".preview").remove();
    }
    var file = e.target.files[0];
    var reader = new FileReader();
    var $preview = $("#main_image_uploader");
    var t = this;
    // 画像ファイル以外の場合は何もしない
    if(file.type.indexOf("image") < 0){
      return false;
    }

    // ファイル読み込みが完了した際のイベント登録
    reader.onload = (function(file) {
      return function(e) {
        //既存のプレビューを削除
        // $preview.empty();
        // .prevewの領域の中にロードした画像を表示するimageタグを追加
        $preview.append($('<img>').attr({
                  src: e.target.result,
                  height: "500px",
                  class: "preview",
                  title: file.name
              }));
      };
    })(file);
    // debugger
    // $("#prototype_captured_images_attributes_0_content").prop("disabled", false);
    reader.readAsDataURL(file);
  });

});


