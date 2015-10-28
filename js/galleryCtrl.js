angular.module("teahouse").controller("galleryCtrl", function($scope){
    var owl = $("#owl");
    
    owl.owlCarousel({
		autoPlay: 3000,
		items : 4,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,2],
		stopOnHover : true,
        lazyLoad : true
	});
});