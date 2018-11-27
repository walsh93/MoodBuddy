import { MoodBuddy2Page } from './app.po';

describe('mood-buddy2 App', function() {
  let page: MoodBuddy2Page;

  beforeEach(() => {
    page = new MoodBuddy2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
