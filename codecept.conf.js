const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost',
      show: true,
      browser: 'chromium'
    },

    "ChaiWrapper" : {
      "require": "codeceptjs-chai"
    }
  },
  include: {
    "I": "./steps_file.js",
    "homePage": "./pages/home.js",
    "mainPage": "./pages/main.js",
    "registerPage": "./pages/register.js",
    "generalPage": "./pages/general.js",
    "registrationPage": "./pages/registration.js",
    "productPage": "./pages/product.js",
    "checkoutPage": "./pages/checkout.js"
  },
  name: 'ronyshchenko'
}