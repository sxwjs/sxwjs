# SXW.js
SXW.js is a javascript library that is used to display console warnings aginst Self XSS attacks.

![GitHub](https://img.shields.io/github/license/sxw-js/sxw-js.svg)
![GitHub issues](https://img.shields.io/github/issues/sxw-js/sxw-js.svg)
![GitHub release](https://img.shields.io/github/release/sxw-js/sxw-js.svg)

### Basic Usage

 1. Include the sxw.js file in your website.
 2. The script will register built-in functions into `window.sxwjs` object.
 3. At the end of the html document call the printWarning function in `window.sxwjs` as shown in the sample code.
    ```javascript
    <script>
        window.sxwjs.printWarning();
    </script>
    ```

### Customizations

##### Sections
The warning displayed in console contains three sections.
 1. A huge STOP sign
 2. A caution text in bold
 3. A detailed message saying that this section is intented for developers only. It also warns aginst copy pasting content in the console.

##### Configuration

SXW.js has a config object with the following variables,

Variable name | Default value | Description
------------ | ------------- | ---------
stopColor | red | the colour of the stop sign
warningText | \n\nThis section is intended for developers only. Don't copy paste anything in this area.\nIf someone told you to copy and paste something here, it is a scam and will give them access to your account. In that case, kindly report this to our support team. | The content of the detailed error message

These variable can be customized to suit your website needs.

##### Functions

There are three functions in the library that will be available into the `window.sxwjs` object.
 1. `printStop` - Prints just the huge stop sign
 2. `printWarningText` - Prints the caution sign and the detailed error message
 3. `printWarning` - prints all the three sections

None of these functions are called by default. You can choose to call them as you wish.
