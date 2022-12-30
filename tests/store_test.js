const general = require("../pages/general");
const registration = require("../pages/registration");

let registrationUser = {
    firstName: 'Roman',
    lastName: 10,
    email: 'roma6.onyshchenko@gmail.com',
    phone: '+380661031156',
    password: 'abcd',
    confirmPassword: 'abcd',
    isNews: false,
    iAgree: true
};     

Feature('store');

Scenario('test something', ({ I, generalPage, registrationPage }) => {
    I.openStore();
    generalPage.openRegistrationPage();
    I.see('Регистрация');
    registrationPage.verifyRegisterAccountText();
    registrationPage.fillRegistrationDetails(registrationUser);
    pause();
});
