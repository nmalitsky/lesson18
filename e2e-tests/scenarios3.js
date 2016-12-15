'use strict';

describe('test login form', function() {

	describe('when login field is empty', function() {

		beforeEach(function() {
			browser.get('index.html#!/view1');
		});

		it('should disable password field for input', function() {
			element(by.model('vm.login')).sendKeys('');
			expect(element(by.model('vm.password')).getAttribute('disabled')).toBe('true');
		});
	})

});