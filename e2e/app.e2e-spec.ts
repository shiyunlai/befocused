import { BefocusedPage } from './app.po';

describe('befocused App', () => {
  let page: BefocusedPage;

  beforeEach(() => {
    page = new BefocusedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
