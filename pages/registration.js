const { I } = inject();

module.exports = {
  registerHeaderText: 'Регистрация',
  firstNameField: {css: '#input-firstname'},
  lastNameField: {css: '#input-lastname'},
  emailField: {css: '#input-email'},
  phoneField: {css: '#input-telephone'},
  passwordField: {xpath: '//*[@id="input-password"]'},
  confirmPasswordField: {xpath: '//*[@id="input-confirm"]'},
  newsField: {css: '#content > form > fieldset:nth-child(3) > div > div > label:nth-child(2)'},
  iAgreeField: {xpath: '//*[@id="content"]/form/div/div/input[1]'},
  continueButton: {css: '#content > form > div > div > input.btn.btn-primary'},


  verifyRegisterAccountText() {
    I.see(this.registerHeaderText);
  },

  fillRegistrationDetails(user) {
    I.fillField(this.firstNameField, user.firstName);
    I.fillField(this.lastNameField, user.lastName)
    I.fillField(this.emailField, user.email);
    I.fillField(this.phoneField, user.phone)
    I.fillField(this.passwordField, user.password);
    I.fillField(this.confirmPasswordField, user.confirmPassword);
    I.checkOption(this.newsField);
    I.checkOption(this.iAgreeField);
    I.click(this.continueButton);
    I.see('Ваша учетная запись создана!');
    pause();

  }
}
