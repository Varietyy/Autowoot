API.on(API.ADVANCE, djAdvance);
API.chatLog('Variety\'s Autowoot');
 
function djAdvance(obj) {
    setTimeout(function() {
        $('#woot').click()
    },500)
}
