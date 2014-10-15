API.chatLog("Variety's Autowoot! Commands: /on and /off", true);
API.on(API.CHAT_COMMAND, command);
API.on(API.DJ_ADVANCE, autowoot);
$('#woot').click();

function autowoot() {
  $('#woot').click();
}

function command(value) {
    if (value == "/on") {
        API.on(API.DJ_ADVANCE, autowoot);
        $('#woot').click();
        API.chatLog("Autowoot [ON]", alert);
    }
    else if (value == "/off") {
        API.off(API.DJ_ADVANCE, autowoot);
        API.chatLog("Autowoot [OFF]", alert);
    }
}
