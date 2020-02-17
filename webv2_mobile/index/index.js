function Swiperdirection()
{
	if (window.matchMedia("(min-width: 1024px) and (orientation: landscape)").matches) 
	{
		var swiper = new Swiper('#start.swiper-container', {
			speed: 600,                   
			parallax: true,                   
			simulateTouch:false,
			loop:true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			autoplay:{
				delay: 3000,
				disableOnInteraction: false,
			}
		});
	}
    else
	{
		var swiper = new Swiper('#start.swiper-container', {
			speed: 600,                   
			parallax: true,                   
			simulateTouch:false,
			loop:true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			autoplay:{
				delay: 3000,
				disableOnInteraction: false,
			}
		}); 
	};
    if (window.matchMedia("(min-width: 1024px) and (max-width: 2200px) and (orientation: landscape)").matches) 
	{
		var swiper = new Swiper('#direction-row-col.swiper-container', {
			direction: 'vertical',
			slidesPerView: 1,
			slidesPerColumn: 3,
			spaceBetween: 10,
			simulateTouch:false,
			observer: true,
			observeParents: true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,                        
				dynamicBullets:true,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});
    }
    else if (window.matchMedia("(max-width: 1439px)" & "(orientation: portrait)").matches) {
        var swiper = new Swiper('#direction-row-col.swiper-container', 
		{												
			direction: 'horizontal',
            slidesPerView: 'auto',
			spaceBetween: 10,
			freeMode: true,
			observer: true,
			observeParents: true,
        });
    }
    else if (window.matchMedia("(max-width: 1023px)").matches) 
	{
		var swiper = new Swiper('#direction-row-col.swiper-container', 
		{												
			direction: 'horizontal',
            slidesPerView: 'auto',
			spaceBetween: 10,
			freeMode: true,
			observer: true,
			observeParents: true,
        });
	}
	else if (window.matchMedia("(min-width: 2201px)").matches) 
	{
		var swiper = new Swiper('#direction-row-col.swiper-container', 
		{												
			direction: 'horizontal',
            slidesPerView: 'auto',
			simulateTouch:false,
            spaceBetween: 10,
            slidesPerGroup: 4,
            loop: true,
            loopFillGroupWithBlank: true,
			freeMode: true,
			observer: true,
			observeParents: true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,                        
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});
    };

    var a = document.getElementsByClassName("tabs")
    for (i = 0; i < a.length; i++) {
        a[i].className = a[i].className.replace(" is-centered", "");
        /*a[i].className += " is-centered";*/
    }
}

function openTab(evt, tabName, swipertab, servicetab) {
    var i, x, tablinks;
    x = document.getElementsByClassName(swipertab);
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName(servicetab);
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" is-active", "");
    }
    document.getElementById(tabName).style.display = "";
    evt.currentTarget.className += " is-active";
} 



/*
function navBurger(){
    var a = document.getElementsByClassName("navbar-burger")
    var b = document.getElementsByClassName("navbar-menu")
    for (i = 0; i < a.length; i++) {
        a[i].className += " is-active";
        b[i].className += " is-active";
    }
}

$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() 
    {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

    });
    // Check for click events on the navbar burger icon
    $(".has-dropdown1 .navbar-link").click(function() 
    {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".has-dropdown1").toggleClass("is-active");
    });
    $(".removeclick").click(function(e) 
    {
        if(!$(e.target).is('#top-nav'))
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".has-dropdown1").removeClass("is-active");
        $(".navbar-burger").removeClass("is-active");
        $(".navbar-menu").removeClass("is-active");
    });
    });
function netflixTab(evt, tabName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("netflix-tab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("netflixtab");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" is-active", "");
    }
    document.getElementById(tabName).style.display = "";
    evt.currentTarget.className += " is-active";
} 
function disneyTab(evt, tabName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("disney-tab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("disneytab");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" is-active", "");
    }
    document.getElementById(tabName).style.display = "";
    evt.currentTarget.className += " is-active";
} 
function skyTab(evt, tabName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("sky-tab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("skytab");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" is-active", "");
    }
    document.getElementById(tabName).style.display = "";
    evt.currentTarget.className += " is-active";
} 
function primeTab(evt, tabName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("prime-tab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("primetab");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" is-active", "");
    }
    document.getElementById(tabName).style.display = "";
    evt.currentTarget.className += " is-active";
}*/ 