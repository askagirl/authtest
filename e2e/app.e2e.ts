import { AuthtestPage } from './app.po';

describe('authtest App', function() {
  let page: AuthtestPage;

  beforeEach(() => {
    page = new AuthtestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('authtest works!');
  });
});
