'use strict';

describe('test login form', function() {

	describe('when submit form', function() {

		beforeEach(function() {
			browser.get('index.html#!/view1');
		});

		it('should disable submit button for click', function() {
			element(by.model('vm.login')).sendKeys('qwe');
			element(by.model('vm.password')).sendKeys('qwe');
			expect(element(by.id('btnSubmit')).isEnabled()).toBeTruthy();
		});
	})

});