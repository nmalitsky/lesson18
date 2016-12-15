'use strict';

describe('test login form', function() {

	describe('when submit form', function() {

		beforeEach(function() {
		  browser.get('index.html#!/view1');
		});

		it('should disbale submit button after click and enable it after return result of XHR', function() {
			element(by.model('vm.login')).sendKeys('qwe');
			element(by.model('vm.password')).sendKeys('qwe');
			element(by.id('btnSubmit')).click();

			browser.ignoreSynchronization = true;
			browser.waitForAngular();
			browser.sleep(500);
  			expect(element(by.id('btnSubmit')).isEnabled()).toBeFalsy();
			browser.ignoreSynchronization = false;

			browser.ignoreSynchronization = true;
			browser.waitForAngular();
			browser.sleep(4000);
  			expect(element(by.id('btnSubmit')).isEnabled()).toBeTruthy();
			browser.ignoreSynchronization = false;
  		});
	})

});