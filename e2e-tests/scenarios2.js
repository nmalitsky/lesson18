'use strict';

describe('test login form', function() {

	describe('when enter data to login form', function() {

		beforeEach(function() {
			browser.get('index.html#!/view1');
		});

		it('should show error about minimal length (3) for login in form', function() {
			element(by.model('vm.login')).sendKeys('qw');
			element(by.model('vm.password')).click();
			expect(element(by.tagName('small')).getText()).toBe('Логин не менее 3 символов');
		});
	})

});