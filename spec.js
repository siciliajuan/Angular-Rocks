describe('Angular Rocks tests E2E', function() {

  it('route tests', function() {
  	browser.get('http://localhost/Kubide/#/');
    expect(browser.getTitle()).toEqual('Angular Rocks');
  });
  
});