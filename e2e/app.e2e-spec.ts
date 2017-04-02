import { MinesweepingPage } from './app.po';

describe('minesweeping App', () => {
  let page: MinesweepingPage;

  beforeEach(() => {
    page = new MinesweepingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
