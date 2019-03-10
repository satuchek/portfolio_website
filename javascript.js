
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var ghostieImages = ["images/Pass_On_Ghostie/ghostie_home.png", "images/Pass_On_Ghostie/ghostie_people.png", "images/Pass_On_Ghostie/ghostie_lava.png", "images/Pass_On_Ghostie/ghostie_puzzle.png", "images/Pass_On_Ghostie/ghostie_pressure_plate.png", "images/Pass_On_Ghostie/ghostie_pressure_plate_solved.png"];
var ghostieImageText = ["The starting screen for the game.", "The arrow indicates the player has possessed someone.", "Lava is a barrier that will kill the player.", "A gravestone will stop the flow of lava.", "Pressure plates must be weighed down.", "Once weighed down, pressure plates open passageways."];

var courageImages = ["images/Liquid_Courage/courage_jump.png", "images/Liquid_Courage/courage_bridge.png", "images/Liquid_Courage/courage_puzzle.png", "images/Liquid_Courage/courage_villager.png", "images/Liquid_Courage/courage_final_boss.png"];
var courageImageText = ["NPCs will auto-jump over small gaps.", "Pathways must be placed for NPCs.", "Items have a durability meter and will give out over time.", "Individual NPCs can be picked up by the player.", "A certain number of NPCs must survive to beat the final boss."];

var gwcImages = ["images/Girls_Who_Code/gwc_breakout.png", "images/Girls_Who_Code/gwc_python.png", "images/Girls_Who_Code/gwc_web.png"];
var gwcImageText = ["A Javascript breakout game the girls completed in Trinket.", "A turtle racing simulator created in Python.", "A beginner website created by students."];

var portfolioImages = ["images/Portfolio_Website/github_repository.png", "images/Portfolio_Website/google_analytics.png", "images/Portfolio_Website/website_netlify.png"];
var portfolioImageText = ["The site's Github repository.", "Site statistics are tracked via Google Analytics.", "The website is hosted with Netlify and updates with Github commits."];

var index = 0;
var currentImages = ghostieImages;
var currentText = ghostieImageText;
var canOpen = true;
var imageID = "";
var textID = "";

initialize();
//drawLines();



function drawLines(){
	c.width  = window.innerWidth;
	c.height = window.innerHeight;
	ctx.strokeStyle = "white";
	ctx.lineWidth = 1;
	ctx.beginPath();
	ctx.moveTo(c.width/12, 0);
	ctx.lineTo(c.width/3.18, c.height);
	ctx.stroke(); 
	ctx.moveTo(c.width/2.5, 0);
	ctx.lineTo(0, c.height);
	ctx.stroke(); 
	ctx.moveTo(0, c.height/3.9);
	ctx.lineTo(2*c.width/3.3, c.height);
	ctx.stroke();
}

function initialize(){
	window.addEventListener("resize", function(){drawLines();}, false);
	drawLines();
}


function expandGhostie(){
	if (canOpen){
		currentText = ghostieImageText;
		currentImages = ghostieImages;
		imageID = "#ghostie_image";
		textID = "ghostieImageText";
		index = 0;
		$('.imageText').css("margin-left" , "20%");
		$(`${imageID}`).attr('src', currentImages[index]);
		document.getElementById(`${textID}`).innerHTML = currentText[index];
		
		
		$('.card').css("opacity" , "0.25");
		$('#ghostie').addClass("noCursor");
		$('#gwc').addClass("noCursor");
		$('#liquid').addClass("noCursor");
		$('#portfolio').addClass("noCursor");
		$('#ghostie_card_expand').css("opacity", "1");
		$('#ghostie_card_expand').css("z-index", "99");
		canOpen = false;
	}
}

function contractGhostie(){
	$('#ghostie').removeClass("noCursor");
	$('#gwc').removeClass("noCursor");
	$('#liquid').removeClass("noCursor");
	$('#portfolio').removeClass("noCursor");
	
	$('#ghostie_card_expand').css("opacity", "0");
	$('#ghostie_card_expand').css("z-index", "-1");
	
	
	$('.card').css("opacity" , "1");
	canOpen = true;
}


