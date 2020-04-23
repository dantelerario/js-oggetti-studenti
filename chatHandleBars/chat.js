// OPZIONALE (in una cartella a parte dal codice per l’esercizio degli oggetti)
// Riprodurre la piccola chat fatta insieme durante la lezione utilizzando handlerbars.

$(document).ready( function() {
  console.log('HandleBars chat ok');

  // references
  var boxMessage = $('.boxMessage');
  var btnMessage = $('.btnMessage');
  var chatBox = $('.chat');

  // handlebars
  var templateSource = $('#template').html();

  var template = Handlebars.compile(templateSource);

  btnMessage.on('click', function() {
    var messageText = boxMessage.val().trim();
    var newInputList = $('#template').clone();

    var time = new Date();
    var hour = addZero( time.getHours() );
    var minutes = addZero( time.getMinutes() );
    var timeToSend = hour + ':' + minutes;
    newInputList.children('.message-timer').text(timeToSend);

    var messageData = {
      text: messageText,
      time: timeToSend,
      messageClass: 'sent',
    }

    var chatHtml = template(messageData);

    chatBox.append(chatHtml);

    boxMessage.val('');

    var timerMessage = setTimeout(function() {
      var received = $('#template').clone();

      var time = new Date();
      var hour = addZero( time.getHours() );
      var minutes = addZero( time.getMinutes() );
      var timeToSend = hour + ':' + minutes;
      received.children('.message-timer').text(timeToSend);

      var messageDataReceived = {
        text: 'Va bene, ok',
        time: timeToSend,
        messageClass: 'received',
      }

      chatHtml = template(messageDataReceived);

      chatBox.append(chatHtml);

    }, 1000);

  });


}); /* END DOCUMENT */


//  FUNCTIONS
function addZero(number) {
    if(number < 10) {
        number = '0' + number;
    }

    return number;
}
