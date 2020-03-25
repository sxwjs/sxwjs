/**
* @name         SXW.js
* @description  A simple javascript library to print self XSS warning
* @gitHub       https://github.com/sxwjs/sxwjs
* @website      https://sxw.js.org/
* @version      v4.0.0 (2020-Mar-24)
* @license      MIT license (https://opensource.org/licenses/mit-license.php)
* @author       Kolappan Nathan
*/

/**
* @description The template is based on https://github.com/umdjs/umd/blob/master/templates/returnExports.js
*/

(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        // AMD.
        // Register as an anonymous module.
        define([], factory);
    } else if (typeof module === "object" && module.exports) {
        // Node modules
        // Does not work with strict CommonJS, but only CommonJS-like environments that support module.exports, like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.sxwjs = factory();
    }
}(typeof self !== "undefined" ? self : this, function () {

    var config = {
        stopColor: "red",
        stopFontWeight: "bold",
        cautionFontWeight: "bold",
        cautionFontSize: "15px",
    };

    var content = {
        en: {
            stopText: "*********  *********  *********  *********\n***           ***     ***   ***  ***   ***\n***           ***     ***   ***  ***   ***\n*********     ***     ***   ***  *********\n      ***     ***     ***   ***  ***\n      ***     ***     ***   ***  ***\n*********     ***     *********  ***",
            cautionText: "Caution: DO NOT PROCEED.",
            warningText: "This section is intended for developers only. Don't copy paste anything in this area.\nIf someone told you to copy and paste something here, it is a scam and will give them access to your account. In that case, kindly report this to our support team."
        }
    };

    //#region [Printing functions]

    /**
     * @description This function prints a huge stop sign in the console
     * @param {string} lang Language Code (ex: en)
     */
    function printStop(lang) {
        console.log("%c" + content[lang].stopText, "color:" + config.stopColor + "; font-weight:" + config.stopFontWeight + ";");
    }

    /**
     * @description This function prints the caution notice
     * @param {string} lang Language Code (ex: en)
     */
    function printCautionNotice(lang) {
        console.log("%c" + content[lang].cautionText, "font-weight:" + config.cautionFontWeight + "; font-size:" + config.cautionFontSize + ";");
    }

    /**
     * @description This function prints a detailed warning text
     * @param {string} lang Language Code (ex: en)
     */
    function printWarningText(lang) {
        console.log(content[lang].warningText);
    }

    /**
     * @description This function prints all the warnings including STOP sign, caution notice and warning text
     * @param {string} lang Language Code (ex: en)
     */
    function printWarning(lang) {
        printStop(lang);
        printCautionNotice(lang);
        printWarningText(lang);
    }

    //#endregion [Printing functions]

    //#region [Get Set functions] 

    function setConfig(userConfig){
        config = userConfig;
    }

    function getConfig(){
        return config;
    }

    function setContent(userContent){
        content = userContent;
    }

    function getContent(){
        return content;
    }

    //#endregion [Get Set functions] 

    // Return a value to define the module export.
    var sxwjs = {
    };

    // this assigning is done so that even when printStop and printWarningText are overridden printWarning remains unaffected
    sxwjs.printStop = printStop;
    sxwjs.printCautionNotice = printCautionNotice;
    sxwjs.printWarningText = printWarningText;
    sxwjs.printWarning = printWarning;

    sxwjs.setConfig = setConfig;
    sxwjs.getConfig = getConfig;
    sxwjs.setContent = setContent;
    sxwjs.getContent = getContent;

    return sxwjs;
}));
