// var css = document.querySelector("h3");
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");
// var body = document.getElementById("gradient");

// function setGradient() {
// 	body.style.background = 
// 	"linear-gradient(to right, " 
// 	+ color1.value 
// 	+ ", " 
// 	+ color2.value 
// 	+ ")";

// 	css.textContent = body.style.background + ";";
// }

// color1.addEventListener("input", setGradient);

// color2.addEventListener("input", setGradient);


// var css = document.querySelector("h3");
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");

// color1.addEventListener("input", )

function moveCommad(direction) {
	var whatHappens;
	switch (direction) {
		case "forward":
			whatHappens = "you encounter a monster";
			break;
		case "backward":
			whatHappens = "you go home";
			break;
		case "left":
			whatHappens = "you run into a river";
			break;
		case "right":
			whatHappens = "you run into an orge";
			break;
		default:
		    whatHappens = "please enter a valid directon";			
	}
	return whatHappens;
}