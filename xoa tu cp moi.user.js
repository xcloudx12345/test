// ==UserScript==
//@name     xoa tu cp mới
//@include  https://cp.chotot.com/*
//@require  http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
//@require  https://gist.github.com/raw/2625891/waitForKeyElements.js
//@grant    GM_addStyle
// ==/UserScript==
/*- The @grant directive is needed to work around a major design
    change introduced in GM 1.0.
    It restores the sandbox.
*/

waitForKeyElements ("textarea", actionFunction);

function actionFunction (jNode) {
    var res1,res2,string1,string2,re,congthuc;
    var soad= document.getElementsByTagName("textarea").length;

    //xóa nội dung//
    function xoaca2(tucanxoa)
    {
        re = new RegExp(tucanxoa, "gi"); //g (chính xác) hoặc gi (gần giống)
        var i=0;
        while(i<soad)
        {
            string2 = document.getElementsByTagName("textarea")[i].value;
            res2 = string2.replace(re, "");
            document.getElementsByTagName("textarea")[i].value = res2;
            i++;
        }
    }
    function xoatunhat()
    {
        /*function escapeRegExp(str)
    {
        return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    }
    Example
    escapeRegExp("All of these should be escaped: \ ^ $ * + ? . ( ) | { } [ ]");
    >>> "All of these should be escaped: \\ \^ \$ \* \+ \? \. \( \) \| \{ \} \[ \] "*/

        var i=0;
        while(i<soad)
        {
            string2 = document.getElementsByTagName("textarea")[i].value;
            res2 = string2.replace(/(thống |sơn |thới )?nhất/gi, function($0,$1){ return $1?$0:"";});
            document.getElementsByTagName("textarea")[i].value = res2;
            i++;
        }
    }
    function xoatuhot()
    {

        var i=0;
        while(i<soad)
        {
            string2 = document.getElementsByTagName("textarea")[i].value;
            res2 = string2.replace(/(\b)!?hot\b/gi, function($0,$1){ return $1?$0:"";});
            document.getElementsByTagName("textarea")[i].value = res2;
            i++;
        }
    }
    function xoasdt()
    {
        var i=0;
        while(i<soad)
        {
            //+84//
            string1 = document.getElementsByTagName("textarea")[i].value;
            res1 = string1.replace(/[+841]\s*[-. (]*(\d{2})[-. )]*(\d{4})[-. ]*(\d{4})(?: *x(\d+))?\s*/gi, "");
            document.getElementsByTagName("textarea")[i].value = res1;

            ////
            string1 = document.getElementsByTagName("textarea")[i].value;
            res1 = string1.replace(/[+849|+848]\s*[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{3})(?: *x(\d+))?\s*/gi, "");
            document.getElementsByTagName("textarea")[i].value = res1;

            ////
            string1 = document.getElementsByTagName("textarea")[i].value;
            res1 = string1.replace(/[01]\s*[-. (]*(\d{2})[-. )]*(\d{4})[-. ]*(\d{4})(?: *x(\d+))?\s*/gi, "");
            document.getElementsByTagName("textarea")[i].value = res1;
            
            string1 = document.getElementsByTagName("textarea")[i].value;
            res1 = string1.replace(/[01]\s*[-. (]*(\d{4})[-. )]*(\d{3})[-. ]*(\d{3})(?: *x(\d+))?\s*/gi, "");
            document.getElementsByTagName("textarea")[i].value = res1;

            string1 = document.getElementsByTagName("textarea")[i].value;
            res1 = string1.replace(/[09|08]\s*[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{3})(?: *x(\d+))?\s*/gi, "");
            document.getElementsByTagName("textarea")[i].value = res1;
            
            string1 = document.getElementsByTagName("textarea")[i].value;
            res1 = string1.replace(/[09|08]*(\d)\s*[-. (]*(\d{3})[-. )]*(\d{6})[-. ]*(?: *x(\d+))?\s*/gi, "");
            document.getElementsByTagName("textarea")[i].value = res1;
            
            string1 = document.getElementsByTagName("textarea")[i].value;
            res1 = string1.replace(/[09|08]*(\d)\s*[-. (]*(\d{3})[-. )]*(\d{5})[-. ]*(?: *x(\d+))?\s*/gi, "");
            document.getElementsByTagName("textarea")[i].value = res1;
            
            string1 = document.getElementsByTagName("textarea")[i].value;
            res1 = string1.replace(/[09|08]*(\d)\s*[-. (]*(\d{3})[-. )]*(\d{4})[-. ]*(?: *x(\d+))?\s*/gi, "");
            document.getElementsByTagName("textarea")[i].value = res1;
            
            string1 = document.getElementsByTagName("textarea")[i].value;
            res1 = string1.replace(/[09|08]*(\d)\s*[-. (]*(\d{2})[-. )]*(\d{2})[-. ]*(\d{2})[-. ]*(\d{2})[-. ]*(?: *x(\d+))?\s*/gi, "");
            document.getElementsByTagName("textarea")[i].value = res1;
            
            /*string1 = document.getElementsByTagName("textarea")[i].value;
            res1 = string1.replace(/(?:(?:https?|ftp):\/\/|\b(?:[a-z\d]+\.))(?:(?:[^\s()<>]+|\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))?\))+(?:\((?:[^\s()<>]+|(?:\(?:[^\s()<>]+\)))?\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))?/gi, "");
            document.getElementsByTagName("textarea")[i].value = res1;*/
                                 
            i++;
        }
    }

    ///xóa sđt//
    xoasdt();
    //keyword cả 2 phần//
    xoaca2("tốt nhất ");
    xoaca2("tốt nhất");
    xoaca2("duy nhất ");
    xoaca2("duy nhất");
    xoatuhot();
    /*xoaca2("hot ");
    xoaca2("hot");*/  
    xoaca2("số một ");
    xoaca2("số một");
    xoatunhat();

    jNode.css ("background", "white");
}
