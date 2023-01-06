$("select").niceSelect();
$(".nice-select .option").on("click", function () {
	$(this).parents(".nice-select").find(".current").css({color: "#000"});
});
