# SXW.js
[![Website](https://img.shields.io/badge/website-sxw.js.org-blue.svg?style=flat-square&logo=mozilla%20firefox)](https://sxw.js.org/)
[![GitHub License](https://img.shields.io/github/license/sxwjs/sxwjs.svg?style=flat-square)](#)
[![GitHub issues](https://img.shields.io/github/issues-raw/sxwjs/sxwjs.svg?style=flat-square)](#)
[![Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors)

#### About
SXW.js is a javascript library that is used to display console warnings against Self XSS attacks.

**Status**: [![GitHub Workflow Status](https://img.shields.io/github/workflow/status/sxwjs/sxwjs/CI?logo=github&style=flat-square)](https://github.com/sxwjs/sxwjs/actions?query=workflow%3ACI)

#### Download via
[![npm](https://img.shields.io/npm/v/@sxwjs/sxwjs.svg?style=flat-square&logo=npm)](https://www.npmjs.com/package/@sxwjs/sxwjs)
[![Nuget](https://img.shields.io/nuget/v/sxw.js.svg?style=flat-square&logo=nuget)](https://www.nuget.org/packages/sxw.js/)
[![GitHub release](https://img.shields.io/github/release/sxwjs/sxwjs.svg?style=flat-square&logo=github)](https://github.com/sxwjs/sxwjs/releases)
[![CDN]((https://img.shields.io/jsdelivr/npm/hy/@sxwjs/sxwjs?label=CDN%20-%20jsdelivr&logo=jsdelivr&logoColor=white&style=flat-square)](https://www.jsdelivr.com/package/npm/@sxwjs/sxwjs)

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

 1. Include the sxw.js file in your website either directly or via CDN.
 2. If you are using CDN try the following URL
    ```html
    <script src="https://cdn.jsdelivr.net/npm/@sxwjs/sxwjs@4.0.0/src/sxw.min.js"></script>
    ```
 3. The script will register built-in functions into `window.sxwjs` object.
 4. At the end of the HTML document call the printWarning function in `window.sxwjs` as shown in the sample code.
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
stopFontWeight | bold | Font weight for stop sign
cautionFontWeight | bold | Font weight for caution sign
cautionFontSize | 15px | Font size for caution sign

Example js object:

````js
var config = {
        stopColor: "red",
        stopFontWeight: "bold",
        cautionFontWeight: "bold",
        cautionFontSize: "15px",
    };
````

##### Content

SXW.js has a predefined object with the following variables for defining the content to be displayed,

Variable name | Default value | Description
------------ | ------------- | ---------
stopText | `*` based stop sign text | The text used to print STOP sign
cautionText | Caution: DO NOT PROCEED. | Text for caution notice
warningText | This section is intended for developers only. Don't copy paste anything in this area.\nIf someone told you to copy and paste something here, it is a scam and will give them access to your account. In that case, kindly report this to our support team. | The content of the detailed error message

````js
var content = {
        en: {
            stopText: "*********  *********  *********  *********\n***           ***     ***   ***  ***   ***\n***           ***     ***   ***  ***   ***\n*********     ***     ***   ***  *********\n      ***     ***     ***   ***  ***\n      ***     ***     ***   ***  ***\n*********     ***     *********  ***",
            cautionText: "Caution: DO NOT PROCEED.",
            warningText: "This section is intended for developers only. Don't copy paste anything in this area.\nIf someone told you to copy and paste something here, it is a scam and will give them access to your account. In that case, kindly report this to our support team."
        }
    };
````

You can define content in multiple languages as shown here. Just pass the appropriate language code to the printing function.

##### Functions

There are three functions in the library that will be available into the `window.sxwjs` object.

 1. `printStop` - Prints just the huge stop sign.
 2. `printCautionNotice` - Prints the caution notice.
 3. `printWarningText` - Prints the the detailed error message.
 4. `printWarning` - Prints all the three sections.
 5. `setConfig` - Assigns the provided configuration.
 6. `getConfig` - Retrives the configuration.
 7. `setContent` - Can be used to modifiy the content such as warningText, cautionNotice, etc...
 8. `getContent` - Retrives the content that will be displayed on the console.

None of these functions are called by default. You can choose to call them as you wish.

Example Usage:

````js
window.sxwjs.setConfig(myConfig);
window.sxwjs.printWarning('en');
window.sxwjs.printStop('en');
window.sxwjs.printCautionNotice('en');
````

### Credits & Thanks

#### Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://kolappannathan.github.io/"><img src="https://avatars2.githubusercontent.com/u/8157105?v=4" width="80px;" alt="Kolappan Nathan"/><br /><sub><b>Kolappan Nathan</b></sub></a><br /><a href="https://github.com/sxwjs/sxwjs/commits?author=kolappannathan" title="Code">💻</a> <a href="#maintenance-kolappannathan" title="Maintenance">🚧</a></td><td align="center"><a href="https://www.linkedin.com/in/shivarajnaidu"><img src="https://avatars1.githubusercontent.com/u/12374494?v=4" width="80px;" alt="yuvaraj"/><br /><sub><b>yuvaraj</b></sub></a><br /><a href="https://github.com/sxwjs/sxwjs/commits?author=shivarajnaidu" title="Code">💻</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

#### Services & Tools used

1. [Github](https://github.com) - Provides free hosting for repos and website.
2. [js.org](https://js.org) - Provides subdomain for our website.
3. [Shields.io](https://shields.io) - Provides those beatutiful status icons.
4. [Azure Devops](https://dev.azure.com/sxw-js/sxw-js) - Free CI/CD for open source projects.
5. [ImgBot](https://imgbot.net) - Automatic compression of new images
6. [Pull](https://probot.github.io/apps/pull) - Automatic update of forked repos
7. [allcontributors](https://allcontributors.org) - Helps maintaing list of contributors of the project
8. [Adobe Spark](https://spark.adobe.com) - Used to create logo, banners, etc...
