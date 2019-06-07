# SXW.js

#### About
SXW.js is a javascript library that is used to display console warnings against Self XSS attacks.

[![Website](https://img.shields.io/badge/website-sxw.js.org%2F-%230375b4.svg?style=flat-square&logo=mozilla%20firefox)](https://sxw.js.org/)
[![GitHub License](https://img.shields.io/github/license/sxwjs/sxwjs.svg?style=flat-square&logo=github)](https://github.com/sxwjs/sxwjs/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues-raw/sxwjs/sxwjs.svg?logo=github&style=flat-square)](https://github.com/sxwjs/sxwjs/issues)
[![GitHub release](https://img.shields.io/github/release/sxwjs/sxwjs.svg?style=flat-square&logo=github)](https://github.com/sxwjs/sxwjs/releases)

#### Build Status
[![Build Status](https://img.shields.io/azure-devops/build/sxw-js/sxw-js/1.svg?label=Build%3A%20Azure%20Pipelines&style=flat-square&logo=azuredevops)](https://dev.azure.com/sxw-js/sxw-js/_build/latest?definitionId=1&branchName=master)

#### Available in
[![npm](https://img.shields.io/npm/v/@sxwjs/sxwjs.svg?style=flat-square&logo=npm)](https://www.npmjs.com/package/@sxwjs/sxwjs)
[![Nuget](https://img.shields.io/nuget/v/sxw.js.svg?style=flat-square&logo=nuget)](https://www.nuget.org/packages/sxw.js/)

## Usage

#### Using npm
 1. Install the [npm package](https://www.npmjs.com/package/@sxwjs/sxwjs) using
    ```bash
    npm i @sxwjs/sxwjs
    ```
 2. Import sxwjs module
 3. Call the required function inside sxwjs module
    ```typescript
    import sxwjs from '@sxwjs/sxwjs';
    ...
    ...
    sxwjs.printWarning();
    ```

#### Using js file directly

 1. Include the sxw.js file in your website.
 2. The script will register built-in functions into `window.sxwjs` object.
 3. At the end of the HTML document call the printWarning function in `window.sxwjs` as shown in the sample code.
    ```javascript
    <script>
        window.sxwjs.printWarning();
    </script>
    ```

#### Using nuget
 1. Install the [nuget package](https://www.nuget.org/packages/sxw.js/)
 2. Include the sxw.js file from the content folder into your website.
 3. At the end of the HTML document call the printWarning function in `window.sxwjs` similar to the one mentioned above.


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
warningText | This section is intended for developers only. Don't copy paste anything in this area.\nIf someone told you to copy and paste something here, it is a scam and will give them access to your account. In that case, kindly report this to our support team. | The content of the detailed error message

These variable can be customized to suit your website needs.

##### Functions

There are three functions in the library that will be available into the `window.sxwjs` object.
 1. `printStop` - Prints just the huge stop sign
 2. `printWarningText` - Prints the caution sign and the detailed error message
 3. `printWarning` - prints all the three sections

None of these functions are called by default. You can choose to call them as you wish.

### Credits & Thanks

#### Contributors
 1. [Kolappan Nathan](https://kolappannathan.github.io/)
 2. Shivaraj Naidu

#### Services used
We thank the following services for providing free services to Open Source Projects,

 1. Github for free code hosting and free website using [GitHub pages](https://pages.github.com/).
 2. [js.org](https://js.org/) for providing subdomain under js.org.
 3. [Shields.io](https://shields.io/) for those beatutiful status icons.
 4. [Azure Devops](https://dev.azure.com) for free CI/CD.

#### GitHub bots
 1. [ImgBot](https://imgbot.net/) - Automatic ocmpression of our images
 2. [Pull](https://probot.github.io/apps/pull/) - Automatically update forked repos

#### Tools used
 1. The logo and other images are created using [Adobe Spark](https://spark.adobe.com/).
