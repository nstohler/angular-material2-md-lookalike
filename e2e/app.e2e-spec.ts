import { AngularMaterial2MdLookalikePage } from './app.po';

describe('angular-material2-md-lookalike App', () => {
  let page: AngularMaterial2MdLookalikePage;

  beforeEach(() => {
    page = new AngularMaterial2MdLookalikePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
