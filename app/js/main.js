$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() > 625){
	        // $('header').slideDown();
	        $('header').removeClass('hidden');
		}else{
	        // $('header').slideUp();
	        $('header').addClass('hidden');
	    }
	});

	



	var slides = $('.slide');

	var glide = $('.slider').glide({
		arrowRightText: '',
		arrowLeftText: '',
		autoplay:7000,
		circular: true,
		navigation:false
		// beforeTransition: function() {
		// 	$(slides).eq(-this.currentSlide).removeClass('fadeInUpBig').addClass('fadeOutDownBig');

		// },
		// afterTransition: function() {
		// 	$(slides).eq(-this.currentSlide).removeClass('fadeOutDownBig').addClass('fadeInUpBig');
		// }
	});

	// $('.hero-info').css('right','35%');
	
});



(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-49230615-1', 'munki.cl');
ga('send', 'pageview');