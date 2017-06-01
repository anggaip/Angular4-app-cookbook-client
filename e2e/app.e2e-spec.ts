import { Angular4AppPage } from './app.po';

describe('angular4-app App', () => {
  let page: Angular4AppPage;

  beforeEach(() => {
    page = new Angular4AppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
