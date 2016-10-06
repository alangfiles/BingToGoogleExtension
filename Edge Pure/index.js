function bingIt(){
    browser.tabs.query({ currentWindow: true, active: true }, function(tabs){
        var url = tabs[0].url;
        console.log(url);

        var vars = [], hash;
        var hashes = tablink.slice(url.indexOf('?') + 1).split('&');
        for(var i = 0; i < hashes.length; i++)
        {
          hash = hashes[i].split('=');
          vars.push(hash[0]);
          vars[hash[0]] = hash[1];
        }

        var query = vars['q'];
        if(query != undefined){
            browser.windows.create("https://www.google.com/?#q="+query.replace("+"," "));
        }

    });
}
    
////////////////////////////////////////////////////////////////////////////////

// Event binding.
document.addEventListener("pageshow", bingIt()); 