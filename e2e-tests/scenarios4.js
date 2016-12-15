'use strict';

describe('test login form', function() {

	describe('when login field is filled', function() {

		beforeEach(function() {
			browser.get('index.html#!/view1');
		});

		it('should enable password field for input', function() {
			element(by.model('vm.login')).sendKeys('qwe');
			expect(element(by.model('vm.password')).isEnabled()).toBeTruthy();
		});
	})

});