const { I } = inject();

module.exports = {
  firstNameField: 'Имя',
  lastNameField: 'Фамилия',
  nameCompanyField: {css: '#input-payment-company'},
  address1Field: {css: '#input-payment-address-1'},
  address2Field: {css: '#input-payment-address-2'},
  cityField: {css: '#input-payment-city'},
  postCodeField: {css: '#input-payment-postcode'},
  countryField: {xpath: '//*[@id="sbSelector_38158608"]'},
  country: 'Ukraine',
  regionSelect: {css: '#sbSelector_97267311'},
  regionOption: {css: '#sbOptions_97267311 > li:nth-child(2) > a'},
  paymentButton: {css: '#button-payment-address'},
  iAgreeField: {xpath: '//*[@id="agree1"]'},
  
  dostavkaSelect: {xpath: '/html/body/div[1]/div[3]/div/div/div/div[6]/div[2]/div/div[1]/table/tfoot/tr[2]/td[2]'},
  ecoTaxSelect: '#collapse-checkout-confirm > div > div.table-responsive > table > tfoot > tr:nth-child(3) > td:nth-child(2)',
  vatSelect: '#collapse-checkout-confirm > div > div.table-responsive > table > tfoot > tr:nth-child(4) > td:nth-child(2)',
  resultSelect: '#collapse-checkout-confirm > div > div.table-responsive > table > tfoot > tr:nth-child(5) > td:nth-child(2)',
  

   getProductCheckPrice() {
    let arr = [];
    let dostavka = I.grabTextFrom(this.dostavkaSelect);
    arr.push(dostavka);
    let ecoTax =  I.grabTextFrom(this.ecoTaxSelect);
    arr.push(ecoTax);
    let vat = I.grabTextFrom(this.vatSelect);
    arr.push(vat);
    let result =I.grabTextFrom(this.resultSelect);
    arr.push(result);

    return arr;
  },
async fillPaymentDetails(info) {
    let arr = [];
    I.checkOption({css: '#collapse-payment-address > div > form > div:nth-child(3) > label'});
    I.fillField(this.firstNameField, info.firstName);
    I.fillField(this.lastNameField, info.lastName);
    I.fillField(this.nameCompanyField, info.nameCompany);
    I.fillField(this.address1Field, info.address1);
    I.fillField(this.address2Field, info.address2);
    I.fillField(this.cityField, info.city);
    I.fillField(this.postCodeField, info.index);
    I.click('United Kingdom');
    I.click('Ukraine');
    I.click('--- Выберите ---');
    I.click('Kyiv');
    I.click(this.paymentButton);
    I.click('Продолжить');
    I.click('Продолжить');
    I.checkOption('#agree1');
    I.click('Продолжить');
    // let dostavka = await I.grabTextFrom('#collapse-checkout-confirm > div > div.table-responsive > table > tfoot > tr:nth-child(2) > td:nth-child(2)');
    // arr.push(parseInt(dostavka.slice(1),10));
    // let ecoTax =  await I.grabTextFrom(this.ecoTaxSelect);
    // arr.push(parseInt(ecoTax.slice(1),10));
    // let vat = await I.grabTextFrom(this.vatSelect);
    // arr.push(parseInt(vat.slice(1),10));
    // let result = await I.grabTextFrom(this.resultSelect);
    // arr.push(parseInt(result.slice(1),10));
    // console.log(arr);
    I.click('//*[@id="button-confirm"]');
    I.see('Ваш заказ принят!');
  }
}
