
$(document).ready(function(){
	
	new WOW().init();

	var $homeLink = $("nav ul li:nth-child(1) a");
	var $projectLink = $("nav ul li:nth-child(2) a");
	var $contactLink = $("nav ul li:last-child a");

	var TIME_DELAY = 4000;
	var currIndex = 0;
	var timer;

	$.localScroll({
		target: 'body', // could be a selector or a jQuery object too.
		queue:true,
		duration:1000,
		hash:true
	});


	var homeWaypoint = new Waypoint({
      element: document.getElementById('home'),
      handler: function(direction) {    
        
        $homeLink.toggleClass("active");
        $homeLink.parent().siblings().find("a").removeClass("active");
      },
      offset: -80
    });  	

	var projectWaypoint = new Waypoint({
      element: document.getElementById('projects'),
      handler: function(direction) {    
        $("header").toggleClass("reversed");
        $projectLink.toggleClass("active");
        $projectLink.parent().siblings().find("a").removeClass("active");
      }
    });

	var contactWaypoint = new Waypoint({
      element: document.getElementById('contact'),
      handler: function(direction) {    
  
        $contactLink.toggleClass("active");
        $contactLink.parent().siblings().find("a").removeClass("active");
      },
      offset: 200
    });    
 

 	$('.slides').parallax("50%", 0.2);
 	$("a.gallery").colorbox({ width: "75%"});

 	// $('.bxslider').bxSlider();

    $("nav.carousel ul li").on("mouseenter", function(){
    	console.log("clicked");
    	// $(this).siblings().removeClass("active");
    	// $(this).addClass("active");

    	var index = $(this).index();
    	// console.log("index: " + index);

    	currIndex = index;
		switchSlide();
    });	


    function switchSlide(){
    	console.log("switchSlide called");
    	$("nav.carousel ul li").removeClass("active");
    	$("nav.carousel ul li").eq(currIndex).addClass("active");

    	$(".slides li").removeClass("active");
    	$(".slides li").eq(currIndex).addClass("active");
    }

    function nextSlide(){
    	console.log("nextSlide called");
    	var nextIndex = currIndex + 1;
    	var total = $("nav.carousel ul li").length;

    	if (nextIndex >= total){
    		nextIndex = 0;
    	}

    	currIndex = nextIndex;
    	switchSlide();
    }

    timer = setInterval(function(){ 
    	nextSlide();
     }, TIME_DELAY);
});













