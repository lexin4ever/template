requirejs.config({
	shim: {
		'js/libs/jquery/jquery-ui.min': ['js/libs/jquery/jquery.min']
	}
});

define([
	'js/libs/jquery/jquery.min',
	'js/libs/jquery/jquery-ui.min',
	'css!js/libs/jquery/smoothness/jquery-ui.custom.css'
], function () {
	console.info("jQuery: ", $.fn.jquery, "jQuery ui:", $.ui.version);
	return $;
//	return $.noConflict(true);
});