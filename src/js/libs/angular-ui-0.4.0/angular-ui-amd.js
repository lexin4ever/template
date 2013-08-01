"use strict;"

requirejs.config({
	shim: {
		'js/libs/angular-ui-0.4.0/build/angular-ui.min': ['js/libs/angular/angular.min', 'js/libs/jquery/jquery-ui.min'],
		'js/libs/angular/angular.min': ['jQuery']
	}
});

define([
	'jQuery',
	'js/libs/angular/angular.min',
	'js/libs/jquery/jquery-ui.min',
	'js/libs/angular-ui-0.4.0/build/angular-ui.min',
	'css!js/libs/angular-ui-0.4.0/build/angular-ui.min.css'
], function () {
	return angular;
});