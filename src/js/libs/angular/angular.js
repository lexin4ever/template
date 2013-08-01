"use strict;"

requirejs.config({
	shim: {
		'js/libs/angular/resource': ['js/libs/angular/angular.min'],
		'js/libs/angular-ui-0.4.0/angular-ui-amd': ['js/libs/angular/angular.min'],
		'js/libs/angular/angular.min': ['jQuery']
	}
});

define([
	'js/libs/angular/angular.min',
	'js/libs/angular/resource',
	'js/libs/angular-ui-0.4.0/angular-ui-amd'
], function () {
	console.info("Angular: ", angular.version);
	return angular;
});