describe('Angular Rocks tests E2E', function() {
  it('route tests', function() {
    //browser.get('http://juliemr.github.io/protractor-demo/');
    browser.get('file:///Users/Juan/GIT/Kubide/index.html');
    expect(browser.getTitle()).toEqual('Angular Rocks');
  });
});