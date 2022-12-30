const general = require("../pages/general");
const registration = require("../pages/registration");

let loginUser = {
    email: 'roma5.onyshchenko@gmail.com',
    password: 'abcd',
};

let paymentInformation = {
    firstName: 'Roman',
    lastName: 'Onyshchenko',
    nameCompany: 'Epam',
    address1: 'Kyiv, Shevchenko, 10',
    address2: 'Kyiv, Shevchenko, 20',
    city: 'Kyiv',
    index: 3068,
    country: 'Ukraine',
    region: 'Kent'
};     

Feature('buy');

Scenario('buy product', async ({ I, generalPage, registrationPage, productPage, checkoutPage }) => {
    I.login(loginUser);
    I.see('Мои заказы');
    I.amOnPage('http://opencart.qatestlab.net/index.php?route=product/product&path=28&product_id=68');
    let price = await productPage.getProductPrice();
    console.log(price);
    I.assertEqual(price, '$11.00', "Prices are not match")
    await productPage.chooseProduct();
    checkoutPage.fillPaymentDetails(paymentInformation);
}).tag('buy');
