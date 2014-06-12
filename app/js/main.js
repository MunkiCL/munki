$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() > 10){
			$('.welcome').addClass('blur');
		}else{
			$('.welcome').removeClass('blur');
		}
	    if($(this).scrollTop() > 625){
	        $('header').slideDown();

	    }else{
	        $('header').slideUp();

	    }
	});

	



	var slides = $('.slide');

	var glide = $('.slider').glide({
		arrowRightText: '',
		arrowLeftText: '',
		autoplay: false,
		circular: false,
		navigation:false
		// beforeTransition: function() {
		// 	$(slides).eq(-this.currentSlide).removeClass('fadeInUpBig').addClass('fadeOutDownBig');

		// },
		// afterTransition: function() {
		// 	$(slides).eq(-this.currentSlide).removeClass('fadeOutDownBig').addClass('fadeInUpBig');
		// }
	});
	
});



(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-49230615-1', 'munki.cl');
ga('send', 'pageview');