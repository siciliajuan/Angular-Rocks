describe('Angular Rocks tests E2E', function() {

  it('#/ tests', function() {
  	browser.get('http://localhost/Kubide/#/');
    expect(browser.getTitle()).toEqual('Angular Rocks');
    /*
    expect(element('h1').html()).toContain('Angular Rocks');
    expect(element('ul').html()).toContain('<ul class="ng-scope">
												<li><a ng-href="#/" href="#/">Home</a></li>
												<li><a ng-href="#/foo" href="#/foo">Foo</a></li>
												<li><a ng-href="#/bar" href="#/bar">Bar</a></li>
												<li><a ng-href="#/the-rolling-stone" href="#/the-rolling-stone">The Rolling Stone</a></li>
												<li><a ng-href="#/the-beatles" href="#/the-beatles">The Beatles</a></li>
												<li><a ng-href="#/queen" href="#/queen">Queen</a></li>
											</ul>');
	expect(element('footer').html()).toContain('<a href="https://twitter.com/juan_sicilia">@Juan_Sicilia</a>');
    expect(  getDescription()  ).toEqual('Esto es la descripción por defecto');
    expect(  getKeywords()  ).toEqual('angular, rocks, default');
	
	//Open Graph

    expect(  getOgTitle()   ).toEqual('Angular Rocks');
    expect(  getOgDescription()   ).toEqual('Esto es la descripción por defecto');
    expect(  getOgType()   ).toEqual('article');
    expect(  getOgUrl()   ).toEqual('http://localhost/Kubide/#/');
    expect(  getOgImage()   ).toEqual('');
    expect(  getOgVideo()   ).toEqual('');
    */
  });

  it('#/foo tests', function() {
  	browser.get('http://localhost/Kubide/#/foo');
    expect(browser.getTitle()).toEqual('Angular Rocks');
    /*
    expect(element('h1').html()).toContain('Angular Rocks');
    expect(element('h4').html()).toContain('En construcción');
    expect(element('footer').html()).toContain('<a href="https://twitter.com/juan_sicilia">@Juan_Sicilia</a>');
    expect().toEqual('Esto es la descripción por defecto');
    expect().toEqual('angular, rocks, default');
    
    //Open Graph

    expect(  getOgTitle()   ).toEqual('Angular Rocks');
    expect(  getOgDescription()   ).toEqual('Esto es la descripción por defecto');
    expect(  getOgType()   ).toEqual('article');
    expect(  getOgUrl()   ).toEqual('http://localhost/Kubide/#/');
    expect(  getOgImage()   ).toEqual('');
    expect(  getOgVideo()   ).toEqual('');
    */
  });

  it('#/bar tests', function() {
  	browser.get('http://localhost/Kubide/#/bar');
    expect(browser.getTitle()).toEqual('Angular Rocks');
    /*
    expect(element('h1').html()).toContain('Angular Rocks');
    expect(element('h4').html()).toContain('En construcción');
    expect(element('footer').html()).toContain('<a href="https://twitter.com/juan_sicilia">@Juan_Sicilia</a>');
    expect(  getDescription()  ).toEqual('Esto es la descripción por defecto');
    expect(  getKeywords()  ).toEqual('angular, rocks, default');
	
	//Open Graph

    expect(  getOgTitle()   ).toEqual('Angular Rocks');
    expect(  getOgDescription()   ).toEqual('Esto es la descripción por defecto');
    expect(  getOgType()   ).toEqual('article');
    expect(  getOgUrl()   ).toEqual('http://localhost/Kubide/#/');
    expect(  getOgImage()   ).toEqual('');
    expect(  getOgVideo()   ).toEqual('');
    */
  });

  it('#/the-rolling-stone tests', function() {
  	browser.get('http://localhost/Kubide/#/the-rolling-stone');
    expect(browser.getTitle()).toEqual('The Rolling Stone');
    /*
	expect(element('h1').html()).toContain('Angular Rocks');
	//content particular of this page
    expect(element('footer').html()).toContain('<a href="https://twitter.com/juan_sicilia">@Juan_Sicilia</a>');
    expect(  getDescription()  ).toEqual('Esto es la descripción por defecto');
    expect(  getKeywords()  ).toEqual('angular, rocks, default');
	
	//Open Graph

    expect(  getOgTitle()   ).toEqual('Angular Rocks');
    expect(  getOgDescription()   ).toEqual('Esto es la descripción por defecto');
    expect(  getOgType()   ).toEqual('article');
    expect(  getOgUrl()   ).toEqual('http://localhost/Kubide/#/');
    expect(  getOgImage()   ).toEqual('');
    expect(  getOgVideo()   ).toEqual('');
    */
  });

  it('#/the-beatles tests', function() {
  	browser.get('http://localhost/Kubide/#/the-beatles');
    expect(browser.getTitle()).toEqual('The Beatles');
    /*
    expect(element('h1').html()).toContain('Angular Rocks');
	//content particular of this page
    expect(element('footer').html()).toContain('<a href="https://twitter.com/juan_sicilia">@Juan_Sicilia</a>');
    expect(  getDescription()  ).toEqual('Esto es la descripción por defecto');
    expect(  getKeywords()  ).toEqual('angular, rocks, default');
	
	//Open Graph

    expect(  getOgTitle()   ).toEqual('Angular Rocks');
    expect(  getOgDescription()   ).toEqual('Esto es la descripción por defecto');
    expect(  getOgType()   ).toEqual('article');
    expect(  getOgUrl()   ).toEqual('http://localhost/Kubide/#/');
    expect(  getOgImage()   ).toEqual('');
    expect(  getOgVideo()   ).toEqual('');
    */
  });

  it('#/queen tests', function() {
  	browser.get('http://localhost/Kubide/#/queen');
    expect(browser.getTitle()).toEqual('Queen');
    /*
    expect(element('h1').html()).toContain('Angular Rocks');
    //content particular of this page
    expect(element('footer').html()).toContain('<a href="https://twitter.com/juan_sicilia">@Juan_Sicilia</a>');
    expect(  getDescription()  ).toEqual('Esto es la descripción por defecto');
    expect(  getKeywords()  ).toEqual('angular, rocks, default');
	
	//Open Graph

    expect(  getOgTitle()   ).toEqual('Angular Rocks');
    expect(  getOgDescription()   ).toEqual('Esto es la descripción por defecto');
    expect(  getOgType()   ).toEqual('article');
    expect(  getOgUrl()   ).toEqual('http://localhost/Kubide/#/');
    expect(  getOgImage()   ).toEqual('');
    expect(  getOgVideo()   ).toEqual('');
    */
  });

});