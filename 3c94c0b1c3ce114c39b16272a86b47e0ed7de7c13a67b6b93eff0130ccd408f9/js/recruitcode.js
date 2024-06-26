$(document).ready(function(){
  $('input[name="募集人コード"]').on('input', function(){
    var recruitCode = '"' + $(this).val(); // 入力された値の前に " を付ける
    if (recruitCode) { // 値が存在するかどうかをチェック
      $.ajax({
        url: 'csv/data.csv',
        dataType: 'text',
        success: function(data) {
          var lines = data.split('\n');
          var found = false;
          for (var i = 0; i < lines.length; i++) {
            var parts = lines[i].split('","');
            // ダブルクォーテーションを削除
            parts = parts.map(function(part) {
              return part.replace(/^"(.*)"$/, '$1');
            });
            if (parts[0] === recruitCode) {
              $('input[name="募集人名"]').val(parts[1]);
              $('input[name="代理店名"]').val(parts[3]);
              found = true;
              break;
            }
          }
          if (!found) {
            $('input[name="募集人名"]').val('該当なし');
            $('input[name="代理店名"]').val('該当なし');
            // 該当がない場合は2つ目のテーブルを非表示にする
            $('.hide1').hide();
          } else {
            // 該当がある場合は2つ目のテーブルを表示する
            $('.hide1').show();
          }
        }
      });
    }
  });
});

$(document).ready(function() {
    // recruitcodeが入力された時の処理
    $('#recruitcode').on('input', function() {
        // recruitcodeの値を取得
        var recruitCode = $(this).val();
        // insured_urlにURLをセット
        var url = 'https://kizuna-ssi.net/?recruitcode=' + recruitCode;
        $('#insured_url').val(url);
    });
});
