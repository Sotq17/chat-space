$(document).on('turbolinks:load', function(){
    function buildMessageHTML(message) {
        if(message.image !== null) {
            var image =  '<img class="message" src= "' + message.image + '" >'
          }else {
            var image = ``;
          }
        var html =
            '<div class="message" data-id=' + message.id + '>' + 
            '<p class="message__name">' +
                message.name +
            '</p>' +
            '<p class="message__date">' +
                message.created_at +
            '</p>' +
            '<p class="message__text">' +
                message.content +
            '</p>' +
            '<br>' +
            image
        '</div>'
        return html;
    }

    $('.new_message').on("submit", function(e) {
        e.preventDefault();
        var formData = new FormData(this);
        $('.form__submit').removeAttr('data-disable-with');
        //  追加（二度クリック可）

        var url = $(this).attr('action')
        $.ajax({
            url: url,
            type: "POST",
            data: formData,
            dataType: 'json',
            processData: false,
            contentType: false,
        })
        .done(function(message){
            var html = buildMessageHTML(message);
            $('.messages').append(html)
            $('.input_new_message').val('')
            $('#message_image').val('')
            $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight},'fast');
             // 投稿時にスクロールで一番下まで
        })
        .fail(function() {
            alert('メッセージを入力してください');
        });
    });
});