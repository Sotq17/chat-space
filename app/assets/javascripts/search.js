$(document).on('turbolinks:load', function(){
  $("#user-search-field").on("keyup", function() {
    ajaxsearch();
  });

  var search_list = $("#user-search-result");
  // 　検索結果の定義
  // var member_list = $("#chat-group-users")
  // メンバーリストの定義

  function appendUser(user){
    var html = '<div class="chat-group-user clearfix">' +
               '<p class="chat-group-user__name">' + user.name + '</p>' +
               '<a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="' + user.id + '" data-user-name="' + user.name + '" id = "add_member_btn">' +
               '追加' + '</a>' +
                '</div>'
    search_list.append(html);
  }
  // 検索結果を表示させる


  function appendErrMsgToHTML(msg) {
    var html = `<p>
                  <div id='user-search-result'>${ msg }</div>
                </p>`
    search_list.append(html);
  }
  // 検索できなかった場合のエラーを表示させる

  function ajaxsearch() {
    var input = $("#user-search-field").val();
    $.ajax({
      type: 'GET',
      url: '/users/search',
      data: {keyword: input},
      dataType: 'json'
    })

    // データ非同期通信の設定の記述

    .done(function(users) {
      $("#user-search-result").empty();
      if (users.length !== 0) {
        users.forEach(function(user){
          appendUser(user);
        });
      }
      // インクリメンタルサーチで一致する名前を取得し、引数としてappendUserに渡す

      else {
        appendErrMsgToHTML("一致するユーザーがいません");
      }
      // ユーザー検索ができない時の表示を呼び出す
    })
      .fail(function() {
        alert('ユーザー検索に失敗しました');
      });
      // エラー時の記述を表示させる
    return false;
  };
});


$(document).on("click", "#add_member_btn", function(){
  $(this).parent().remove();
  var userId = $(this).data('userId');
  var userName = $(this).data('userName');
  buildUserList(userId,userName);
});
 // メンバーリストを表示させる

function buildUserList(userId,userName) {
  var html =  `<div class='chat-group-user clearfix js-chat-member' id=${userId}>` +
              `<input name='group[user_ids][]' type='hidden' value=${userId}>` +
              `<p class='chat-group-user__name'>`+ userName +`</p>` +
              `<a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn' id = 'remove_btn'>削除</a>` +
              `</div>`;
  $("#chat-group-users").append(html);
}
// キーアップで出てきた候補を取得、buildUserListに引数として渡す

$(document).on("click","#remove_btn", function() {
  $(this).parent().remove();
 });
 // 追加ボタンで出現する削除ボタンを押すと消える