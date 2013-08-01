"use strict";

require.config({
	baseUrl: '../',
	paths: {
		angular: 'js/libs/angular/angular',
		jQuery: 'js/libs/jquery/jquery'
	},
	urlArgs: 'v=0.01'
});

require([
	'angular',
	'jQuery',

	'app',
	'js/widgets/layout/layout'
], function(angular, $, app){

	angular.bootstrap(document, ['Application']);
});
