// ==UserScript==
// @name         Protobot
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Automatically answers questions in protobowl. Use the f, j, or q key to manually answer if the bot is stuck.
// @author       Nnamdi Obi
// @match        https://*.protobowl.com/*
// @grant        none
// ==/UserScript==

    console.log("Bot online");

const node = document.getElementById("history");

const config = {
    attributes: false,
    childList: true,
    subtree: false
}

// listens for when the question starts and starts the bot
let observer = new MutationObserver((mutationsList) => {

    for (let mutation of mutationsList) {

        // picking up only additions to the DOM
        if (mutation.type == "childList" && mutation.addedNodes.length > 0) {
            console.log("cycle");
            setTimeout(startGuess(), 1000);
        };

    }

});

// synchronous wrapper to make sure bot doesn't crash anything
function startGuess() {

    guess().then(complete => {
        if (!complete) setTimeout(startGuess, 2000);
        else return;
    });

}

// starts the listener
observer.observe(node, config);

function guess() {

    return new Promise((resolve, reject) => {


                let answer = $o.answer.replace(/ *\[[^\]]*]/,"").replace(/"(.*?(\s)*?)*?"/,"").replace(/ *\[[^)]*\ */g,"").replace("{","").replace("}","").replace("\"","");

                console.log("Bot> Found answer: " + answer);




                // buzz in
                setTimeout(() => buzzin(answer), 100);



                // press "next" with a small delay so it'll work
                let e = $.Event( "keydown", {keyCode: 78, which: 78});
                setTimeout(() => $("body").trigger(e), 100);

                resolve(true);

        })

    };

function buzzin(answer) {
$(".buzzbtn").click();
                $(".guess_input").val(answer);
                $(".guess_form").submit();
console.log("buzz");
}


function stopBot() {

    console.log("Bot> Bye");
    observer.disconnect();

}

 document.addEventListener('keydown', function(e) {
  if (e.keyCode == 70 || e.keyCode == 81 || e.keyCode == 74){
      let answer = $o.answer.replace(/ *\[[^\]]*]/,"").replace(/"(.*?(\s)*?)*?"/,"").replace(/ *\[[^)]*\ */g,"").replace("{","").replace("}","").replace("\"","");
    $(".buzzbtn").click(),$(".guess_input").val(answer),$(".guess_form").submit()
  }
});
