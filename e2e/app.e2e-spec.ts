import { DaynilSitePage } from './app.po';

describe('daynil-site App', () => {
  let page: DaynilSitePage;

  beforeEach(() => {
    page = new DaynilSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
