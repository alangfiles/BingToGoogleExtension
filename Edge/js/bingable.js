
document.addEventListener('keydown', function(e) {
    if(e.shiftKey && e.altKey && e.keyCode == 71){
        browser.runtime.sendMessage({"url": document.location.href});
    }
});