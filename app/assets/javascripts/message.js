$(function() {
    function buildHTML(message) {
        if(message.image !== null) {
            var image =  '<img class="message" src= "' + message.image + '" >'
          }else {
            var image = ``;
          }
        var html =
        '<li class="message">' +
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
        '</li>'
        return html;
    }

    $("form").on("submit", function(e) {
        e.preventDefault();
        console.log(this)
        $('.form__submit').removeAttr('data-disable-with');
        //  追加（二度クリック可）
        $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight});
        // 投稿時にスクロールで一番下まで
        var formData = new FormData(this);
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
            var html = buildHTML(message);
            $('.messages').append(html)
            $('.input_new_message').val('')
        })
        .fail(function() {
            alert('メッセージを送信できません');
        });
    })
})