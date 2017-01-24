import { Ng2UploadfilePage } from './app.po';

describe('ng2-uploadfile App', function() {
  let page: Ng2UploadfilePage;

  beforeEach(() => {
    page = new Ng2UploadfilePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
