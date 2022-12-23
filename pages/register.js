const { I } = inject();

module.exports = {
  registerHeaderText: 'Регистрация',
  firstNameField: { xpath: '//*[@id="input-firstname"]' },

  verifyRegisterAccountText() {
    I.see(this.registerHeaderText);
  },

  fillFirstName(name) {
    I.fillField({ xpath: '//*[@id="input-firstname"]' }, name)
  }
}
