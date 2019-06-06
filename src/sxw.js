/**
* @name         SXW.js
* @description  A simple javascript to print self XSS warning
* @gitHub       https://github.com/sxwjs/sxwjs
* @website      https://sxw.js.org/
* @version      v2.0.0 (2019-May-20)
* @license      MIT license (http://www.opensource.org/licenses/mit-license.php)
* @author       Ref: https://github.com/sxwjs/sxwjs/graphs/contributors
*/

/**
* @description The template is based on https://github.com/umdjs/umd/blob/master/templates/returnExports.js
*/

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD.
        // Register as an anonymous module.
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node modules
        // Does not work with strict CommonJS, but only CommonJS-like environments that support module.exports, like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.sxwjs = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {

    // Return a value to define the module export.

    var sxwjs = {
    };

    sxwjs.config = {
        stopColor: "red",
        warningText: "This section is intended for developers only. Don't copy paste anything in this area.\nIf someone told you to copy and paste something here, it is a scam and will give them access to your account. In that case, kindly report this to our support team."
    }

    /**
     * @description This function prints a huge stop sign in the console
     */
    function printStop() {
        console.log("%c*********  *********  *********  *********\n***           ***     ***   ***  ***   ***\n***           ***     ***   ***  ***   ***\n*********     ***     ***   ***  *********\n      ***     ***     ***   ***  ***\n      ***     ***     ***   ***  ***\n*********     ***     *********  ***", "color:" + sxwjs.config.stopColor + "; font-weight:900;");
    }

    /**
     * @description This function prints a caution notice followed by a detailed warning text
     */
    function printWarningText() {
        console.log("%cCaution: DO NOT PROCEED.\n\n", "font-weight:bold; font-size:15px;", sxwjs.config.warningText);
    }

    /**
     * @description This function prints all the warnings including STOP sign, caution notice and warning text
     */
    function printWarning() {
        printStop();
        printWarningText();
    }

    // this assigning is done so that even when printStop and printWarningText are overridden printWarning remains unaffected
    sxwjs.printStop = printStop;
    sxwjs.printWarningText = printWarningText;
    sxwjs.printWarning = printWarning;

    return sxwjs;
}));
