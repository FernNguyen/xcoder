/**
 * Count Down
 */
$("div#countdown").countdown("2015/04/01")
	.on("update.countdown", function(e) {
		$(this).html(e.strftime("%-w week %-d day<br /><span id=\"time\">%H:%M:%S</span>"));
	});
