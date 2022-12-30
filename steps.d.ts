/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type homePage = typeof import('./pages/home.js');
type mainPage = typeof import('./pages/main.js');
type registerPage = typeof import('./pages/register.js');
type generalPage = typeof import('./pages/general.js');
type registrationPage = typeof import('./pages/registration.js');
type productPage = typeof import('./pages/product.js');
type checkoutPage = typeof import('./pages/checkout.js');
type ChaiWrapper = import('codeceptjs-chai');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, homePage: homePage, mainPage: mainPage, registerPage: registerPage, generalPage: generalPage, registrationPage: registrationPage, productPage: productPage, checkoutPage: checkoutPage }
  interface Methods extends Playwright, ChaiWrapper {}
  interface I extends ReturnType<steps_file>, WithTranslation<ChaiWrapper> {}
  namespace Translation {
    interface Actions {}
  }
}
