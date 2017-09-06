$(function() {
  $('#photo').on('dragover', function(e) {
    return false;
  });
 
  $('#photo').on('drop', function(e) {
     onDropFile(e);
     return false;
  });
});
 
function onDropFile(event) {
  var $photoArea = $('#photo');
  var $thumbArea = $('#thumb');
  $thumbArea.empty();
 
  var $span = $photoArea.find('span');
  $span.css('color', '#000000');
 
  var file = event.originalEvent.dataTransfer.files[0];
  if(!file.type.match(/^image\/(jpeg|png)$/)) {
    $span.css('color', '#ff0000').html("JPEGまたはPNGファイルを指定してください。");
    return;
  }
 
  $span.empty();
  var reader = new FileReader();
  reader.onload = function(e) {
    // オリジナルの画像データ(data:image/jpeg;base64,xxxxx形式の文字列)
    var dataUrl = e.target.result;
 
    createThumbnail(dataUrl, function(thumbnail) {
      var $img = $('<img />');
      $img.attr('src', thumbnail);
      $thumbArea.append($img);
    });
  }
  reader.readAsDataURL(file);
}
 
function createThumbnail(dataUrl, callback) {
  // サムネイル領域のサイズ
  var thumbAreaWidth = $('#photo').width();
  var thumbAreaHeight = $('#photo').height();
 
  var image = new Image();
  image.onload = function() {
    //画像がはみださないようにサイズ調整
    var maxSize = Math.max(thumbAreaWidth, thumbAreaHeight);
    var w = image.width;
    var h = image.height;
 
    if(image.width > thumbAreaWidth) {  
      var scale = thumbAreaWidth / image.width;          
      w = parseInt(image.width * scale);
      h = parseInt(image.height * scale);
    }else{ 
      if(image.hight > thumbAreaHeight) {  
        var scale = thumbAreaHeight / image.height;          
        w = parseInt(image.width * scale);
        h = parseInt(image.height * scale);
      }
    }
 
    // サムネイルを作成
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = w;
    canvas.height = h;
    ctx.drawImage(image, 0, 0, w, h);
 
    callback(canvas.toDataURL());
  }
  image.src = dataUrl;

/*
  //セレクトボックスの値を#thumbのクラスに割り当て
  $('[name=selectBox]').change(function() 
  {
    var val = $('[name=selectBox]').val();
    $("#thumb").removeClass().addClass(val);
  })
*/
//レンジの値の反映
  $('input[type="range"]').change(function() {
    var range = this;
    var fx = range.id;
    var unit = range.dataset.unit || 'px';
    var value = range.value + unit;
    $('#thumb').css('filter', fx + '(' + value + ')');
    showCurrentValue(this, value);
  }).each(function() {
    var range = this;
    var unit = range.dataset.unit || 'px';
    var value = range.value + unit;
    showCurrentValue(this, value);
  });

  function showCurrentValue(range, value) {
    var $range = $(range);
    var result = $range.siblings('.current-value');
    result.text('[' + value + ']');
  }

}

//新規ウィンドウに出力
function OpenWindow(){
    window.open("sorce.html","source","width=500px,height=550px,resizable=yes,scrollbars=yes");
}


