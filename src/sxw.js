/*
* SXW.js
* A simple javascript to print self XSS warning
* GitHub    : https://github.com/sxw-js/sxw-js
* Version   : v1.0.0 (2019-May-10)
* License   : MIT license (http://www.opensource.org/licenses/mit-license.php)
*/

window.sxwjs = {
    config: {
        stopColor: "red",
        warningText: "\n\nThis section is intended for developers only. Don't copy paste anything in this area.\nIf someone told you to copy and paste something here, it is a scam and will give them access to your account. In that case, kindly report this to our support team."
    }
};

window.sxwjs.printStop = function () {
    console.log("%c*********  *********  *********  *********\n***           ***     ***   ***  ***   ***\n***           ***     ***   ***  ***   ***\n*********     ***     ***   ***  *********\n      ***     ***     ***   ***  ***\n      ***     ***     ***   ***  ***\n*********     ***     *********  ***", "color:" + window.sxwjs.config.stopColor + "; font-weight:900;");
}

window.sxwjs.printWarningText = function () {
    console.log("%cCaution: DO NOT PROCEED.", "font-weight:bold; font-size:15px;", window.sxwjs.config.warningText);
}

window.sxwjs.printWarning = function () {
    window.sxwjs.printStop();
    window.sxwjs.printWarningText();
}
