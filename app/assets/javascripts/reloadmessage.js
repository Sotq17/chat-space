$(document).on('turbolinks:load', function () {
    function ReloadMessage(message) {
        if(message.image) {
            var image =  '<img class="message" src= "' + message.image + '" >'
          }else {
            var image = ``;
          };
        var html =
            '<div class="message" data-id=' + message.id + '>' +
                '<p class="message__name">' +
                    message.name +
                '</p>' +
                '<p class="message__date">' +
                    message.date +
                '</p>' +
                '<p class="message__text">' +
                    message.content +
                '</p>' +
                '<br>' +
                image
            '</div>'
        return html;
    }
    // HTMLを作成し、ReloadMessageの引数として返す

    function ScrollToNewMessage(){
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
    }

    $(function(){
      if (location.pathname.match(/\/groups\/\d+\/messages/)) {
      setInterval(update, 5000);
      }
    });
    // ５秒ごとにUpdateを動かす
    function update(){
      if($('.message')[0]){
        var message_id = $('.message:last').data('id');
      } else {
        return false
      }

      $.ajax({
        url: location.href,
        type: 'GET',
        data: { id : message_id },
        dataType: 'json'
      })
      .done(function(data){
        if (data.length){
        $.each(data, function(i, data){
          var html = ReloadMessage(data);
          $('.messages').append(html)
          ScrollToNewMessage();
        })
      }
      })
      .fail(function(){
        alert('自動更新に失敗しました')
      })
    }
  })
