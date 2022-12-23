/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type homePage = typeof import('./pages/home.js');
type mainPage = typeof import('./pages/main.js');
type registerPage = typeof import('./pages/register.js');
type generalPage = typeof import('./pages/general.js');
type registrationPage = typeof import('./pages/registration.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, homePage: homePage, mainPage: mainPage, registerPage: registerPage, generalPage: generalPage, registrationPage: registrationPage }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
