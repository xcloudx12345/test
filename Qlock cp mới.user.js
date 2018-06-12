// ==UserScript==
//@name     Qlock cp mới
//@include  https://cp.chotot.com/*
//@require  http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
//@require  https://gist.github.com/raw/2625891/waitForKeyElements.js
//@grant    GM_addStyle
// ==/UserScript==
/*- The @grant directive is needed to work around a major design
    change introduced in GM 1.0.
    It restores the sandbox.
*/

waitForKeyElements ("#toast-container", actionFunction);

function actionFunction (jNode) {
    var res1,res2,string1,string2,re,congthuc;
    var soad= document.getElementsByClassName("toast-message").length;
    var chu = document.getElementsByClassName("toast-message")[0].innerHTML;
    if(chu == "EMPTY QUEUE!" || chu == "[[Please do not repeat an action so fast!]]")
    {
        window.setTimeout(function(){window.location.reload() ;},2500) ;
    }
    jNode.css ("background", "pink");
}
