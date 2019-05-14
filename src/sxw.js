/*
* SXW.js
* A simple javascript to print self XSS warning
* GitHub    : https://github.com/sxw-js/sxw-js
* Website   : https://sxw.js.org/
* Version   : v1.1.0 (2019-May-14)
* License   : MIT license (http://www.opensource.org/licenses/mit-license.php)
*/

;(function (g) {

    'use strict'

    var sxwjs = {
        config: {
            stopColor: "red",
            warningText: "\n\nThis section is intended for developers only. Don't copy paste anything in this area.\nIf someone told you to copy and paste something here, it is a scam and will give them access to your account. In that case, kindly report this to our support team."
        }
    };

    // This function prints a huge stop sign in the console
    function printStop() {
        console.log("%c*********  *********  *********  *********\n***           ***     ***   ***  ***   ***\n***           ***     ***   ***  ***   ***\n*********     ***     ***   ***  *********\n      ***     ***     ***   ***  ***\n      ***     ***     ***   ***  ***\n*********     ***     *********  ***", "color:" + sxwjs.config.stopColor + "; font-weight:900;");
    }

    // This function prints a caution notice followed by a detailed warning text
    function printWarningText() {
        console.log("%cCaution: DO NOT PROCEED.", "font-weight:bold; font-size:15px;", sxwjs.config.warningText);
    }

    // This function prints all the warnings including STOP sign, caution notice and warning text
    function printWarning() {
        printStop();
        printWarningText();
    }
    
    // this assigning is done so that even when printStop and printWarningText are overridden printWarning remains unaffected
    sxwjs.printStop = printStop;
    sxwjs.printWarningText = printWarningText;    
    sxwjs.printWarning = printWarning;

    // assinging sxwjs to window or global or the empty object that is passed
    g.sxwjs = sxwjs;
    
})(window || global || {});
// an empty object is passed in the absense of window or glbal to avoid errors
