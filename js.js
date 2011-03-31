(function(){
	var equalizeHeights = function() {
		var headers = $('div.campaign'),
			height = 0;

		// Clear existing heights
		headers.height('auto');
		// Find maximum height
		$.map(headers, function(el, i) { return height = (el.offsetHeight > height) ? el.offsetHeight : height; });
		// Set all heights to max
		headers.height(height);
	}

	$(function(){
		equalizeHeights();
	});
})();