const STORE_URL = 'http://opencart.qatestlab.net/index.php';
const signInButton = { xpath: '//*[@id="stuck"]/div/div/div/div/div/div/div/div/ul/li[10]/a'};
const emailField = { css: '#input-email' };
const passwordField = { css: '#input-password' };
const submitButton = { xpath: '//input[@type = "submit"]' };

module.exports = function() {
  return actor({
      openStore() {
        this.amOnPage(STORE_URL);
    },
    
    login(user) {
      this.openStore();
      this.click(signInButton);
      this.fillField(emailField, user.email);
      this.fillField(passwordField, user.password);
      this.click(submitButton);
    }
  });
}
