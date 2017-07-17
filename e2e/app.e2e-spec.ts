import { AngularForPage } from './app.po';

describe('angular-for App', () => {
  let page: AngularForPage;

  beforeEach(() => {
    page = new AngularForPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
