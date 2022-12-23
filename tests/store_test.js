const general = require("../pages/general");
const registration = require("../pages/registration");

let registrationUser = {
    firstName: 'Roman',
    lastName: 10,
    email: 'roma5.onyshchenko@gmail.com',
    phone: '+380661013111',
    password: 'abcd',
    confirmPassword: 'abcd',
    isNews: false,
    iAgree: true
};     

Feature('store');

Scenario('test something', ({ I, generalPage, registrationPage }) => {
    I.amOnPage('http://opencart.qatestlab.net/index.php');
    generalPage.openRegistrationPage();
    I.see('Регистрация');
    registrationPage.verifyRegisterAccountText();
    registrationPage.fillRegistrationDetails(registrationUser);
    pause();
});

xScenario('grab something', async ({ I }) => {
    I.amOnPage('http://opencart.qatestlab.net/index.php?route=product/product&product_id=35');
    I.waitForVisible({ xpath: '//*[@id="content"]/div[1]/div[2]/div/h2' });
    let price = await I.grabTextFrom({ xpath: '//*[@id="content"]/div[1]/div[2]/div/div[1]/span' })
    console.log(price);
    pause();
}).tag('grab');
