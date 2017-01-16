
document.addEventListener('keydown', function(e) {
    //Alt+Shift+G
    if(e.shiftKey && e.altKey && e.keyCode == 71){
        browser.runtime.sendMessage(
            {
                "url": document.location.href, 
                "searchUrl":"https://www.google.com/?#q="
            }
        );
    }
    if(e.shiftKey && e.altKey && e.keyCode == 89){
        //Alt+Shift+Y
        browser.runtime.sendMessage(
            {
                "url": document.location.href, 
                "searchUrl":"https://www.youtube.com/results?search_query="
            }
        );
    }
});