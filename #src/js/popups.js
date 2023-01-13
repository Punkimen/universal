// popups
$(function () {
	function showPopup(el) {
		$(".popups").addClass("show");
		$(el).addClass("show");
	}
	function closePopup() {
		$(".popups").removeClass("show");
		$(".popup").removeClass("show");
	}
	$("[data-popup]").on("click", function (e) {
		e.preventDefault();
		let el = $(this).attr("data-popup");
		showPopup(el);
	});

	$(".js-close-popup").on("click", function () {
		closePopup();
	});
	document.addEventListener("click", (e) => {
		if (e.target.className === "popups__inner") {
			closePopup();
		}
	});
});
// popups end
