// OPZIONALE (in una cartella a parte dal codice per l’esercizio degli oggetti)
// Riprodurre la piccola chat fatta insieme durante la lezione utilizzando handlerbars.

$(document).ready( function() {
  console.log('HandleBars chat ok');

  // references
  var boxMessage = $('.boxMessage');
  var btnMessage = $('.btnMessage');
  var chatBox = $('.chat');
  var storedMessages = [
    {
      text: 'Domani passo',
      time: 'ieri',
      messageClass: 'received'
    },
    {
      text: 'Ok?',
      time: 'ieri',
      messageClass: 'received'
    },
    {
      text: 'Prendi la birra',
      time: 'ieri',
      messageClass: 'sent'
    }
  ];




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

  //auto-generated chat
  var autoChat = $('#template').html();

  var autoChatTemplate = Handlebars.compile(autoChat);

    for (i = 0; i < storedMessages.length; i++) {
      var autoInputList = $('#template').clone();

      var storedMessagesChat = $('#template').clone();

      var chatHtml = template(storedMessages[i]);

      chatBox.append(chatHtml);
    }


}); /* END DOCUMENT */


//  FUNCTIONS
function addZero(number) {
    if(number < 10) {
        number = '0' + number;
    }

    return number;
}
