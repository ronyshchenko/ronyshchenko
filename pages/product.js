const { I } = inject();

module.exports = {
  priceText: {xpath: '//*[@id="content"]/div[1]/div[2]/div/div[1]/span'},
  
  
  async getProductPrice() {
    return await I.grabTextFrom(this.priceText);
  },

  chooseProduct() {
    I.click('Купить');
    I.click({xpath: '//*[@id="cart-total2"]'});
    I.click({css: '#cart > ul > li.btns > div > a.btn-primary.btn-r'});
    I.see('Оформление заказа');
  }
}
