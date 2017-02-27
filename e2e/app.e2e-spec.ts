import { Ng2beyondPage } from './app.po';

describe('ng2beyond App', function() {
  let page: Ng2beyondPage;

  beforeEach(() => {
    page = new Ng2beyondPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