function expandGWC(){
	if (canOpen){
		currentImages = gwcImages;
		currentText = gwcImageText;
		imageID = "#GWC_image";
		textID = "gwcImageText";
		
		$('.imageText').css("margin-left" , "20%");
		$(`${imageID}`).attr('src', currentImages[index]);
		document.getElementById(`${textID}`).innerHTML = currentText[index];
		
		$('.card').css("opacity" , "0.25");
		$('#ghostie').addClass("noCursor");
		$('#gwc').addClass("noCursor");
		$('#liquid').addClass("noCursor");
		$('#portfolio').addClass("noCursor");
		$('#GWC_card_expand').css("opacity", "1");
		$('#GWC_card_expand').css("z-index", "99");
		canOpen = false;
	}
}




function contractGWC(){
	$('#ghostie').removeClass("noCursor");
	$('#gwc').removeClass("noCursor");
	$('#liquid').removeClass("noCursor");
	$('#portfolio').removeClass("noCursor");
	
	$('#GWC_card_expand').css("opacity", "0");
	$('#GWC_card_expand').css("z-index", "-1");
	
	
	$('.card').css("opacity" , "1");
	canOpen = true;
}

function expandCourage(){
	if (canOpen){
		
		currentImages = courageImages;
		currentText = courageImageText;
		imageID = "#courage_image";
		textID = "courageImageText";
		index = 0;

		$('.imageText').css("margin-left" , "20%");
		$(`${imageID}`).attr('src', currentImages[index]);
		document.getElementById(`${textID}`).innerHTML = currentText[index];
		
		$('.card').css("opacity" , "0.25");
		$('#ghostie').addClass("noCursor");
		$('#gwc').addClass("noCursor");
		$('#liquid').addClass("noCursor");
		$('#portfolio').addClass("noCursor");
		$('#courage_card_expand').css("opacity", "1");
		$('#courage_card_expand').css("z-index", "99");
		canOpen = false;
	}
}


function contractCourage(){

	$('#ghostie').removeClass("noCursor");
	$('#gwc').removeClass("noCursor");
	$('#liquid').removeClass("noCursor");
	$('#portfolio').removeClass("noCursor");
	
	$('#courage_card_expand').css("opacity", "0");
	$('#courage_card_expand').css("z-index", "-1");
	
	
	$('.card').css("opacity" , "1");
	canOpen = true;
}

function expandPortfolio(){
	if (canOpen){
		currentImages = portfolioImages;
		currentText = portfolioImageText;
		imageID = "#portfolio_image";
		textID = "portfolioImageText";
		index = 0;

		$('.imageText').css("margin-left" , "20%");
		$(`${imageID}`).attr('src', currentImages[index]);
		document.getElementById(`${textID}`).innerHTML = currentText[index];
		
		$('.card').css("opacity" , "0.25");
		$('#ghostie').addClass("noCursor");
		$('#gwc').addClass("noCursor");
		$('#liquid').addClass("noCursor");
		$('#portfolio').addClass("noCursor");
		$('#portfolio_card_expand').css("opacity", "1");
		$('#portfolio_card_expand').css("z-index", "99");
		canOpen = false;
	}
	
}

function contractPortfolio(){
	$('#ghostie').removeClass("noCursor");
	$('#gwc').removeClass("noCursor");
	$('#liquid').removeClass("noCursor");
	$('#portfolio').removeClass("noCursor");
	
	$('#portfolio_card_expand').css("opacity", "0");
	$('#portfolio_card_expand').css("z-index", "-1");
	
	
	$('.card').css("opacity" , "1");
	canOpen = true;
}

function nextImage(){
	if (index < currentImages.length-1){
		index++;
		 $(`${imageID}`).attr('src', currentImages[index]);
		 document.getElementById(`${textID}`).innerHTML = currentText[index];
	}else{
		index = 0;
		$(`${imageID}`).attr('src', currentImages[index]);
		document.getElementById(`${textID}`).innerHTML = currentText[index];
	}
		
		
}



function prevImage(){
	if (index > 0){
		index--;
		$(`${imageID}`).attr('src', currentImages[index]);
		document.getElementById(`${textID}`).innerHTML = currentText[index];
	}else{
		index = currentImages.length - 1;
		$(`${imageID}`).attr('src', currentImages[index]);
		document.getElementById(`${textID}`).innerHTML = currentText[index];
	}
	
}





