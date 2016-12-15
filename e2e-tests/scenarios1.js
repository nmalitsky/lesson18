'use strict';

describe('test login form', function() {

	describe('when enter data to login form', function() {

		beforeEach(function() {
			browser.get('index.html#!/view1');
		});

		it('should show error about required login in form', function() {
			element(by.model('vm.login')).click();
			element(by.model('vm.password')).click();
			expect(element(by.tagName('small')).getText()).toBe('Логин обязателен');
		});
	})

});