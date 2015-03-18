	function nextInfoSlide() {			
		if($('.info-slide.active').next('.info-slide').length > 0){
			// One-liner slide change if there's more left
			$('.info-slide.active').removeClass('active').next('.info-slide').addClass('active').find('.progress-bar').ICM_ProgressBar('start');

			var $slides = $('.info-slide');
			setTimeout(function() {
				var totalBarLength = Math.floor((100 / $slides.length) * ($slides.index($('.info-slide.active')) + 1));
				$('#total-progress .progress-bar').ICM_ProgressBar('animateTo', totalBarLength, infoSlideProgressBarTimer);
			}, 350);
		} else {
			nextOverlayStep();
		}
	}


	/*****************
	This works below
	*****************/

	// make first child active!

	function checkThis() {
	if ($('.socials.active').next('.socials').length > 0) {
		setTimeout(function() {
			$('.socials.active').removeClass('active').next('.socials').addClass('active');
			checkThis();
		}, 2000);
	}
}
checkThis();
