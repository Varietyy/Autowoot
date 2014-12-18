var baseUrl = "https://github.com/Varietyy/Autowoot/new/master";
var wooting = true;

function startWooting() {
	stopWooting();

	API.on(API.DJ_ADVANCE, DJ_ADVANCE_LISTENER);
	wootSong();

	var css = document.createElement("style");
	css.type = "text/css";
	css.setAttribute('id', 'autowooter-css');
	css.innerHTML = "#autowooter-button { left: 213px; } .autowooter-icon-on { position: absolute; width: 30px; height: 30px; background: url(" + baseUrl + "/icon_on.png); } .autowooter-icon-off { position: absolute; width: 30px; height: 30px; background: url(" + baseUrl + "/icon_off.png); }";
	document.body.appendChild(css);

	$('#chat-header').append('<div id="autowooter-button" class="chat-header-button"><i class="autowooter-icon autowooter-icon-on"></i></div>');
	
	API.chatLog("Variety's Autowoot ♥");
	API.chatLog("Click the 'W' icon above the chat box to toggle.");

	$("#autowooter-button").click(function() {
		if(wooting) {
			$("#autowooter-button").html('<i class="autowooter-icon autowooter-icon-off"></i>');
		} else {
			$("#autowooter-button").html('<i class="autowooter-icon autowooter-icon-on"></i>');
		}
		wooting = !wooting;
		wootSong();
	});
}

function stopWooting() {
	API.off(API.DJ_ADVANCE, DJ_ADVANCE_LISTENER);
	wootSong();
	$('#autowooter-js').remove();
	$('#autowooter-css').remove();
	$('#autowooter-button').remove();
}

function DJ_ADVANCE_LISTENER(obj) {
	wootSong();
}

function wootSong() {
	if(wooting) {
		$("#woot").click();
	}
}

startWooting();
