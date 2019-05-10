/*
* SXW JS
* A simple javascript to print self XSS warning
* GitHub    : https://github.com/sxw-js/sxw-js
* Version   : v0.0.1 (2019-May-10)
* License   : MIT license (http://www.opensource.org/licenses/mit-license.php)
*/

window.sxwjs = {
    config: {
        stopColor: "red",
        supportTeam: "support team"
    }
};

window.sxwjs.warningText = "\n\nThis section is intended for developers only. Don't copy paste anything in this area.\nIf someone told you to copy and paste something here, it is a scam and will give them access to your account. In that case, kindly report this to our " + window.sxwjs.config.supportTeam + ".";

window.sxwjs.printStop = function () {
    console.log("%c*********  *********  *********  *********\n***           ***     ***   ***  ***   ***\n***           ***     ***   ***  ***   ***\n*********     ***     ***   ***  *********\n      ***     ***     ***   ***  ***\n      ***     ***     ***   ***  ***\n*********     ***     *********  ***", "color:" + window.sxwjs.config.stopColor + "; font-weight:bold;");
}

window.sxwjs.printWarningText = function () {
    console.log("%cDO NOT PROCEED.", "font-weight:bold; font-size:15px;", window.sxwjs.warningText);
}

window.sxwjs.printXssWarning = function printXssWarning() {
    window.sxwjs.printStop();
    window.sxwjs.printWarningText();
}

window.sxwjs.printXssWarning();