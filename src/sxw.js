/*
* SXW JS
* A simple javascript to print self XSS warning
* GitHub    : https://github.com/sxw-js/sxw-js
* Version   : v0.0.1 (2019-May-10)
* License   : MIT license (http://www.opensource.org/licenses/mit-license.php)
*/

window.sxwjs = {};
window.sxwjs.printXssWarning = function printXssWarning() {
    console.log("%c*********  *********  *********  *********\n***           ***     ***   ***  ***   ***\n***           ***     ***   ***  ***   ***\n*********     ***     ***   ***  *********\n      ***     ***     ***   ***  ***\n      ***     ***     ***   ***  ***\n*********     ***     *********  ***", "color: red; font-weight:bold;");
    console.log("%cDO NOT PROCEED.", "font-weight:bold; font-size:15px;", "\n\nThis section is intended for developers only. Don't copy paste anything in this area.\nIf someone told you to copy and paste something here, it is a scam and will give them access to your account. In that case, kindly report this to our support team.");
}

window.sxwjs.printXssWarning();