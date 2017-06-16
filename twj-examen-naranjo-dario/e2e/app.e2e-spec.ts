import { TwjExamenNaranjoDarioPage } from './app.po';

describe('twj-examen-naranjo-dario App', () => {
  let page: TwjExamenNaranjoDarioPage;

  beforeEach(() => {
    page = new TwjExamenNaranjoDarioPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
