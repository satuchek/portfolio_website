var pageLinks = ["#home", "#about", "#work", "#contact"];
var index = 0;

var scroll = 0;
var scrollable = true;

if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

/*window.onload = hideScroll();*/

var p = $("#contact");
var offset = p.offset();


function wheel(event) {
	
	
	event.preventDefault();
	if (scrollable){
		if (scroll == 0){
			scroll = 1;
			if (event.deltaY < 0){
				if (index != 0){
					index--;
					$(pageLinks[index]).get(0).scrollIntoView();
				}
			}else{
				if (index != 3){
					index++;
					//$('html,body').animate({scrollTop: $("contact").scrollTop() }, 1000);
					$(pageLinks[index]).get(0).scrollIntoView();
				}
			}
			setTimeout(function(){scroll=0},500);
		}
	}
}

function setScrollable(state){
	scrollable = state;
}

function adjustIndex(){
	index = 1;
}
