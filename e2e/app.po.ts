export class AuthtestPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('authtest-app h1')).getText();
  }
}
