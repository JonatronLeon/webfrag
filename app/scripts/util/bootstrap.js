'use strict';
window.onload = function () {
	var $rootElement = angular.element(window.document),
	modules = [
		'ng',
		'DeFragApp',
		function($provide) {
			$provide.value('$rootElement', $rootElement);
		}
	],
	$injector = angular.injector(modules),
	$compile = $injector.get('$compile'),
	compositeLinkFn = $compile($rootElement),
	$rootScope = $injector.get('$rootScope');
	compositeLinkFn($rootScope);
	$rootScope.$apply();
};
