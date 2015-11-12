describe('Angular Rocks tests E2E', function() {

  it('#/ tests', function() {
  	browser.get('http://localhost/Kubide/#/');
    expect(browser.getTitle()).toEqual('Angular Rocks');
    /*
    expect().toEqual('Esto es la descripción por defecto');
    expect().toEqual('angular, rocks, default');
    expect().toEqual('');
    expect().toEqual('');
    expect().toEqual('');

    expect().toEqual('article');
    */
  });

  it('#/foo tests', function() {
  	browser.get('http://localhost/Kubide/#/foo');
    expect(browser.getTitle()).toEqual('Angular Rocks');
    /*
    expect().toEqual('Esto es la descripción por defecto');
    expect().toEqual('angular, rocks, default');
    expect().toEqual('');
    expect().toEqual('');
    expect().toEqual('');

    expect().toEqual('article');
    */
  });

  it('#/bar tests', function() {
  	browser.get('http://localhost/Kubide/#/bar');
    expect(browser.getTitle()).toEqual('Angular Rocks');
    /*
    expect().toEqual('Esto es la descripción por defecto');
    expect().toEqual('angular, rocks, default');
    expect().toEqual('');
    expect().toEqual('');
    expect().toEqual('');

    expect().toEqual('article');
    */
  });

  it('#/the-rolling-stone tests', function() {
  	browser.get('http://localhost/Kubide/#/the-rolling-stone');
    expect(browser.getTitle()).toEqual('The Rolling Stone');
    /*
    expect().toEqual('Esto es la descripción por defecto');
    expect().toEqual('angular, rocks, default');
    expect().toEqual('');
    expect().toEqual('');
    expect().toEqual('');

    expect().toEqual('article');
    */
  });

  it('#/the-beatles tests', function() {
  	browser.get('http://localhost/Kubide/#/the-beatles');
    expect(browser.getTitle()).toEqual('The Beatles');
    /*
    expect().toEqual('Esto es la descripción por defecto');
    expect().toEqual('angular, rocks, default');
    expect().toEqual('');
    expect().toEqual('');
    expect().toEqual('');

    expect().toEqual('article');
    */
  });

  it('#/queen tests', function() {
  	browser.get('http://localhost/Kubide/#/queen');
    expect(browser.getTitle()).toEqual('Queen');
    /*
    expect().toEqual('Esto es la descripción por defecto');
    expect().toEqual('angular, rocks, default');
    expect().toEqual('');
    expect().toEqual('');
    expect().toEqual('');

    expect().toEqual('article');
    */
  });

});