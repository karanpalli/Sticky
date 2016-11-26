var $ = jQuery.noConflict();

$(document).ready(function () {
	stickyHeader();
});

function stickyHeader() {
	var scrollPos = $(window).scrollTop();
	if (scrollPos > $("header").outerHeight()) {
		$('body').addClass("stickHeader affix");
	} else {
		$('body').removeClass("stickHeader affix");
	}
}
