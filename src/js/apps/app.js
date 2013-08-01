define([
	// Standard Libs
	'angular'		// lib/angular/angular
], function (angular) {
	"use strict";
	var app= angular.module('Application', ["ngResource", "ui"]);

	app.run(["$rootScope", function($rootScope){
		$rootScope.applicationReady = true;
	}]);

	return app;
});